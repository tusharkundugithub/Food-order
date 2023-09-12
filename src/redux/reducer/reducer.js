const INTL_STATE = {
    cart: []
};

export const Cartreducer = (state = INTL_STATE,action)=>{
 switch(action.type){
    case "ADD_CART":
        const itemidx = state.cart.findIndex((item)=> item.id === action.payload.id)
        if(itemidx >= 0){
            state.cart[itemidx].qnty +=1
        }else{
            const tmp = {...action.payload,qnty:1}
            return{
            ...state,
            cart: [...state.cart,tmp]
        }
        }
        
    case "RMV_CART":
        const data = state.cart.filter((el)=>el.id !== action.payload)
        return{
           ...state,
           cart: data
        }
        case "RMV_ONE_ITM":
            const itemidx_dlt = state.cart.findIndex((item)=> item.id === action.payload.id)
            if(state.cart[itemidx_dlt].qnty >= 1){
                const deletitm = state.cart[itemidx_dlt].qnty -= 1
                console.log([...state.cart,deletitm])
                return{
                    ...state,
                    cart:[...state.cart]
                }
            }else if(state.cart[itemidx_dlt].qnty === 1){
                const data = state.cart.filter((el)=>el.id !== action.payload)
                return{
                    ...state,
                    cart: data
                 }
            }
        default:
            return state
 }
}