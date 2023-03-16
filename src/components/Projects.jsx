import React from 'react'
import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../queries/projectQueries"
import ProjectCard from "./ProjectCard"
import Spinner from "./Spinner"

const Projects = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS)
	if (loading) return <Spinner />
	if (error) return <p className="text-sm text-red-800 font-normal">Something went wrong</p>

	return (
		<div className="flex flex-col space-y-3 px-20 ">
			{data.projects.length > 0 ? (
				<div className="grid grid-cols-12 gap-x-2 gap-y-3 my-10">
					{data.projects.map(project => (
						<ProjectCard project={project} key={project.id} />
						))}
				</div>
				) : (
				<div className="flex flex-col">
					<p className="text-sm text-emerald-600">No Projects</p>
				</div>
				)}
		</div>
	)
}

export default Projects