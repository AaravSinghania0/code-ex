import "./globals.css";
import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { FiDownload, FiTrash2 } from "react-icons/fi";
import { ImFolderDownload } from "react-icons/im";
import JSZip from "jszip";
import FileSaver from "file-saver";

export default function FileDisplay({ files, onDelete, onDeleteAll }) {
	const handleDelete = (fileName) => {
		// Handle delete logic for the file here
		onDelete(fileName);
	};

	const handleDownload = (fileName) => {
		// Handle download logic for the file here
		const fileToDownload = files.find((file) => file.name === fileName);

		if (fileToDownload && fileToDownload.reportGenerated) {
			// Simulating report download for the file
			// Replace this code with actual download logic

			// Create a dummy report data
			const reportData = `This is the report for ${fileToDownload.name}`;

			// Create a Blob object from the report data
			const blob = new Blob([reportData], { type: "text/plain" });

			// Generate a temporary URL for the Blob object
			const url = URL.createObjectURL(blob);

			// Create a temporary anchor element
			const link = document.createElement("a");
			link.href = url;
			link.download = `${fileToDownload.name}_report.txt`;
			link.click();

			// Clean up the URL object
			URL.revokeObjectURL(url);
		}
	};

	const handleDeleteAll = () => {
		onDeleteAll();
	};

	const handleDownloadAll = () => {
		// Filter the files that have reports generated
		const filesWithReports = files.filter((file) => file.reportGenerated);

		if (filesWithReports.length === 0) {
			// No files with reports generated
			return;
		}

		const zip = new JSZip();

		// Iterate over the files with reports and add them to the zip file
		filesWithReports.forEach((file) => {
			// Simulating report data for each file
			const reportData = `This is the report for ${file.name}`;

			// Add the report file to the zip
			zip.file(`${file.name}_report.txt`, reportData);
		});

		// Generate the zip file asynchronously
		zip.generateAsync({ type: "blob" }).then((content) => {
			// Save the zip file using FileSaver.js
			FileSaver.saveAs(content, "reports.zip");
		});
	};

	if (!files || files.length === 0) {
		return null;
	}

	return (
		<div className="w-full flex flex-col items-center justify-center">
			<hr className="my-8 py-4 w-1/2 border-gray-500" />
			<table className="table-auto text-gray-300 rounded-md overflow-hidden ring-1 ring-gray-500 shadow-inner bg-gradient-to-br from-indigo-800/20 via-purple-800/20 to-pink-800/20">
				<thead>
					<tr>
						<th className="px-4 py-2">
							<button
								className="text-red-700 hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
								onClick={handleDeleteAll}
							>
								<FiTrash2 />
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
							className="hover:bg-purple-600/40 hover:text-white shadow-inner transition ease-in-out duration-300"
						>
							<td className="px-4 py-2">
								<button
									className="text-red-700 hover:text-red-500 hover:scale-125 transition ease-in-out duration-300"
									onClick={() => handleDelete(file.name)}
								>
									<RxCrossCircled />
								</button>
							</td>
							<td className="px-4 py-2 text-left">
								{file.name}
								<br />
								<div className="badge badge-ghost badge-sm p-3 bg-black text-gray-300 hover:text-white transition ease-in-out duration-300">
									{file.type || "unknown"}
								</div>
							</td>
							<td className="px-4 py-2 text-center">
								{file.reportGenerated ? (
									<button
										className="btn btn-ghost btn-sm hover:scale-110 hover:shadow-md transition ease-in-out duration-300"
										onClick={() =>
											handleDownload(file.name)
										}
									>
										<FiDownload />
										Download
									</button>
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
			<button
				className="btn btn-md m-4 py-4 text-gray-300 hover:text-white rounded-lg px-4 flex items-center justify-center hover:ring-1 ring-inset ring-gray-300 transition ease-in-out hover:scale-110 duration-300 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-md hover:shadow-gray-500"
				onClick={handleDownloadAll}
			>
				<ImFolderDownload />
				Download All
			</button>
		</div>
	);
}
