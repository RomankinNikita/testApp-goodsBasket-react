import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  constructor() {
    super();
    this.state = {
      term: ''
    };

    this.onSearchChange = ({target}) => {
      const term = target.value;
      this.setState({term});
      this.props.onSearchChange(term);
    };
  }

  render() {

    return (
      <input type="text"
             placeholder="Введите часть названия товара"
             className="form-control search-input"
             value={this.state.term}
             onChange={this.onSearchChange}/>
    );
  }
}