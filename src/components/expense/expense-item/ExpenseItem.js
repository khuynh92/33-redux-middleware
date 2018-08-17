import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expenseDestroy, editCurrent, cancelBtn, expenseUpdate } from '../../../action/expense-actions.js';

import ExpenseForm from '../expense-form/ExpenseForm.js';
class ExpenseItem extends Component {
  render() {
    return (
      !this.props.expense.editing ? <ListItem editCurrent={this.props.editCurrent} expenseDestroy={this.props.expenseDestroy} expense={this.props.expense} /> : <UpdateForm expenseUpdate={this.props.expenseUpdate} expense={this.props.expense} handleCancel={this.props.cancelBtn}/>
    );
  }
}

const ListItem = (props) => {
  return (
    <li onDoubleClick={() => props.editCurrent(props.expense)}><button id="ex-delete"onClick={() => props.expenseDestroy(props.expense)}>x</button>{props.expense.expense}: ${props.expense.price}</li>
  );
};

const UpdateForm = (props) => {
  return (
    <li id="expense-update" >
      <ExpenseForm handleCancel={props.handleCancel} buttonText='update' onComplete={props.expenseUpdate} expense={props.expense} />
    </li>
  );
};

const matchDispatchToProps = dispatch => ({
  expenseDestroy: expense => dispatch(expenseDestroy(expense)),
  editCurrent: expense => dispatch(editCurrent(expense)),
  cancelBtn: expense => dispatch(cancelBtn(expense)),
  expenseUpdate: expense => dispatch(expenseUpdate(expense)),
});

export default connect(null, matchDispatchToProps)(ExpenseItem);

