import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseCreate } from '../../../action/expense-actions.js';

import ExpenseForm from '../expense-form/ExpenseForm.js';
import ExpenseItem from '../expense-item/ExpenseItem.js';

class ExpenseContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showExpenseForm: false,
      showAddBtn: true,
    };
  }

  newForm = () => {
    this.setState({ showExpenseForm: true, showAddBtn: false });
  }

  handleCancel = () => {
    this.setState({ showExpenseForm: false, showAddBtn: true });

  }

  render() {
    return (
      <React.Fragment>
        <h6>Expenses:</h6>
        <ul id="expenses">
          {this.props.expenses.filter(expense => this.props.category.id === expense.categoryID).map(expense => <ExpenseItem expense={expense} key={expense.id} />)}
        </ul>

        {this.state.showExpenseForm && <ExpenseForm buttonText='submit' onComplete={this.props.expenseCreate} category={this.props.category} handleCancel={this.handleCancel} />}

        {this.state.showAddBtn && <button id="add-button" onClick={this.newForm}>+</button>}

        {this.props.expenses.filter(expense => this.props.category.id === expense.categoryID).length > 0 && <p id="updateText">* To update an expense, double click on the expense you want to update *</p>}
      </React.Fragment>
    );
  }
}

const matchStateToProps = state => ({
  expenses: state.expenses.expenses,
});
const matchDispatchToProps = dispatch => ({
  expenseCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(matchStateToProps, matchDispatchToProps)(ExpenseContainer);