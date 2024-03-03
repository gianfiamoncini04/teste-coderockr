import { MouseEventHandler } from "react";
import { useState } from "react"

export function Header(props: {toggleModal: MouseEventHandler<HTMLButtonElement> | undefined }) {
    const [menu, setMenu] = useState(false)

	return (
		<>
			<header className="flex flex-row justify-between items-center px-16 sm:px-36 2xl:px-80 py-5 lg:py-7 text-white text-xl 2xl:text-3xl font-bold bg-[#2D2D2D] sticky top-0 w-full">
                <a href="/">Rockr Blog</a>
                <div className="space-x-28 hidden xl:block">
                    <a href="/">Posts</a>
                    <button onClick={props.toggleModal}>Contact</button>
                    <a href="/newpost" className="text-xl rounded-full bg-[#F1A10A] py-4 px-8">New Post</a>
                </div>
                <button className="block xl:hidden" onClick={() => (setMenu(!menu))}><img src="/menu.png" alt="Menu" className="size-6"/></button>
                <div className={`flex xl:hidden flex-col justify-start items-start absolute gap-10 right-0 top-0 z-[999] min-h-screen bg-[#2D2D2D] p-8 w-40 sm:w-52 md:w-72 origin-right animate-open-menu ${menu ? "block" : "hidden"}`}>
                    <button className="self-end" onClick={() => {setMenu(!menu)}}>
						<svg className="fill-white size-6" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
					</button>
                    <div className="flex flex-col gap-8 justify-start items-start text-sm xl:text-xl">
                        <a href="/">Posts</a>
                        <button onClick={props.toggleModal}>Contact</button>
                        <a href="/newpost" className="text-sm xl:text-xl rounded-full bg-[#F1A10A] py-1 px-1 sm:py-2 sm:px-4 xl:py-4 xl:px-8">New Post</a>
                    </div>
                </div>
            </header>
		</>
	);
}
