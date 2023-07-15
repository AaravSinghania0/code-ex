"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	GlobeAltIcon,
	XMarkIcon,
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/24/solid";
import "./globals.css";
import {
	SiVisualstudiocode,
	SiGooglechrome,
	SiAndroidstudio,
	SiWindowsterminal,
} from "react-icons/si";

const navigation = [
	{ name: "Home", href: "#" },
	{ name: "About", href: "#" },
	{ name: "Contact", href: "mailto:aaravatar@gmail.com" },
];

const integrations = [
	{
		name: "Visual Studio Code",
		href: "#",
		description: "Go-to editor for developers.",
		icon: SiVisualstudiocode,
	},
	{
		name: "Google Chrome",
		href: "#",
		description: "Integrate directly into your browser.",
		icon: SiGooglechrome,
	},
	{
		name: "Android Studio",
		href: "#",
		description: "Coming soon.",
		icon: SiAndroidstudio,
	},
	{
		name: "Web-App",
		href: "#",
		description: "Coming soon.",
		icon: GlobeAltIcon,
	},
];
const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 m-2 top-0 z-50 bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 rounded-lg shadow-2xl backdrop-blur-lg">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Code-Ex</span>
						{/* <img
							className="h-10 w-auto rounded-lg hover:bg-black/60 transition ease-in-out hover:scale-110 duration-300 hover:shadow-inner"
							src=""
							alt="Code-Ex"
						/> */}
						<h1 className="text-lg font-semibold leading-6 p-2 rounded-lg ring-1 ring-white text-white transition ease-in-out hover:scale-110 duration-300">
							<SiWindowsterminal className="inline mx-1" />
							Code-Ex
						</h1>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-base font-semibold leading-6 p-2 rounded-lg text-gray-300 hover:text-white transition ease-in-out hover:scale-110 duration-300 hover:bg-black/60 hover:shadow-inner"
						>
							{item.name}
						</a>
					))}
					<Popover className="relative ">
						<Popover.Button className="inline-flex items-center gap-x-1 text-base font-semibold leading-6 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-black/60 transition ease-in-out hover:scale-110 duration-300 hover:shadow-inner">
							<span>Integrations</span>
							<ChevronDownIcon
								className="h-5 w-5"
								aria-hidden="true"
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel className="absolute left-1/2 z-10 mt-4 flex w-screen max-w-max -translate-x-1/2 px-4">
								<div className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-gray-950 text-sm leading-6 shadow-lg ring-1 ring-gray-700">
									<div className="p-4">
										{integrations.map((item) => (
											<div
												key={item.name}
												className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-900 transition ease-in-out duration-300"
											>
												<div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900 group-hover:bg-gray-100 transition ease-in-out duration-300">
													<item.icon
														className="h-6 w-6 text-gray-300 group-hover:text-indigo-600 transition ease-in-out duration-300"
														aria-hidden="true"
													/>
												</div>
												<div>
													<a
														href={item.href}
														className="font-semibold text-gray-300 hover:text-white transition ease-in-out duration-300"
													>
														{item.name}
														<span className="absolute inset-0" />
													</a>
													<p className="mt-1 text-gray-500">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
									<div className="grid grid-cols-2 divide-x divide-gray-700 bg-gray-900 ring-1 ring-gray-700">
										{callsToAction.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="group flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-300 hover:text-white hover:bg-gray-800 transition ease-in-out duration-300"
											>
												<item.icon
													className="h-5 w-5 flex-none text-gray-300 group-hover:text-white"
													aria-hidden="true"
												/>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="https://github.com/AaravSinghania0?tab=repositories"
						target="_blank"
						className="text-base font-semibold leading-6 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-black/60 transition ease-in-out hover:scale-110 duration-300 hover:shadow-inner"
					>
						View other projects{" "}
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-300/50">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Code-Ex</span>
							{/* <img
							className="h-10 w-auto rounded-lg hover:bg-black/60 transition ease-in-out hover:scale-110 duration-300 hover:shadow-inner"
							src=""
							alt="Code-Ex"
							/> */}
							<h1 className="text-lg font-semibold leading-6 p-2 text-white transition ease-in-out hover:scale-110 duration-300">
								<SiWindowsterminal className="inline mx-1" />
								Code-Ex
							</h1>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-300"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-gray-950/60 transition ease-in-out duration-300 hover:ring-1 ring-gray-300/50"
									>
										{item.name}
									</a>
								))}
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-gray-950/60 transition ease-in-out duration-300 hover:ring-1 ring-gray-300/50">
												Integrations
												<ChevronDownIcon
													className={classNames(
														open
															? "rotate-180"
															: "",
														"h-5 w-5 flex-none transition ease-in-out duration-300"
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{[
													...integrations,
													...callsToAction,
												].map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:text-white hover:bg-gray-950/60 transition ease-in-out duration-300 hover:ring-1 ring-gray-300/50"
													>
														<item.icon className="inline w-4 mr-2" />
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
							<div className="py-6">
								<a
									href="https://github.com/AaravSinghania0?tab=repositories"
									target="_blank"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:text-white hover:bg-gray-950/60 transition ease-in-out duration-300 hover:ring-1 ring-gray-300/50"
								>
									View other projects{" "}
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
