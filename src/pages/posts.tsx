interface PostProps {
	id?: number;
	author?: {
		name?: string;
	};
	title?: string;
	content?: string;
}

export function Posts({data}) {
	return (
		<>
			<section className="flex flex-col mt-16 gap-2">
				{data.map((props: PostProps, id) => (
					<>
						{(id % 6 === 0 || id % 6 === 1)?
							<div key={props.id} className="flex flex-col">
								<a href={`/post/${props.id}`}>{props.id}</a>
								<a href={`/post/${props.id}`}>{props.author?.name}</a>
								<a href={`/post/${props.id}`}>{props.title}</a>
								{/* <a href={`/post/${props.id}`}>{props.content}</a> */}
							</div> 
						:id % 6 === 2 ? 
							<div key={props.id} className="bg-white flex flex-col">
								<a href={`/post/${props.id}`}>{props.id}</a>
								<a href={`/post/${props.id}`}>{props.author?.name}</a>
								<a href={`/post/${props.id}`}>{props.title}</a>
								{/* <a href={`/post/${props.id}`}>{props.content}</a> */}
							</div>
						:(id % 6 === 3 || id % 6 === 4) ?
							<div key={props.id} className="bg-white flex flex-col">
								<a href={`/post/${props.id}`}>{props.id}</a>
								<a href={`/post/${props.id}`}>{props.author?.name}</a>
								<a href={`/post/${props.id}`}>{props.title}</a>
								{/* <a href={`/post/${props.id}`}>{props.content}</a> */}
							</div>
						:
							<div key={props.id} className="bg-white flex flex-col">
								<a href={`/post/${props.id}`}>{props.id}</a>
								<a href={`/post/${props.id}`}>{props.author?.name}</a>
								<a href={`/post/${props.id}`}>{props.title}</a>
								{/* <a href={`/post:${props.id}`}>{props.content}</a> */}
							</div>
						}
					</>
				))}
			</section>
		</>
	);
}
