import { useParams } from "react-router-dom";

export function SinglePost({data}) {
	const { postid } = useParams();
	const post = data.find(a => a.id === parseInt(postid));

	return (
		<>
			<section className="flex justify-center items-center min-h-screen my-16">
				<div className="flex flex-col justify-center items-center gap-24 bg-white max-w-[1280px] w-full">
					<section className="grid grid-cols-[1fr_1fr] space-x-24">
						<img src={post.image} alt="Image" className="size-[640px]"/>
						<section className="flex flex-col items-start justify-center gap-11">
							<p className="text-[#032937] text-lg">{post.createdAt}</p>
							<p className="text-[#2D2D2D] text-2xl">{post.author?.name}</p>
							<p className="text-[#F1A10A] text-4xl font-semibold max-w-96">{post.title}</p>
						</section>
					</section>
					<p className="mx-64 pb-24 text-xl text-start">{post.content}</p>
				</div>
			</section>
		</>
	);
}
