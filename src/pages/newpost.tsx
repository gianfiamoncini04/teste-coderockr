export function NewPost() {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen my-16">
				<section className="flex flex-col justify-center items-center gap-24 py-28 bg-white max-w-[340px] sm:max-w-[580px] md:max-w-[740px] lg:max-w-[980px] xl:max-w-[1180px] 2xl:max-w-[1280px] w-full">
					<img
						src="https://sample-posts-frontend-test.s3.amazonaws.com/post_16.jpg"
						alt="Post"
						className="size-60 sm:size-64 md:size-72 lg:size-80 xl:size-96 rounded-full object-cover aspect-square"
					/>
					<h1 className="text-[#F1A10A] font-bold text-4xl">New Post</h1>

					<form className="flex flex-col">
						<label htmlFor="title"  className="label">Title</label>
						<input type="text" id="title" placeholder="Fill the title" className="input"/>

						<label htmlFor="author"  className="label">Author</label>
						<input type="text" id="author" placeholder="Fill the author name" className="input"/>

						<label htmlFor="img"  className="label">Image URL</label>
						<input type="text" id="img" placeholder="Fill the image URL" className="input"/>

						<label htmlFor="post " className="label">Post</label>
						<textarea id="post" placeholder="Post..." cols={30} rows={6} className="input"/>

						<button type="submit" className="button-newpost">
							<img src="/pencil.png" alt="Pencil" className="fill-white size-5 md:size-7"/>
							Create Post
						</button>
					</form>
				</section>
			</div>
		</>
	);
}
