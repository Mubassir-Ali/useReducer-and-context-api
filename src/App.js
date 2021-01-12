import React, {useReducer} from 'react'
import './App.css';
import Counter from './components/counter'
import {CounterTwo} from './components/CounterTwo'
import {ComponentA} from './components/ComponentA'
import {ComponentB} from './components/ComponentB'
import {ComponentC} from './components/ComponentC'

export const CountContext =React.createContext()



const initialState=0;

const reducer=(state,action)=>{
  switch(action){
    case 'increment':
      return state +1
    case 'decrement':
      return state -1
    case 'reset':
      return initialState

  }
}




function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
	  <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
		<div>
		<h1>Counter: {count}</h1>

			<ComponentA/>
			<ComponentB/>
			<ComponentC/>
		</div>

	  </CountContext.Provider>

   
	
	

   
   
  
  );
}

export default App;
