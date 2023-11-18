import React from 'react'
import '../resources/css/Navigation.css'
import dropdownIcon from '../resources/images/dropdown-icon.ico'
import CartImg from '../resources/images/shopping-cart.png'
import { Link } from 'react-router-dom'
import { useSelector} from "react-redux";

function Navigation() {
	const amount = useSelector((state) => state.product.amount)
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-nav fixed-top ">
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className='navbar-brand col-2 h1 h1-navbar m-0'>Budad E-Commerce</div>
		<div className='col-7 offset-1 collapse navbar-collapse d-flex justify-content-center align-items-center' id='navbarNav'>
			<ul className='col-12 navbar-nav h3 mr-auto d-flex justify-content-space-around align-items-center'>
				<li className='col-3 nav-item active-true'><Link to='/' className='nav-link'>Home</Link></li>
				<li className='col-3 nav-item'><Link to='/shop/' className='nav-link'>Shop</Link></li>
				<li className='col-3 nav-item'><Link to='/login/' className='nav-link'>Login</Link></li>
				<li className='col-3 nav-item d-flex'><Link to='/cart/' className='nav-link col-4 d-flex justify-content-center align-items-center'>Cart 
				<div className='cart-container'>
				<img src={CartImg} alt='cart' /> <span className='cart-num'>{amount}</span></div>
				</Link></li>
			</ul>
		</div>
		
		<div className='col-2 user-info user-interaction bg-light text-dark border-bottom border-left hover rounded'>
			<h3 className='col user-name'>Naghun</h3>
			<div className='col-2 dropdown'><img src={dropdownIcon} className='dropdown-icon' alt='dropdown icon'/></div>
		</div>

		</nav>
)}

export default Navigation