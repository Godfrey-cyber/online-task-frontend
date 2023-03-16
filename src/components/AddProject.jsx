import { useState } from 'react'
// import { ADD_CLIENT } from "../mutations/clientMutation"
import { GET_PROJECTS } from "../queries/projectQueries"
import { ADD_PROJECT } from "../mutations/projectMutations"
import { GET_CLIENTS } from "../queries/clientQueries"
import { useQuery, useMutation } from  "@apollo/client"
import { useNavigate } from "react-router-dom"

const AddProject = () => {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [status, setStatus] = useState("new")
	const [clientId, setClientId] = useState("")
	// const [client, setClient] = useState("")

	const navigate = useNavigate()

	const { loading, error, data } = useQuery(GET_CLIENTS)

	const [addProject] = useMutation(ADD_PROJECT, {
	variables: { name, description, status, clientId },
	update(cache, {data: { addProject } }) {
		const { projects } = cache.readQuery({ query: GET_PROJECTS });
		cache.writeQuery({
			query: GET_PROJECTS,
			data: { projects: [...projects, addProject]}
		})
	}
})

	const onSubmit = (event) => {
		event.preventDefault()
		if (name === "" || status === "" || description === "") {
			return <p className="text-red-700 text-sm font-normal">Add all fields</p>
		}

		addProject(name, description, clientId, status)
		setStatus("new")
		setName("")
		setClientId("")
		setDescription("")
		navigate("/")

		if (loading) return null
			if (error)return 'Something went wrong'
	}
	return (
		<section className="w-full h-[calc(100vh - 60px)] px-20 bg-gray-100">
			{!loading && ! error && (
				<form onSubmit={onSubmit} className="my-12 flex flex-col space-y-3 w-[600px] h-fit rounded-md shadow-md shadow-gray-200 bg-white p-4 mx-auto">
					<span className="flex flex-col my-4 px-12">
						<p className="text-2xl text-gray-700 font-medium">Add a Project</p>
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
							<option value="new">In Progress</option>
							<option value="new">Completed</option>
						</select>
					</span>
					<span className="form_span">
						<label htmlFor="name">Client: {clientId}</label>
						<select onChange={(event) => setClientId(event.target.value)} className="form_input" name="" id="clientId" value={clientId}>
							<option value="">Select Client</option>
							{data.clients.map(client => (
								<option key={client.id} value={client.id}>{client.name}</option>
								))}
						</select>
					</span>
					<span className="form_span">
						<button type="submit" className="bg-emerald-300 mx-auto my-2 text-white text-lg w-full font-medium rounded-md px-4 py-3">AddProject</button>
					</span>
				</form>
			)}
		</section>
	)
}

export default AddProject