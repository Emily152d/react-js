import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {

    if (!Array.isArray(products) || products.length === 0) {
        return <div>No hay productos disponibles</div>; 
    }

    return (
        <div>
            {products.map((item) => (
                <Item item={item} />
            ))}
        </div>
    );
}

export default ItemList;
