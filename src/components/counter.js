import React, {useReducer}  from 'react';

const initialVal =0;

const reducer=(state, action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialVal
      
    }
        
}


function Counter(){
    const [count, dispatch]=useReducer(reducer,initialVal);



    return(<div className="container">
        <div>
            <h1>{count}</h1>
        </div>
       
        <div className='btn'>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>



    </div>)
}

export default Counter;