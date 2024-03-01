export function Posts() {
	return (
		<>
			<section className="flex flex-wrap mt-16 gap-20">
				<div className="grid grid-cols-[1fr_1fr] bg-white">
					<a href="/post/1" className="flex flex-row justify-center items-center">
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_1.jpg" alt="Photo1" className="size-80 object-cover aspect-square"/>
						<div className="flex flex-col gap-3 ml-20">
							<p className="text-2xl">Sheila C. Boyd</p>
							<p className="text-4xl text-[#F1A10A] font-semibold">I hope the dog doesn't slobber on me.</p>
							<p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod vestibulum erat vulputate semp</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
					</a>
					<a href="/post/2" className="flex flex-row justify-center items-center">
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_2.jpg" alt="Photo2" className="size-80 object-cover aspect-square"/>
						<div className="flex flex-col gap-3 ml-20">
							<p className="text-2xl">Noah McCann</p>
							<p className="text-4xl text-[#F1A10A] font-semibold">What are you looking for?</p>
							<p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl felis, vehicula eget imperdiet vitae</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
					</a>
				</div>
				<a href="/post/3" className="flex flex-row gap-20 justify-center items-center bg-white w-full max-w-[1280px] ml-[35%]">
					<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_3.jpg" alt="Photo3" className="size-[640px] object-cover aspect-square"/>
					<div className="flex flex-col gap-8">
						<p className="text-2xl">Marisa Rossi</p>
						<p className="text-4xl text-[#F1A10A] font-semibold">I just got hired at this restaurant.</p>
						<p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget lectus sed orci consectetur ultricies.</p>
					</div>
					<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
				</a>
				<div className="grid grid-cols-[1fr_1fr] bg-white">
					<a href="/post/4" className="flex flex-row justify-center items-center">
						<div className="flex flex-col gap-3 pl-8 ml-20">
							<p className="text-2xl">Castore Bellucci</p>
							<p className="text-4xl text-[#F1A10A] font-semibold">His liver was failing.</p>
							<p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis diam, feugiat sit amet efficitur at, tincidunt vitae sem.</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_4.jpg" alt="Photo4" className="size-80 object-cover aspect-square" />
					</a>
					<a href="/post/5" className="flex flex-row justify-center items-center">
						<div className="flex flex-col gap-3 pl-8 ml-20">
							<p className="text-2xl">Carla Alves Rodrigues</p>
							<p className="text-4xl text-[#F1A10A] font-semibold">Don’t worry, be happy!</p>
							<p className="text-2xl">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Ut pulvinar orci vitae arcu pharetra, ac dictum ante porttitor.</p>
						</div>
						<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
						<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_5.jpg" alt="Photo5" className="size-80 object-cover aspect-square" />
					</a>
				</div>
				<a href="/post/6" className="flex flex-row gap-20 justify-center items-center bg-white w-full max-w-[1280px]">
					<img src="https://sample-posts-frontend-test.s3.amazonaws.com/post_6.jpg" alt="Photo6" className="size-[640px] object-cover aspect-square"/>
					<div className="flex flex-col gap-8 pl-8">
						<p className="text-2xl">Noah McCann</p>
						<p className="text-4xl text-[#F1A10A] font-semibold">We don't need to do everything on the list.</p>
						<p className="text-2xl">Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit. Fusce sodales quam ex, id volutpat felis vulputate id.</p>
					</div>
					<img src="/arrow.png" alt="Arrow" className="size-8 self-end mb-4 mr-10"/>
				</a>
			</section>
		</>
	);
}
