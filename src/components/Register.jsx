import { useState } from 'react'
import { ADD_CLIENT } from "../mutations/clientMutation"
import { GET_CLIENTS } from "../queries/clientQueries"
import { useMutation } from  "@apollo/client"
import { useNavigate } from "react-router-dom"

const Register = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")

	const navigate = useNavigate()

	const [addClient] = useMutation(ADD_CLIENT, {
	variables: { name, email, phone },
	update(cache, {data: { addClient } }) {
		const { clients } = cache.readQuery({ query: GET_CLIENTS });
		cache.writeQuery({
			query: GET_CLIENTS,
			data: { clients: [...clients, addClient]}
		})
	}
})

	const onSubmit = (event) => {
		event.preventDefault()
		if (name === "" || email === "" || phone === "") {
			return <p className="text-red-700 text-sm font-normal">Add all fields</p>
		}

		addClient(name, email, phone)
		setPhone("")
		setEmail("")
		setName("")
		navigate("/")
	}
	return (
		<section className="w-full h-[calc(100vh - 60px)] px-20 bg-gray-100">
			<form onSubmit={onSubmit} className="my-12 flex flex-col space-y-3 w-[600px] h-fit rounded-md shadow-md shadow-gray-200 bg-white p-4 mx-auto">
				<span className="flex flex-col my-4 px-12">
					<p className="text-2xl text-gray-700 font-medium">Register Client</p>
				</span>
				<span className="form_span">
					<label htmlFor="name">Name</label>
					<input onChange={(event) => setName(event.target.value)} type="text" name="name" value={name} className="form_input" />
				</span>
				<span className="form_span">
					<label htmlFor="name">Email</label>
					<input onChange={(event) => setEmail(event.target.value)} type="text" name="email" value={email} className="form_input" />
				</span>
				<span className="form_span">
				<label htmlFor="name">Phone</label>
					<input onChange={(event) => setPhone(event.target.value)} type="text" name="phome" value={phone} className="form_input" />
				</span>
				<span className="form_span">
					<button type="submit" className="bg-emerald-300 mx-auto my-2 text-white text-lg w-full font-medium rounded-md px-4 py-3">Register</button>
				</span>
			</form>
		</section>
	)
}

export default Register