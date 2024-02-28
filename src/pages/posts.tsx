import data from "../api/posts.json";

export function Posts() {
	return (
		<>
			<section className="flex flex-col mt-16">
				{data.map((a, id) => {
					if (id % 6 === 0 || id % 6 === 1) {
                        <div>
						return (
								<div key={a.id} className="flex flex-col">
									<p>{a.author.name}</p>
									<p>{a.title}</p>
									<p>{a.content}</p>
								</div>
						);
                        </div>
					} else if (id % 6 === 2) {
						return (
							<div key={a.id} className="bgb-">
								<p>{a.author.name}</p>
								<p>{a.title}</p>
								<p>{a.content}</p>
							</div>
						);
					} else if (id % 6 === 3 || id % 6 === 4) {
						return (
							<div key={a.id} className="bgb-">
								<p>{a.author.name}</p>
								<p>{a.title}</p>
								<p>{a.content}</p>
							</div>
						);
					} else {
						return (
							<div key={a.id} className="bgb-">
								<p>{a.author.name}</p>
								<p>{a.title}</p>
								<p>{a.content}</p>
							</div>
						);
					}
				})}
			</section>
		</>
	);
}
