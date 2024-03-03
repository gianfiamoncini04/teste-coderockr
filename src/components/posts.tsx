export function Posts() {
	return (
		<>
			<section className="flex flex-wrap max-xl:justify-center max-xl:items-center mt-16 gap-20">
				<div className="flex flex-col justify-center items-center xl:grid xl:grid-cols-[1fr_1fr] bg-white">
					<a href="/post/1" className="flex flex-col xl:flex-row justify-center items-center gap-6 mb-4 xl:gap-0 xl:mb-0">
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_1.jpg" alt="Photo1" className="xl:size-64 2xl:size-80 object-cover aspect-video xl:aspect-square"/>
						<div className="flex flex-col gap-3 ml-6 xl:ml-20">
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Sheila C. Boyd</p>
							<p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#F1A10A] font-semibold">I hope the dog doesn't slobber on me.</p>
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl max-xl:max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod vestibulum erat vulputate semp</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
					</a>
					<a href="/post/2" className="flex flex-col xl:flex-row justify-center items-center gap-6 mb-4 xl:gap-0 xl:mb-0">
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg" alt="Photo2" className="xl:size-64 2xl:size-80 object-cover aspect-video xl:aspect-square"/>
						<div className="flex flex-col gap-3 ml-6 xl:ml-20">
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Noah McCann</p>
							<p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#F1A10A] font-semibold">What are you looking for?</p>
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl max-xl:max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
					</a>
				</div>
				<a href="/post/3" className="flex flex-col xl:flex-row gap-10 xl:gap-20 justify-center items-center bg-white xl:w-full xl:max-w-[1280px] xl:ml-[35%] mb-4 xl:mb-0">
					<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_3.jpg" alt="Photo3" className="xl:size-[640px] object-top aspect-video xl:aspect-square"/>
					<div className="flex flex-col gap-8 ml-6 xl:ml-0">
						<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Marisa Rossi</p>
						<p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#F1A10A] font-semibold">I just got hired at this restaurant.</p>
						<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl max-xl:max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus sed orci consectetur ultricies.</p>
					</div>
					<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
				</a>
				<div className="flex flex-col justify-center items-center xl:grid xl:grid-cols-[1fr_1fr] bg-white">
					<a href="/post/4" className="flex flex-col-reverse xl:flex-row justify-center items-center gap-4 mb-4 xl:gap-0 xl:mb-0">
						<div className="flex flex-col gap-3 ml-6 pl-0 xl:pl-8 xl:ml-20">
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Castore Bellucci</p>
							<p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#F1A10A] font-semibold">His liver was failing.</p>
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl max-xl:max-w-[550px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis diam, feugiat sit amet efficitur at, tincidunt vitae sem.</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_4.jpg" alt="Photo4" className="xl:size-64 2xl:size-80 object-cover aspect-video xl:aspect-square" />
					</a>
					<a href="/post/5" className="flex flex-col-reverse xl:flex-row justify-center items-center gap-4 mb-4 xl:gap-0 xl:mb-0">
						<div className="flex flex-col gap-3 ml-6 pl-0 xl:pl-8 xl:ml-20">
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Carla Alves Rodrigues</p>
							<p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#F1A10A] font-semibold">Don’t worry, be happy!</p>
							<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl max-xl:max-w-[550px]">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut pulvinar orci vitae arcu pharetra, ac dictum ante porttitor.</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_5.jpg" alt="Photo5" className="xl:size-64 2xl:size-80 object-cover aspect-video xl:aspect-square" />
					</a>
				</div>
				<a href="/post/6" className="flex flex-col xl:flex-row gap-10 xl:gap-20 justify-center items-center bg-white xl:w-full xl:max-w-[1280px] mb-4 xl:mb-0">
					<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_6.jpg" alt="Photo6" className="xl:size-[640px] object-top aspect-video xl:aspect-square"/>
					<div className="flex flex-col gap-8 xl:pl-8 ml-6 xl:ml-0">
						<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">Noah McCann</p>
						<p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#F1A10A] font-semibold">We don't need to do everything on the list.</p>
						<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl max-xl:max-w-[550px]">Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Fusce sodales quam ex, id volutpat felis vulputate id.</p>
					</div>
					<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
				</a>
			</section>
		</>
	);
}
