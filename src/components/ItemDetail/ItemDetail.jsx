import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name}/>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>

            <ItemCount initial={1} stock={product.stock}/>
        </div>
    )
}

export default ItemDetail