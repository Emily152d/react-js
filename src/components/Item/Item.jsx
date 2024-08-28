import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className='card'>
                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name} className='hola' />
            </div>
        </Link>

    )
}

export default Item