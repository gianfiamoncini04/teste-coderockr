import { MouseEventHandler } from "react";
import { useState } from "react"

export function Header(props: {toggleModal: MouseEventHandler<HTMLButtonElement> | undefined }) {
    const [menu, setMenu] = useState(false)

	return (
		<>
			<header className="flex flex-row justify-between items-center px-36 xl:px-80 py-5 lg:py-7 text-white text-3xl font-bold bg-[#2D2D2D] sticky top-0 w-full">
                <a href="/">Rockr Blog</a>
                <div className="space-x-28 hidden xl:block">
                    <a href="/">Posts</a>
                    <button onClick={props.toggleModal}>Contact</button>
                    <a href="/newpost" className="text-xl rounded-full bg-[#F1A10A] py-4 px-8">New Post</a>
                </div>
                <button className="block xl:hidden"><img src="/menu.png" alt="Menu" /></button>
                {/* <div className="space-x-28 block xl:hidden">
                    <a href="/">Posts</a>
                    <button onClick={props.toggleModal}>Contact</button>
                    <a href="/newpost" className="text-xl rounded-full bg-[#F1A10A] py-4 px-8">New Post</a>
                </div> */}
            </header>
		</>
	);
}
