// export const myAction = (payload) =>{
//     dispatch({
//         type:"elec",
//         payload
//     })
// }


export const fetchelectronics = () => {
    return async (dispatch) => {
     try{
    const response = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await response.json();
    dispatch({
        type: "ADD",
        payload: data,
    });
     }
     catch (error){
        console.error("error");

     }
    };
}
