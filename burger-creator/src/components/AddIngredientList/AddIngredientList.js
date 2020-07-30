import React from 'react';
import AddIngredient from '../AddIngredient/AddIngredient';

const AddIngredientList = props => {
    return props.ingredients.map(ingredient => {
        return (
            <AddIngredient
                key={ingredient.index}
                removeAll={() => props.deleteAllIngredients(ingredient.index)}
                removeOne={() => props.deleteOnlyOneIngredient(ingredient.index)}
                add={() => props.addIngredient(ingredient.index)}
                name={ingredient.name}
                price={ingredient.price}
                amount={ingredient.count} />
        )
    })
}

export default AddIngredientList;