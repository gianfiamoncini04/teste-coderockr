import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header.tsx";
import { Posts } from "./pages/posts.tsx";
import { NewPost } from "./pages/newpost.tsx";
import { Contact } from "./pages/contact.tsx";

export function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/newpost" element={<NewPost />} />
			</Routes>
		</>
	);
}
