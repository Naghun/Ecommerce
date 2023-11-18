import React from "react";
import { useSelector, useDispatch } from "react-redux";
import '../resources/css/CartPage.css'
import { useEffect } from "react";
import { addItem, clearCart } from "../store/Product";
import { Link } from "react-router-dom";

function CartPage() {

	const products = useSelector((state) => state.product.items)
	const total = useSelector((state) => state.product.total)
	const dispatch = useDispatch()

	useEffect(()=>{
		const storedProducts=JSON.parse(localStorage.getItem('products'))

		if (storedProducts) {
			dispatch(clearCart());
			storedProducts.forEach(item => {
				dispatch(addItem(item))
			})
		}
	}, [dispatch]) 

	const ciscenje = () => {
		dispatch(clearCart())
		localStorage.removeItem('products');
	}
	return (
		<div className="container d-flex flex-column justify-center align-center">
		<h1 className="text-center w-100">Cart Page</h1>
		<div className="row w-100 d-flex flex-column justify-content-center align-items-center">
		{products.map((product) => (
			<div className="col12 d-flex cart-card justify-content-around align-items-center p-2 w-100">
				<h3 className="col-3">{product.name}</h3>
				<h3 className="col-3">{product.price}$</h3>
				<h3 className="col-3">Amount: {product.amount}</h3>
				<div className="col-3"><img src={product.picture} alt="product" className="cart-image"/></div>
			</div>
			)	
		)}
		<h3 className="d-flex w-100 justify-content-center align-items-center border-top p-2">Total price: {total}$</h3>
		<div className="col-12 d-flex justify-content-center align-items-center">
			{localStorage.products ? <button onClick={ciscenje} className="col-3 cart-button bg-danger text-light">Empty Cart</button> : <Link to='/shop/'>Go to Shop</Link>}
		</div>
		</div>
		</div>
	);
}

export default CartPage
