import React from 'react'
import { useNavigate } from "react-router-dom"
import { GET_PROJECTS } from "../queries/projectQueries" 
import { DELETE_PROJECT } from "../mutations/projectMutations"
import { useMutation } from "@apollo/client"
import { TrashIcon } from '@heroicons/react/24/outline'

const DeleteProject = ({ projectId }) => {
	const navigate = useNavigate()
	const [deleteProject] = useMutation(DELETE_PROJECT, {
		variables: { id: projectId },
		onCompleted: () => navigate("/"),
		refetchQueries: [{ query: GET_PROJECTS }],
	})
	return (
		<div className="flex space-x-4 items-center">
			<span onClick={deleteProject} className="flex text-white w-fit  my-4 rounded-md bg-red-500 px-4 py-2 space-x-2">
				<TrashIcon className="h-6 w-6 text-white" /> Delete Project
			</span>
			{/*<span onClick={deleteProject} className="flex text-white w-fit  my-4 rounded-md bg-blue-500 px-4 py-2 space-x-2">
				<TrashIcon className="h-6 w-6 text-white" /> Edit Project
			</span>*/}
		</div>
	)
}

export default DeleteProject