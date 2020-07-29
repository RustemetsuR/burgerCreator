import React, { useState } from 'react';
import './App.css';

const App = () => {
  const INGREDIENTS = [
    { name: 'Meat', price: 50 },
    { name: 'Salad', price: 5 },
    { name: 'Cheese', price: 20 },
    { name: 'Beacon', price: 30 },
  ];

  const [ingredients, setIngredients] = useState([
    { name: 'Meat', count: 0 },
    { name: 'Salad', count: 0 },
    { name: 'Cheese', count: 0 },
    { name: 'Beacon', count: 0 },
  ]);
  return (
    <div className="App">
      <div className="Burger">
        <div class="BreadTop">
          <div class="Seeds1"></div>
          <div class="Seeds2"></div>
        </div>
        <div class="BreadBottom"></div>
      </div>
    </div>
  );
}

export default App;
