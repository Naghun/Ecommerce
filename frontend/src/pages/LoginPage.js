import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getUser, logout } from '../store/Users';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function LoginPage() {
  	const [user, setUser] = useState(
		localStorage.getItem('authTokens') 
		? jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access)
		: ''
  	)
	const [authtokens, setAuthTokens] = useState(
		localStorage.getItem('authTokens')
		? JSON.parse(localStorage.getItem('authTokens'))
		: ''
	)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const loginUser = async (e) => {
		e.preventDefault()
		console.log('form submitted')
		let response = await fetch('/api/token/', {
		method:'POST',
		headers: {
			'content-type' : 'application/json'
		},
		body:JSON.stringify({
			'username' : e.target.username.value,
			'password' : e.target.password.value
		})
		})

    	let data = await response.json()

		if (response.status === 200){
		setAuthTokens(data)
		setUser(jwtDecode(data.access))
		localStorage.setItem('authTokens', JSON.stringify(data))
		dispatch(getUser({ user: user }));
		navigate('/')
		} else {
			alert("something went wrong")
		}
    
  	}

  	return (
		<div>
			<h1>This is Login Page</h1>
			<form className='d-flex flex-column justify-content-center align-items-center' onSubmit={loginUser}>
				<input type='text' name='username' placeholder='Enter Username' className='mt-2 mb-2 col-12 border border-2 border-dark rounded fs-5'></input>
				<input type='password' name='password' placeholder='Enter Password' className='mt-2 mb-2 col-12 border border-2 border-dark rounded'></input>
				<button type='submit' className='mt-2 mb-2 col-8'>Log me in</button>
			</form>
			<div>
			{user?
				<div>
					<h1>These are details about user</h1>
					{user?<p>Hello {user.username}</p>: ''}
				</div>
				: null
			}
			</div>
		</div>
  	)
}

export default LoginPage