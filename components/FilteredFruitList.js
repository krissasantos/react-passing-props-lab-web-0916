const React = require('react');
const { Component } = require('react');


const FilteredFruitList = ({fruit, filter}) =>{
  
  const list = !filter ? fruit : fruit.filter(i => i.fruit_type == filter);
  return(
 
    <ul className ='fruit-list'>
   {list.map((fruit, idx) => <li key={idx}>{fruit.char}</li>)}

    })</ul>
   
  )
}

FilteredFruitList.defaultProps = {
  filter: null, //how do you know the default value here?? where in the test does it say empty array aside from the on in app?
  fruit: []
}
module.exports = FilteredFruitList;

