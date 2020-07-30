import React from 'react';
import './AddIngredient.css';

const AddIngredient = props => {
    return (
        <div className="add-ingr">
            <button onClick={props.add}>+</button>
            <h3 className='name'>{props.name}</h3>
            <p className='price'>Price: {props.price} kgs</p>
            <p className='amount'>{props.amount}x</p>
            <button className="remove-one" onClick={props.removeOne}>-1</button>
            <button className="remove-all" onClick={props.removeAll}>Clear</button>
        </div>
    )
}

export default AddIngredient;