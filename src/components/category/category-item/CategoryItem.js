import React, { Component } from 'react';
import { connect } from 'react-redux';

import { categoryDestroy, editCurrent, categoryUpdate, cancelBtn } from '../../../action/category-actions.js';

import CategoryForm from '../category-form/CategoryForm.js';
import ExpenseContainer from '../../expense/expense-container/ExpenseContainer.js';

import './CategoryItem.scss';

class CategoryItem extends Component {
  render() {
    return (
      !this.props.editing ? <ListItem categoryDestroy={this.props.categoryDestroy} editCurrent={this.props.editCurrent} category={this.props.category} /> : <UpdateForm categoryUpdate={this.props.categoryUpdate} cancelBtn={this.props.cancelBtn} category={this.props.category} />
    );
  }
}

const ListItem = (props) => {
  return (
    <li>
      <button id="cat-delete" onClick={() => props.categoryDestroy(props.category)}>x</button>
      <div onDoubleClick={() => props.editCurrent(props.category)}>
        <h4 className="category-name">{props.category.name}</h4>
        <p> Budget: ${props.category.budget}</p>
      </div>
      <ExpenseContainer category={props.category} />
    </li>
  );
};

const UpdateForm = (props) => (
  <li className="editing">
    <CategoryForm buttonText='update' onComplete={props.categoryUpdate} category={props.category} />
    <button onClick={() => props.cancelBtn(props.category)}>cancel</button>
  </li>
);

const mapDispatchToProps = dispatch => {
  return {
    cancelBtn: category => dispatch(cancelBtn(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
    editCurrent: category => dispatch(editCurrent(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);