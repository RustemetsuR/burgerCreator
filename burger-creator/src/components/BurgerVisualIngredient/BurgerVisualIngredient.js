import React from 'react';
import VisualIngredient from '../VisualIngredient/VisualIngredient';

const BurgerVisualIngredient = props => {
    return props.burgerVisualIngredients.map(ingredient =>{
        return(
          <VisualIngredient key={ingredient.id} ingredient={ingredient.name}/>
        )
      })
}

export default BurgerVisualIngredient;