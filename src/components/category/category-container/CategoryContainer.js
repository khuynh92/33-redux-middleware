import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../category-form/CategoryForm.js';
import CategoryItem from '../category-item/CategoryItem.js';

import { categoryCreate, categoryUpdate, cancelBtn } from '../../../action/category-actions.js';

class CategoryContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CategoryForm buttonText='submit' onComplete={this.props.categoryCreate} />
        <ul id="category-list">
          {this.props.categories.map(category => <CategoryItem editing={category.editing} key={category.id} category={category} />)}
        </ul>
        {this.props.categories.length > 0 && <p id="updateText">* To update a category, double click on the category title/budget you want to update *</p>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = dispatch => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
  cancelBtn: category => dispatch(cancelBtn(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);