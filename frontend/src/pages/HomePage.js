import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../store/Users';


function HomePage() {
	const user = useSelector((state) => state.user.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutUser = async (e) => {
		e.preventDefault()
		console.log('logged out')
		localStorage.removeItem('authTokens')
		dispatch(logout())
		navigate('/login')
	}
	return (
		<div>
			<h1>This is Home page</h1>
			<p>Hello {user.username}</p>
			<button onClick={logoutUser}>logout</button>
		</div>
	)
}

export default HomePage