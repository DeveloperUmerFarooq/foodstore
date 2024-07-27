import React, { createContext, useContext, useReducer } from 'react'
const CartStateContext=createContext()
const CartDipatchContext=createContext()

const reducer=(state,action)=>{
    switch(action.type){
        case "Add":
            return [...state,{id:action.id,name:action.name,quantity:action.quantity,size:action.size,price:action.price}]
        case "remove":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr
        case "remAll":
            return []
        default:
            console.log("Reducer Error")
    }

}


export const CartProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(
       <CartDipatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
       </CartDipatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext)
export const useDispatch=()=>useContext(CartDipatchContext)
