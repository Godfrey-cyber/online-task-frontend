import React from 'react'
import { PhoneIcon, UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const ClientInfo = ({ client }) => {
	return (
		<div className="flex flex-col space-y-2">
			<span className="flex space-x-3 items-center">
				<UserCircleIcon className="h-6 w-6 text-emerald-600 cursor-pointer" />
				<p className="text-sm text-gray-800 font-normal">{client?.name}</p>
			</span>
			<span className="flex space-x-3 items-center">
				<EnvelopeIcon className="h-6 w-6 text-emerald-600 cursor-pointer" />
				<p className="text-sm text-gray-800 font-normal">{client?.email}</p>
			</span>
			<span className="flex space-x-3 items-center">
				<PhoneIcon className="h-6 w-6 text-emerald-600 cursor-pointer" />
				<p className="text-sm text-gray-800 font-normal">{client?.phone}</p>
			</span>
		</div>
	)
}

export default ClientInfo