import React, {Component} from 'react';
import './goods-list.css';

export default class GoodsList extends Component {
  render() {
    const {goods, onAddItem} = this.props;

    const elements = goods.map((item) => {
      const {id, name, price, amount} = item;

      return (
        <tr key={id}>
          <th scope="row">{name}</th>
          <td>{`$${price}`}</td>
          <td>{amount}</td>
          <td>
            <button className="btn btn-success btn-sm add-to-basket"
                    onClick={() => onAddItem(id)}>
              &#10010;
            </button>
          </td>
        </tr>
      );
    })

    return (
      <table className="table table-hover">

        <thead align="center" valign="center" className="thead-dark">
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Добавить в корзину</th>
          </tr>
        </thead>

        <tbody align="center" valign="center">
          {elements}
        </tbody>
      
      </table>
    );
  }
}