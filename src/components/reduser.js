export const reducer = (state,action)=>{
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((curElement)=>{
                return curElement.id !== action.item_id;
            })
        }
    }
    if(action.type === "ADD"){
        
            let updatedCart = state.item.map((curElem)=>{
                if(curElem.id === action.item_id){
                    return {...curElem,   count : curElem.count + 1}
                }
                return curElem;
            })
        return{...state , item:updatedCart}
    }
    if(action.type === "MIN"){
        
        let updatedCart = state.item.map((curElem)=>{
            if(curElem.id === action.item_id && curElem.count >0){
                return {...curElem,   count : curElem.count - 1}
            }
            return curElem;
        })
    return{...state , item:updatedCart}
}
if(action.type === "GET_TOTAL"){

    let { totalItem } = state.item.reduce(
        (accum , curVal)=>{
       let {count} = curVal;
       accum.totalItem += count;
       return accum;
    },{
        totalItem: 0,
    });
    return {...state , totalItem};
}
if(action.type === "GET_TOTAL_AMOUNT"){

    let { totalAmount } = state.item.reduce(
        (accum , curVal)=>{
       let {price} = curVal;
       accum.totalAmount += price;
       return accum;
    },{
        totalAmount: 0,
    });
    return {...state , totalAmount};
}
    return state;
}