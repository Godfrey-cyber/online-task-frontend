import { gql, useQuery } from "@apollo/client"

export const GET_CLIENTS = gql`
	query getClients {
		clients {
			id
			name
			email
			phone
		}
	}
`