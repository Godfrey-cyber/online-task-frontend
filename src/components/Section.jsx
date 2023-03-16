import React from 'react'
import { useNavigate } from "react-router-dom"

const Section = () => {
	const navigate = useNavigate()
	return (
		<div className="flex flex-col space-y-3 mt-6 w-full px-20">
			<p className="text-2xl font-bold text-emerald-400 hover:underline cursor-pointer">React + Vite</p>
			<button onClick={() => navigate("/add_project")} className="text-sm rounded-3xl w-fit bg-emerald-400 hover:bg-emerald-500 transition delay-300 hover:text-white px-6 py-2 cursor-pointer text-black font-medium text-gray-50">
				Add Project
			</button>
		</div>
	)
}

export default Section