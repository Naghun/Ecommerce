import React from 'react'
import '../resources/css/Card.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../store/Product'
import { useState } from 'react'

function ItemComponent({props}) {

	const [amount, setAmount] = useState(1)
	const dispatch=useDispatch()
	return (
		<div className='card card-container'>
		<h4 className="card-title card-title-custom">{props.name}</h4>
		<img src={props.picture} className='card-img-top cards' alt='card-img-cap'></img>
		<hr className='hr-top'/>
		<div className="card-body">
			<p className="card-text">Price: <span>{props.price}$</span></p>
			<p className="card-text">In store: <span>{props.avalible}</span></p>
			<p className="card-text characters">{props.characteristics}</p>
			<button className='btn btn-success col-8' 
			onClick={() => {dispatch(addItem({id:props.id, name:props.name, price: props.price, picture:props.picture, amount:amount}))}}>Add To Cart</button>
			<div className='col-10 m-1 amount-container'>
				<label htmlFor='amount'>Amount</label>
				<input 
				type='number'
				className='form-control col-5'
				id='amount'
				value={amount}
				onChange={(e) => {setAmount(e.target.value)}}
				/>
			</div>
		</div>
		</div>
	)
}

export default ItemComponent