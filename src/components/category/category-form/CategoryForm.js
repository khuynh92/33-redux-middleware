import React, { Component } from 'react';

import './CategoryForm.scss';

export default class CategoryForm extends Component {

  state = {
    name: this.props.category && this.props.category.name || '',
    budget: this.props.category && this.props.category.budget || '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.category) {
      let newCategory = { ...this.props.category };
      newCategory.name = this.state.name;
      newCategory.budget = this.state.budget;
      this.props.onComplete(newCategory);
    } else {
      this.props.onComplete(this.state);
    }

    this.setState({
      name: '',
      budget: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label >
          Category Name: <br />
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <br />
        <label id="budget-container">
          Budget: <br />
          <input type="number" name="budget" value={this.state.budget} onChange={this.handleChange}/>
        </label>
        <br />
        <input type="submit" value={this.props.buttonText} />
      </form>
    );
  }
}
