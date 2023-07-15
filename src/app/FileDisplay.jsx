import "./globals.css";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import { ImFolderDownload } from "react-icons/im";
import JSZip from "jszip";
import FileSaver from "file-saver";

export default function FileDisplay({ files, onDelete, onDeleteAll }) {
	const handleDelete = (fileName) => {
		onDelete(fileName);
	};

	const handleDeleteAll = () => {
		onDeleteAll();
	};

	const handleDownload = (fileName) => {
		const fileToDownload = files.find((file) => file.name === fileName);
		if (fileToDownload && fileToDownload.reportGenerated) {
			const reportData = fileToDownload.output;
			const blob = new Blob([reportData], { type: "text/plain" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = `${fileToDownload.name}_report.txt`;
			link.click();
			URL.revokeObjectURL(url);
		}
	};

	const handleDownloadAll = () => {
		const filesWithReports = files.filter((file) => file.reportGenerated);
		if (filesWithReports.length === 0) {
			return;
		}

		const zip = new JSZip();
		filesWithReports.forEach((file) => {
			const reportData = file.output;
			zip.file(`${file.name}_report.txt`, reportData);
		});
		zip.generateAsync({ type: "blob" }).then((content) => {
			FileSaver.saveAs(content, "reports.zip");
		});
	};

	if (!files || files.length === 0) {
		return null;
	}

	return (
		<div className="w-full flex flex-col items-center justify-center">
			<hr className="my-8 py-4 w-1/2 border-gray-500" />
			<table className="table-auto text-gray-300 rounded-md overflow-hidden ring-1 ring-gray-300 shadow-inner bg-gradient-to-br from-indigo-800/30 via-purple-800/30 to-pink-800/30">
				<thead>
					<tr>
						<th className="px-4 py-2">
							<button
								className="btn btn-ghost hover:bg-transparent text-red-700 hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
								onClick={handleDeleteAll}
							>
								<FiTrash2 className="h-5 w-auto" />
							</button>
						</th>
						<th className="px-4 py-2">File Name</th>
						<th className="px-4 py-2 text-center">
							Execution Report
						</th>
					</tr>
				</thead>
				<tbody>
					{files.map((file, index) => (
						<tr
							key={index}
							// className="hover:bg-gradient-to-br from-indigo-600/40 via-purple-600/40 to-pink-600/40 transition ease-in-out  hover:text-white duration-300"
							className="hover:bg-purple-500/40 hover:ring-1 ring-gray-300 hover:text-white shadow-inner transition ease-in-out duration-300"
						>
							<td className="px-4 py-2">
								<button
									className="btn btn-ghost hover:bg-transparent text-red-700  hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
									onClick={() => handleDelete(file.name)}
								>
									<RxCrossCircled className="h-5 w-auto" />
								</button>
							</td>
							<td className="px-4 py-2 text-left">
								{file.name}
								<br />
								<div className="badge badge-ghost badge-sm p-3 bg-black text-gray-300 hover:text-white transition ease-in-out duration-300">
									{file.type ||
										file.name.substring(
											file.name.lastIndexOf(".")
										)}
								</div>
							</td>
							<td className="px-4 py-2 text-center">
								{file.reportGenerated ? (
									<button
										className="btn btn-outline btn-sm bg-gradient-to-br text-gray-300 hover:from-indigo-300/80 hover:to-white hover:scale-110 shadow-md hover:shadow-gray-900/30 transition ease-in-out duration-300"
										onClick={() =>
											handleDownload(file.name)
										}
									>
										{/* Download */}
										<FiDownload className="scale-125" />
									</button>
								) : file.loading ? (
									<span className="loading loading-spinner loading-md"></span>
								) : (
									<span className="text-gray-400">
										Not Generated
									</span>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{files.filter((file) => file.reportGenerated).length > 1 && (
				<button
					className="btn btn-md mt-8 py-4 text-gray-300 hover:text-white rounded-lg px-4 flex items-center justify-center hover:ring-1 ring-inset ring-gray-300 transition ease-in-out hover:scale-110 duration-300 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-md hover:shadow-gray-500"
					onClick={handleDownloadAll}
				>
					<ImFolderDownload />
					Download All
				</button>
			)}
		</div>
	);
}
