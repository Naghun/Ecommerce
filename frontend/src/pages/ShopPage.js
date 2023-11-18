import React from 'react'
import { useState, useEffect } from 'react'
import ItemComponent from '../components/ItemComponent'
import '../resources/css/ShopPage.css'


function ShopPage() {
	const [products, setProducts] = useState([])
	useEffect( () => {
		getProducts()
	}, [])

	const getProducts = async () => {
		const response = await fetch ('/api/items/')
		const data = await response.json()
		setProducts(data)
	}

	return (
		<div className='container container-extend-lg m-2 w-90 page-container'>
		<div className='row justify-content-center align-items-center g-2'>
			{products.map((product) => (
			<div key={product.id} className='col-3 g-2 p-2'>
				<ItemComponent props={product} />
			</div>
			))}
		</div>
		</div>
	)
}

export default ShopPage