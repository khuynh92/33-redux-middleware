import React, { Component } from 'react';

import './ExpenseForm.scss';
export default class ExpenseForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expense: this.props.expense && this.props.expense.expense || '',
      price: this.props.expense && this.props.expense.price || '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.expense) {
      let newExpense = {
        ...this.props.expense,
        expense: this.state.expense,
        price: this.state.price,
      };
      this.props.onComplete(newExpense);
    } else {
      this.props.onComplete({ ...this.state, categoryID: this.props.category.id, editing: false });
      this.props.handleCancel();
    }
    this.setState({
      expense: '',
      price: '',
    });
  }
  render() {
    return (
      <React.Fragment>
        <form id="expense-form" onSubmit={this.handleSubmit} >
          <label >
            Expense :
            <input type="text" name="expense" onChange={this.handleChange} value={this.state.expense} />
          </label>
          <label >
            Price:
            <input type="number" name="price" onChange={this.handleChange} value={this.state.price} />
          </label>
          <br />
          <input type="submit" />
        </form>
        <button id="expense-cancel" onClick={this.props.handleCancel}>cancel</button>
      </React.Fragment>
    );
  }
}
