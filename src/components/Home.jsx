import React from 'react'
import Clients from "./Clients"
import Section from "./Section"
import Projects from "./Projects"

const Home = () => {
	return (
		<div className="px-20 my-12 w-full h-[calc(100vh - 60px)]">
			<div className="flex flex-col space-y-3">
				<Section />
				<Clients />
				<Projects />
			</div>
		</div>
	)
}

export default Home