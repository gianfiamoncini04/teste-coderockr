export function NewPost() {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen my-16">
				<section className="flex flex-col justify-center items-center gap-24 py-28 bg-white max-w-[1280px] w-full">
					<img
						src="https://sample-posts-frontend-test.s3.amazonaws.com/post_16.jpg"
						alt="Post"
						className="size-96 rounded-full object-cover aspect-square"
					/>
					<h1 className="text-[#F1A10A] font-bold text-4xl">New Post</h1>

					<form className="flex flex-col">
						<label htmlFor="title"  className="text-2xl">Title</label>
						<input type="text" id="title" placeholder="Fill the title" className="input"/>

						<label htmlFor="author"  className="text-2xl">Author</label>
						<input type="text" id="author" placeholder="Fill the author name" className="input"/>

						<label htmlFor="img"  className="text-2xl">Image URL</label>
						<input type="text" id="img" placeholder="Fill the image URL" className="input"/>

						<label htmlFor="post " className="text-2xl">Post</label>
						<textarea id="post" placeholder="Post..." cols="30" rows="6" className="input"/>

						<button type="submit" className="button">
							<img src="/pencil.png" alt="Pencil" className="fill-white"/>
							Create Post
						</button>
					</form>
				</section>
			</div>
		</>
	);
}
