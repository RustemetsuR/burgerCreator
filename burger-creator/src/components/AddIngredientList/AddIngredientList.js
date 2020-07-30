import React from 'react';
import AddIngredient from '../AddIngredient/AddIngredient';

const AddIngredientList = props => {
    return props.ingredients.map(ingredient => {
        return (
            <AddIngredient
                key={ingredient.id}
                removeAll={() => props.deleteAllIngredients(ingredient.id)}
                removeOne={() => props.deleteOnlyOneIngredient(ingredient.id)}
                add={() => props.addIngredient(ingredient.id)}
                name={ingredient.name}
                price={ingredient.price}
                amount={ingredient.count} />
        )
    })
}

export default AddIngredientList;