// import React from 'react';
// import { Link } from 'react-router-dom';

// export default () => {
//   return (
//     <div>
//       Im some other page
//       <Link to="/">Go back to home page!</Link>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function someName (){

  const [counter, setCounter] = useState(24);

  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Click</button>
        <br/><br/><br/><br/><hr/>
        <div>Im some other page<Link to="/">Go back to home page!</Link></div>
    </div>
  );
}

// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// export default class OtherFunctionName extends Component{

//   state = {counter : 42};

//   handleClick = () => {
//     this.setState((state, props) => ({
//       counter: state.counter + 1
//     }));
//   };

//   render(){
//     return (
//       <div>
//         <h2>{this.state.counter}</h2>
//         <button onClick={this.handleClick}>Click</button>
//         <br/><br/><br/><br/><hr/>
//         <div>Im some other page<Link to="/">Go back to home page!</Link></div>
//       </div>
//     )
//   } 
// };
