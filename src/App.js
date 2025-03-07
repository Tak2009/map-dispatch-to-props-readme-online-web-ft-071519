import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // this.props.store.dispatch(addItem());
    this.props.addItem(); // Code change: this.props.dispatch.store is no longer being called
  }

  render() {
    debugger //added
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

////Code change: this new function takes in dispatch as an argument
////It then returns an object that contains a function as a value!
////Notice above in handleOnClick() that this function, addItem(),
////is what is called, NOT the addItem action creator itself in items.js.

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

export default connect(state => ({items: state.items}), {addItem})(App);
