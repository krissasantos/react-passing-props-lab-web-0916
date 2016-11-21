const React = require('react');
const { Component } = require('react');
const FruitBasket = require('./FruitBasket');

// const App = () => {
//   return (
//     <FruitBasket />
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
    this.updateFilterCallback = this.updateFilterCallback.bind(this)

  }
  updateFilterCallback(){
    // this.setState({filters:})
  }

  render(){
    return(
  
         <FruitBasket 
         fruit={this.state.fruit}
         filters={this.state.filters} 
         currentFilter={this.state.currentFilter}
         updateFilterCallback={this.updateFilterCallback} 
     />
 
      )
  }
}

module.exports = App;
