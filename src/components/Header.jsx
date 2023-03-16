import React from 'react'
import { useNavigate } from "react-router-dom"

const Header = () => {
	const navigate = useNavigate()
	return (
		<nav className="header_section">
			<span onClick={() => navigate("/")} className="header_logo">.Arc</span>
			<div className="flex space-x-3 items-center">
				<span className="flex space-x-3 items-center">
					<p className="header_list">Jobs</p>
					<p className="header_list">News</p>
					<p className="header_list">Updates</p>
					<p className="header_list">Trends</p>
				</span>
				<button onClick={() => navigate("/register")} className="header_button">Register</button>
			</div>
		</nav>
	)
}

export default Header