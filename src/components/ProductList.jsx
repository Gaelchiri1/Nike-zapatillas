import React from 'react';
import { data } from '../data';

export const ProductList = ({allProducts, setAllProducts}) => {

    const onAddProduct = product =>{
        

        setAllProducts([...allProducts, product])
        comsole.log(allProducts)
    };

    return (
        <div className="container-items">
            {
            data.map(product => (
                <div className="item" key={product.id}>
                    <figure>
					<img
						src= {product.img} 
						alt={product.nameProducto}
					/>
				</figure>
				<div className="info-product">
					<h2>{product.nameProducto}</h2>
					<p className="price">${product.precio}</p>
					<button onClick={() => onAddProduct (product)}>Añadir al carrito</button>
				</div>
                </div>
            ))
            }
        </div>
    );
};