import { MouseEventHandler } from "react";

export function Contact(props: { modal: boolean; toggleModal: MouseEventHandler<HTMLButtonElement> | undefined }) {
	return (
		<>	
			<div className={`${props.modal ? "fixed" : "hidden"} fixed top-0 left-0 w-screen h-screen bg-[#00000090]`}></div>

			<section className={`${props.modal ? "absolute" : "hidden"} bg-white flex flex-col justify-center items-center gap-12 my-60 px-4 pb-12 max-w-[810px] w-full left-1/2 translate-x-[-50%]`}>
				<button onClick={props.toggleModal} className="text-6xl font-light self-end">×</button>
				<h1 className="text-[#F1A10A] font-bold text-4xl">Contact</h1>
				<form className="flex flex-col">
					<label htmlFor="title"  className="text-2xl">Name</label>
					<input type="text" id="title" placeholder="Fill your full name" className="input"/>

					<label htmlFor="author"  className="text-2xl">E-mail</label>
					<input type="text" id="author" placeholder="Fill a valid e-mail" className="input"/>

					<label htmlFor="img"  className="text-2xl">Phone</label>
					<input type="number" id="img" placeholder="Fill your phone" className="input"/>

					<label htmlFor="post " className="text-2xl">Post</label>
					<textarea id="post" placeholder="Hello..." cols={30} rows={6} className="input"/>

					<button type="submit" className="button">
						<img src="/send.png" alt="Pencil" className="fill-white"/>
						Submit
					</button>
				</form>
			</section>
		</>
	);
}