import { useParams } from "react-router-dom";

export function SinglePost({data}) {
	const { postid } = useParams();
	const post = data.find(a => a.id === parseInt(postid));

	return (
		<>
			<section className="flex justify-center items-center min-h-screen my-16">
				<div className="flex flex-col justify-center items-center gap-24 bg-white max-w-[300px] sm:max-w-[400px] md:max-w-[680px] lg:max-w-[880px] xl:max-w-[1080px] 2xl:max-w-[1280px] w-full">
					<section className="grid grid-cols-[1fr_1fr] space-x-4 sm:space-x-10 md:space-x-12 lg:space-x-14 xl:space-x-18 2xl:space-x-24">
						<img src={post.image} alt="Image" className="object-cover aspect-square size-[340px] md:size-[440px] lg:size-[540px] xl:size-[600px] 2xl:size-[640px]"/>
						<section className="flex flex-col items-start justify-center gap-6 md:gap-11">
							<p className="text-[#032937] text-sm lg:text-md xl:text-lg">{post.createdAt}</p>
							<p className="text-[#2D2D2D] text-md md:text-lg lg:text-xl xl:text-2xl">{post.author?.name}</p>
							<p className="text-[#F1A10A] text-lg md:text-xl lg:text-2xl xl:text-4xl font-semibold max-w-48 md:max-w-96">{post.title}</p>
						</section>
					</section>
					<p className="mx-12 md:mx-32 lg:mx-48 xl:mx-56 2xl:mx-64 pb-24 text-sm md:text-md lg:text-lg xl:text-xl text-start">{post.content}</p>
				</div>
			</section>
		</>
	);
}
