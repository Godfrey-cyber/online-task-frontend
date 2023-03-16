import React from 'react'
import { useQuery } from "@apollo/client"
import ClientRow from "./ClientRow"
import { GET_CLIENTS } from "../queries/clientQueries.js"
import Spinner from "./Spinner"


const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS)

	if (loading) return <Spinner />
	if (error) return <p className="text-sm text-red-800 font-normal">Something went wrong</p>

	return (
		<div className="flex flex-col space-y-3 px-20 mt-10">
			{!loading && !error && (
				<table className="table-fixed large_table border-collapse">
				  	<thead className="bg-green-100">
				    	<tr className="large_row">
					      	<th className="large_head">Name</th>
					      	<th className="large_head">Email</th>
					      	<th className="large_head">Phone</th>
					      	<th className="large_head"></th>
				    	</tr>
				  	</thead>
				  	<tbody>
				    	{data.clients.map(client => (
				    		<ClientRow client={client} key={client.id} />
				    		))}
				  	</tbody>
				</table>
			)}
		</div>
		)
	
}

{/*<div className="flex flex-col space-y-3">*/}
// </div>}
export default Clients