import React from 'react'
import { GET_PROJECT } from "../queries/projectQueries"
import Spinner from "./Spinner"
import DeleteProject from "./DeleteProject"
import EditProjectForm from "./EditProjectForm"
import ClientInfo from "./ClientInfo"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"

const ProjectDetails = () => {
	const { id } = useParams()
	const { loading, error, data } = useQuery(GET_PROJECT,{ variables: { id } })

	if (loading) return <Spinner />
	if (error) return <p className="text-sm text-red-800 font-normal">Something went wrong</p>

	return (
		<section className="w-full h-[calc(100vh - 60px)] px-20 bg-gray-100">
			{!loading && !error && (
			<div className="flex flex-col rounded-md p-3 shadow-md shadow-gray-300 mx-auto bg-white w-3/5 my-12">
				<p className="text-xl font-bold text-gray-500">{data.project.name}</p>
				<span className="flex flex-col space-y-2">
					<p className="text-sm font-normal text-gray-700">{data.project.description}</p>
					<span className="flex space-x-3 items-center my-3">
						<p className="text-lg font-normal text-emerald-700">Project Status: </p>
						<p className="text-sm font-normal text-gray-500">{data.project.status}</p>
					</span>
				</span>
				<ClientInfo client={data.project.client} />
				<DeleteProject projectId={data.project.id} />
			</div>
			)
		}
		<EditProjectForm project={data.project} />
		</section>
	)
}

export default ProjectDetails