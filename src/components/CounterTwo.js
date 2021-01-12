import React,{useReducer} from 'react'

const initialState={
    first:0,
    second:10
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state, first: state.first +action.value}
        case 'decrement':
            return {...state, first: state.first -action.value}
        case 'increment5':
            return {...state, second: state.second +action.value}
        case 'decrement5':
            return {...state, second: state.second -action.value}
        case 'reset':
            return initialState
    
    }
}

export const CounterTwo = () => {
    const [count, dispatch]=useReducer(reducer,initialState)

    return (
        <div className="container">
        <div>
        <h1>First Counter: {count.first}</h1>
        <h1>Second Counter: {count.second}</h1>

        </div>
        
  
        <div className='btn'>
            <button onClick={()=>dispatch({type:'increment', value:1})}>Increment 1</button>
            <button onClick={()=>dispatch({type:'decrement', value:1})}>Decrement 1</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
       

            <br/>
       
            <button onClick={()=>dispatch({type:'increment5', value:5})}>Increment count 5</button>
            <button onClick={()=>dispatch({type:'decrement5', value:5})}>Decrement count 5</button>
           

        </div>
        </div>

    )
}
