import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ product }) => {

    if (!Array.isArray(product) || product.length === 0) {
        return <div>No hay productos disponibles</div>; 
    }

    return (
        <div>
            {product.map((item) => (
                <Item key={item.Id} item={item} />
            ))}
        </div>
    );
}

export default ItemList;
