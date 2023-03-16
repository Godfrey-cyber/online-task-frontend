import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useMutation } from "@apollo/client"
import { DELETE_CLIENT } from "../mutations/clientMutation"
import { GET_CLIENTS } from "../queries/clientQueries.js"
import { GET_PROJECTS } from "../queries/projectQueries"

const ClientRow = ({ client }) => {
	const [deleteClient] = useMutation(DELETE_CLIENT, {
		variables: { id: client.id },
		refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }] 
		// update(cache, { data: { deleteClient }}) {
		// 	const { clients } = cache.readQuery({ query: GET_CLIENTS });
		// 	cache.writeQuery({
		// 		query: GET_CLIENTS,
		// 		data: { clients: clients.filter(client => client.id !== deleteClient.id) }
		// 	})
		// }
	})
	return (
		<tr className="bg-white hover:bg-green-50">
			<td className="table_data">{client.name}</td>
			<td className="table_data">{client.email}</td>
			<td className="table_data">{client.phone}</td>
			<td className="table_data">
				<span onClick={deleteClient} className="flex">
					<TrashIcon className="h-6 w-6 text-red-600 cursor-pointer" />
				</span>
			</td>
		</tr>
	)
}

export default ClientRow