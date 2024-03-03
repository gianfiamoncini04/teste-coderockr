import { Posts } from "../components/posts.tsx";
import { useState, useEffect } from "react"

export function Home() {
    const [Infinito, setInfinito] = useState(0)

    useEffect(() => {
        const Scroll = () => {
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                setInfinito(a => a + 1)
            }
        }

        window.addEventListener('scroll', Scroll);

        return () => {
          window.removeEventListener('scroll', Scroll);
        };
    },[Infinito])

	return (
		<>
			<Posts />
			{[...Array(Infinito)].map((index) => (
				<Posts key={index} />
			))}
		</>
	);
}
