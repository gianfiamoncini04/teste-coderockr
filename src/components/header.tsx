import { MouseEventHandler } from "react";

export function Header(props: {toggleModal: MouseEventHandler<HTMLButtonElement> | undefined }) {
	return (
		<>
			<header className="flex flex-row justify-between items-center px-80 py-7 text-white text-3xl font-bold bg-[#2D2D2D] sticky top-0 w-full">
                <p>Rockr Blog</p>
                <div className="space-x-28">
                    <a href="/">Posts</a>
                    <button onClick={props.toggleModal}>Contact</button>
                    <a href="/newpost" className="text-xl rounded-full bg-[#F1A10A] py-4 px-8">New Post</a>
                </div>
            </header>
		</>
	);
}
