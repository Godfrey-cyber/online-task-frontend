import React, { useState } from 'react'
import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { GET_PROJECT } from "../queries/projectQueries"
import { UPDATE_PROJECT } from "../mutations/projectMutations"

const EditProjectForm = ({ project }) => {

	const [name, setName] = useState(project.name)
	const [description, setDescription] = useState(project.description)
	const [status, setStatus] = useState("")

	const navigate = useNavigate()

	const [updateProject] = useMutation(UPDATE_PROJECT, { variables: { id: project.id, name, description, status },
		refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id }}],
	})

	const onSubmit = (event) => {
		event.preventDefault()
		if (!name || !status || !description) {
			return <p className="text-red-700 text-sm font-normal">Add all fields</p>
		}

		updateProject(name, description, status)
		navigate("/")
	}
	return (
		<section className="w-full h-[calc(100vh - 60px)] px-20 bg-gray-100">
			<form onSubmit={onSubmit} className="my-12 flex flex-col space-y-3 w-[600px] h-fit rounded-md shadow-md shadow-gray-200 bg-white p-4 mx-auto">
				<span className="flex flex-col my-4 px-12">
					<p className="text-2xl text-gray-700 font-medium">Edit a Project</p>
				</span>
				<span className="form_span">
					<label htmlFor="name">Name</label>
					<input onChange={(event) => setName(event.target.value)} type="text" name="name" value={name} className="form_input" />
				</span>
				<span className="form_span">
					<label htmlFor="name">Description</label>
					<textarea onChange={(event) => setDescription(event.target.value)} type="text" name="description" value={description} className="form_input" ></textarea>
				</span>
				<span className="form_span">
					<label htmlFor="name">Status</label>
					<select onChange={(event) => setStatus(event.target.value)} className="form_input" name="" id="status" value={status}>
						<option value="new">Not Started</option>
						<option value="progress">In Progress</option>
						<option value="completed">Completed</option>
					</select>
				</span>
				<span className="form_span">
					<button type="submit" className="bg-emerald-300 mx-auto my-2 text-white text-lg w-full font-medium rounded-md px-4 py-3">AddProject</button>
				</span>
			</form>
		</section>
	)
}

export default EditProjectForm