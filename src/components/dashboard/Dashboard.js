import React, { Component } from 'react';
import CategoryContainer from '../category/category-container/CategoryContainer.js';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <CategoryContainer />
      </React.Fragment>
    );
  }
}
