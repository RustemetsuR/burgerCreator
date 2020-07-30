import React, { useState } from 'react';
import './App.css';
import TotalPrice from '../components/TotalPrice/TotalPrice';
import BurgerVisualIngredient from '../components/BurgerVisualIngredient/BurgerVisualIngredient'
import AddIngredientList from '../components/AddIngredientList/AddIngredientList';

const App = () => {

  const [ingredients, setIngredients] = useState([
    { name: 'Meat', count: 0, price: 50, id: 'id-0' },
    { name: 'Salad', count: 0, price: 5, id: 'id-1' },
    { name: 'Cheese', count: 0, price: 20, index: 'id-2' },
    { name: 'Bacon', count: 0, price: 30, index: 'id-3' },
  ]);

  const [totalPrice, setTotalPrice] = useState(20);

  const [burgerVisualIngredients, setBurgerVisualIngredients] = useState([]);

  const [burgerVisualIngredientsIndex, setBurgerVisualIngredientsIndex] = useState(0);

  const addIngredient = id => {
    const index = ingredients.findIndex(ing => ing.id === id);
    let ingredientsCopy = [...ingredients];
    let totalPriceCopy = totalPrice;
    let burgerVisualIngredientsCopy = [...burgerVisualIngredients];
    let burgerVisualIngredientsIndexCopy = burgerVisualIngredientsIndex;
    if (ingredientsCopy[index].count !== 5) {
      burgerVisualIngredientsCopy.push({
        name: ingredientsCopy[index].name,
        index: burgerVisualIngredientsIndexCopy,
      })
      ingredientsCopy[index].count++;
      totalPriceCopy = ingredientsCopy[index].price + totalPriceCopy;
      burgerVisualIngredientsIndexCopy++;
    }
    setTotalPrice(totalPriceCopy);
    setIngredients(ingredientsCopy);
    setBurgerVisualIngredients(burgerVisualIngredientsCopy);
    setBurgerVisualIngredientsIndex(burgerVisualIngredientsIndexCopy);
  }

  const deleteOnlyOneIngredient = id => {
    const index = ingredients.findIndex(ing => ing.id === id);
    let ingredientsCopy = [...ingredients];
    let totalPriceCopy = totalPrice;
    let burgerVisualIngredientsCopy = [...burgerVisualIngredients];
    if (ingredientsCopy[index].count !== 0) {
      ingredientsCopy[index].count--;
      totalPriceCopy = totalPriceCopy - ingredientsCopy[index].price;
      for (let i = 0; i < burgerVisualIngredientsCopy.length; i++) {
        if (burgerVisualIngredientsCopy[i].name === ingredientsCopy[index].name) {
          burgerVisualIngredientsCopy.splice(i, 1);
          break;
        }
      }
    }
    setTotalPrice(totalPriceCopy);
    setIngredients(ingredientsCopy);
    setBurgerVisualIngredients(burgerVisualIngredientsCopy);
  }

  const deleteAllIngredients = id => {
    const index = ingredients.findIndex(ing => ing.id === id);
    let ingredientsCopy = [...ingredients];
    let totalPriceCopy = totalPrice;
    let burgerVisualIngredientsCopy = [...burgerVisualIngredients];
    if (ingredientsCopy[index].count !== 0) {
      totalPriceCopy = totalPriceCopy - ingredientsCopy[index].price * ingredientsCopy[index].count;
      ingredientsCopy[index].count = 0;
      for (let i = 0; i < burgerVisualIngredientsCopy.length; i++) {
        if (burgerVisualIngredientsCopy[i].name === ingredientsCopy[index].name) {
          burgerVisualIngredientsCopy.splice(i, 1);
          i--;
        }
      }
    }
    setBurgerVisualIngredients(burgerVisualIngredientsCopy);
    setTotalPrice(totalPriceCopy);
    setIngredients(ingredientsCopy);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="create-burger-box boxes">
          <h2>Ingredients</h2>
          <AddIngredientList
            ingredients={ingredients}
            deleteAllIngredients={deleteAllIngredients}
            deleteOnlyOneIngredient={deleteOnlyOneIngredient}
            addIngredient={addIngredient} />
        </div>
        <div className="burger-box boxes">
        <h2>Burger</h2>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            <BurgerVisualIngredient burgerVisualIngredients={burgerVisualIngredients} />
            <div className="BreadBottom"></div>
          </div>
          <TotalPrice price={totalPrice} />
        </div>

      </div>

    </div>
  );
}

export default App;
