// Components Life cycle : 
// Initial Phase
// Mounting Phase
// Updating Phase
// Unmounting Phase
import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.state = {hello: "Hello World"};
      this.changeState = this.changeState.bind(this)
    }
   render(){
      return(
         <div>
             <h1>ReactJS component's Lifecycle</h1>
             <h3>Hello {this.state.hello}</h3>
             <button onClick = {this.changeState}>Click Here!</button>        
         </div>
      );
   }
   componentWillMount() {
      console.log('Component Will MOUNT!')
   }
   componentDidMount() {
      console.log('Component Did MOUNT!')
   }
   changeState(){
      this.setState({hello:"Welcome "});
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component Will Recieve Props!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component Will UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component Did UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component Will UNMOUNT!')
   }
}
export default App;