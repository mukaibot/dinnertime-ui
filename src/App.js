import React, {Component} from 'react';
import Items from './items';
import Meals from './mealPlan';
import './App.scss';

class App extends Component {
  renderShoppingListItem = (item) => {
    return (
      <li>
        {item.name}
        {item.qty && <span> - {item.qty}</span>}
      </li>
    )
  };

  renderMeal = (meal) => {
    return (
      <div>
        <h2>{meal.day}</h2>
        <hr/>
        <div className="family">
          <h3>{meal.timothy ? "Family" : "Everyone"}</h3>
          <span>{meal.family}</span>
        </div>
        {
          meal.timothy &&
          <div className="timothy">
            <h3>Timothy</h3>
            <span>{meal.timothy}</span>
          </div>
        }
      </div>
    )
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dinner time!</h1>
        </header>
        <div className="home-content">
          <div className="shopping-list">
            <h1>Shopping list</h1>
            <ul>
              {Items.items.map(item => this.renderShoppingListItem(item))}
            </ul>
          </div>
          <div className="meal-plan">
            <h1>This week's menu</h1>
            {Meals.map(meal => this.renderMeal(meal))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
