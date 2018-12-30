import React, {Component} from 'react';
import './goods-basket.css';

export default class GoodsBasket extends Component {
  render() {
    const {goods, onDeleteOneItem, onDeleteAllItems} = this.props;

    const inBasketElements = goods.filter((it) => it.amount > 0);

    const totalCost = inBasketElements.reduce((acc, {price, amount}) => {
      return acc + price * amount;
    }, 0);    

    const elements = inBasketElements.map((item) => {
      const {id, name, price, amount} = item;

      return (
        <tr key={id}>
          <th scope="row">{name}</th>
          <td>{`$${price * amount}`}</td>
          <td>{amount}</td>
          <td>
            <button className="btn btn-success"
                    onClick={() => {onDeleteOneItem(id)}}>
             &#8722;
            </button>
          </td>
          <td>
          <button className="btn btn-success"
                    onClick={() => {onDeleteAllItems(id)}}>
              Удалить все
            </button>
          </td>
        </tr>
      );
    })

    return (
      <div>
        <table className="table table-hover">
          <thead align="center" valign="center" className="thead-dark">
            <tr>
              <th>Название</th>
              <th>Стоимость</th>
              <th>Количество</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        
          <tbody align="center" valign="center">
            {elements}
          </tbody>
        </table>
        <span style={{fontWeight: 'bold'}}>{`Всего: $${totalCost}`}</span>
      </div>
    );
  }
}