import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header.tsx";
import { Posts } from "./pages/posts.tsx";
import { NewPost } from "./pages/newpost.tsx";
import { Contact } from "./components/contact.tsx";
import { SinglePost } from "./pages/single-post.tsx";

import { useState } from "react";

import data from "./api/posts.json";

export function App() {
	const [modal, setModal] = useState(false);
	
	return (
		<>
			<Header toggleModal={() => {setModal(!modal)}}/>
			<Contact modal={modal} toggleModal={() => {setModal(!modal)}}/>
			<Routes>
				<Route path="/" element={<Posts data={data} />} />
				<Route path="/post/:postid" element={<SinglePost data={data} />} />
				<Route path="/newpost" element={<NewPost />} />
			</Routes>
		</>
	);
}
