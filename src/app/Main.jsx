"use client";
import "./globals.css";
import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { BsRocketTakeoff, BsFileEarmarkCode, BsLinkedin } from "react-icons/bs";
import FileDisplay from "./FileDisplay";

function UploadButton({ onUpload }) {
	const handleUpload = (event) => {
		// Convert FileList to an array
		const uploadedFiles = Array.from(event.target.files);

		// Handle file upload logic here
		onUpload(uploadedFiles);
	};

	return (
		<div className="relative inline-block m-4 py-2">
			<label
				htmlFor="file-upload"
				className="btn btn-md text-gray-300 hover:text-white rounded-lg py-2 px-4 flex items-center justify-center hover:ring-1 ring-inset ring-gray-300 transition ease-in-out hover:scale-110 duration-300 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-md hover:shadow-gray-500"
			>
				<FiUpload />
				Upload Files
			</label>
			<input
				id="file-upload"
				type="file"
				multiple
				className="hidden"
				onChange={handleUpload}
			/>
		</div>
	);
}

const ReportButton = ({ files, onExecute }) => {
	const handleClick = () => {
		// Handle file upload logic here
		onExecute(files);
	};

	return (
		<div className="relative inline-block m-4 py-2">
			<label
				htmlFor="report-btn"
				className="btn btn-md text-gray-300 hover:text-white rounded-lg py-2 px-4 flex items-center justify-center hover:ring-1 ring-inset ring-gray-300 transition ease-in-out hover:scale-110 duration-300 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-md hover:shadow-gray-500"
			>
				<BsFileEarmarkCode />
				Execute
			</label>
			<input
				id="report-btn"
				type="submit"
				className="hidden"
				onClick={handleClick}
			/>
		</div>
	);
};

export default function Main() {
	const [files, setFiles] = useState([]);

	const handleFileUpload = (uploadedFiles) => {
		const filesWithReports = uploadedFiles.map((file) => ({
			name: file.name,
			type: file.type,
			size: file.size,
			reportGenerated: false,
		}));
		setFiles((prevFiles) => [...prevFiles, ...filesWithReports]);
	};

	const handleDelete = (fileName) => {
		setFiles((prevFiles) =>
			prevFiles.filter((file) => file.name !== fileName)
		);
	};

	const handleDeleteAll = () => {
		setFiles([]);
	};

	const handleExecute = (filesToExecute) => {
		// Send files to Piston API for execution
		// Update the reportGenerated property accordingly
		const updatedFiles = files.map((file) => {
			if (
				filesToExecute.some((execFile) => execFile.name === file.name)
			) {
				return { ...file, reportGenerated: true };
			} else {
				return file;
			}
		});
		setFiles(updatedFiles);
	};

	return (
		<div className="relative isolate px-6 py-6 lg:px-8">
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>

			<div className="mx-auto max-w-full py-24 sm:py-28 lg:py-32">
				<div className="mb-8 flex justify-center">
					<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-300/20 transition ease-in-out duration-300 hover:text-white hover:ring-gray-300/50">
						<BsLinkedin className="inline mr-1" />
						Connect with me on LinkedIn{" "}
						<a
							href="https://linkedin.com/in/aaravsinghania"
							target="_blank"
							className="font-semibold text-indigo-500/50 transition ease-in-out duration-300 hover:text-indigo-500"
						>
							<span
								className="absolute inset-0"
								aria-hidden="true"
							/>
							here <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
				<div className="text-center">
					<h1 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-6xl flex items-center justify-center gap-x-4">
						Test your code online
						<BsRocketTakeoff className="text-gray-400 hover:text-white transition ease-in-out duration-300" />
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-400">
						Upload and run multiple files of code and get detailed
						reports on the outputs or errors in the code by
						virtually executing them simultaneously.
					</p>
					<p className="mx-auto lg:w-1/2 mt-4 text-lg leading-8 text-gray-400">
						Step 1: Choose & upload the files containing the code
						you wish to run.
						<br />
						(You can remove or add more files later as well.)
						<br />
						Step 2: Click on 'Execute' to run the selected files.
						<br />
						(Note: The API used for code execution is rate-limited
						to 5 requests per second. It may take some time to run
						more than 5 files.)
						<br />
						Step 3: Check for the report download button under
						'Report Status' below.
						<br />
						(Or you can download all the reports together in a zip
						file.)
					</p>
					<div className="mt-8 flex flex-col items-center justify-center">
						<UploadButton onUpload={handleFileUpload} />
						{files.length > 0 && (
							<ReportButton
								files={files}
								onExecute={handleExecute}
							/>
						)}
						{files.length > 0 && (
							<FileDisplay
								files={files}
								onDelete={handleDelete}
								onDeleteAll={handleDeleteAll}
							/>
						)}
					</div>
				</div>
			</div>
			<div
				className="absolute inset-x-0 top-[calc(100%-36rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%+8rem)] aspect-[1155/678] w-[24rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+16rem)] sm:w-[48rem]"
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
				/>
			</div>
		</div>
	);
}
