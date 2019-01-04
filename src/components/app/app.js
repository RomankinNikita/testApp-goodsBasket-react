import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './app.css';
import GoodsListPage from '../goods-list-folder/goods-list-page/goods-list-page';
import GoodsBasketPage from '../goods-basket-folder/goods-basket-page/goods-basket-page';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      goods: [
        { id: 'i1', name: 'Клюшка', price: 890, amount: 0 },
        { id: 'i2', name: 'Коньки', price: 20, amount: 0 },
        { id: 'i3', name: 'Шайба', price: 428, amount: 0 },
        { id: 'i4', name: 'Шлем', price: 45, amount: 0 },
      ]
    };

    this.onAddItem = (id) => {
      this.changeItemAmount(id);
    };

    this.onDeleteOneItem = (id) => {
      this.changeItemAmount(id, false);
    };

    this.onDeleteAllItems = (id) => {
      this.changeItemAmount(id, true, true);
    }

    this.onClearBasket = () => {
      this.setState(({ goods }) => {
        const goodsCopy = [...goods];
        for (const item of goodsCopy) {
          item.amount = 0;
        }

        return {
          goods: goodsCopy
        };
      });
    };
  }

  changeItemAmount(id, isAdd = true, isClear = false) {
    this.setState(({ goods }) => {
      const index = goods.findIndex((item) => item.id === id);
      const targetItem = goods[index];
      let amount = isAdd ? targetItem.amount + 1 : targetItem.amount - 1;
      amount = isClear ? 0 : amount;
      const changedItem = { ...targetItem, amount };
      const newArray = [
        ...goods.slice(0, index),
        changedItem,
        ...goods.slice(index + 1)
      ];

      return {
        goods: newArray
      };
    });
  }

  render() {
    const { goods } = this.state;
    return (
      <Router>
        <React.Fragment>
          <Route path="/"
                 exact
                 render={
                   () => <Redirect to="/list"/>
                 }/>
          <Route path="/list"
                 render={
                  () => <GoodsListPage goods={goods} onAddItem={this.onAddItem} />
                 }
          />
          <Route path="/basket"
                 render={
                   () => <GoodsBasketPage goods={goods}
                   onClearBasket={this.onClearBasket}
                   onDeleteOneItem={this.onDeleteOneItem}
                   onDeleteAllItems={this.onDeleteAllItems} />
                 }/>
        </React.Fragment>
      </Router>
    )
  }
}