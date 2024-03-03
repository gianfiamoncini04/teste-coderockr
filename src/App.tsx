import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header.tsx";
import { Contact } from "./components/contact.tsx";
import { NewPost } from "./pages/newpost.tsx";
import { Home } from "./pages/home-infinito.tsx";
import { SinglePost } from "./pages/single-post.tsx";
import { useState } from "react";

export function App() {
	const [modal, setModal] = useState(false);
	
	return (
		<>
			<Header toggleModal={() => {setModal(!modal)}}/>
			<Contact modal={modal} toggleModal={() => {setModal(!modal)}}/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:postid" element={<SinglePost />} />
				<Route path="/newpost" element={<NewPost />} />
			</Routes>
		</>
	);
}
