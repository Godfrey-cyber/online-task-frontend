import React from 'react'
import { useNavigate } from "react-router-dom"
import { TrashIcon } from '@heroicons/react/24/outline'

const ProjectCard = ({ project }) => {
	const navigate = useNavigate()

	const styleText = (status) => {
		if (status === "Completed") {
			return "text-red-500"
		} 
		if (status === "Not Started") {
			return "text-yellow-500"
		} 
		if (status === "In Progress") {
			return "text-green-500"
		} 
	}
	return (
		<div onClick={() => navigate(`/${project.id}`)} className="col-span-12 group flex space-x-2 md:col-span-6 lg:col-span-4 cursor-pointer w-72 bg-white rounded-m shadow-md shadow-gray-300 mx-auto p-4">
			<span className="flex flex-col space-y-2 ">
				<p className="text-2xl font-bold text-gray-500 hover:text-emerald-500 transition delay-200">{project.name}</p>
				<p className={`project_data ${styleText(project.status)}`}>Status: {project.status}</p>
				<p className="project_data truncate">ID: {project.id}</p>
				{/*<p className="table_data"></p>*/}
			</span>
			<span className="flex">
				<TrashIcon className="h-6 w-6 text-red-600 cursor-pointer" />
			</span>
		</div>
	)
}

export default ProjectCard