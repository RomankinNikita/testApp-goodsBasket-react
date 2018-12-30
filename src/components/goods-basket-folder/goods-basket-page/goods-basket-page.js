import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './goods-basket-page.css';
import GoodsBasket from '../goods-basket/goods-basket';

export default class GoodsBasketPage extends Component {

  render() {
    const {goods, onDeleteOneItem, onDeleteAllItems, onClearBasket} = this.props;
    const isEmpty = goods.filter((it) => it.amount > 0).length;
    
    const basketContent = (
      <React.Fragment>
        <h3>Корзина</h3>
        <GoodsBasket goods={goods} onDeleteOneItem={onDeleteOneItem} onDeleteAllItems={onDeleteAllItems}/>
      </React.Fragment>
    );
    const emptyAlert = <span className="empty-basket">Корзина пуста!</span>;
    const content = isEmpty ? basketContent : emptyAlert;

    return (
      <div className="goods-basket">
        {content}
        <div className="d-flex justify-content-between">
          <Link to="/list" className="btn btn-success">Перейти в список товаров</Link>
          <button className="btn btn-success" onClick={onClearBasket}>Очистить корзину</button>
        </div>
      </div>
    )
  }
}