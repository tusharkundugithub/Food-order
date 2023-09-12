export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

 //Remove Idevigual Item
 export const REMOVE = (item)=>{
    return {
        type: "RMV_ONE_ITM",
        payload:item
    }
 }


 