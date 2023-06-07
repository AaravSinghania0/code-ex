import "./globals.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Home() {
	return (
		<div className="bg-black">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
