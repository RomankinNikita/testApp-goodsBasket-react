import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './goods-list-page.css';
import SearchPanel from '../search-panel/search-panel';
import GoodsList from '../goods-list/goods-list';

export default class GoodsListPage extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };

    this.onSearchChange = (term) => {
      this.setState({term});
    };
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const {goods, onAddItem} = this.props;
    const {term} = this.state;
    const visibleItems = this.search(goods, term);

    return (
      <div className="goods-list">
        <h3>Список товаров</h3>
        <SearchPanel onSearchChange={this.onSearchChange}/>
        <GoodsList goods={visibleItems}
                   onAddItem={onAddItem}/>
        <Link to="/basket" className="btn btn-success">Корзина</Link>
      </div>
    );
  }
}