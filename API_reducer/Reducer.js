const Elec = [];

export const ELecReducer = (state = Elec, action) => {
   switch(action.type){
    case "ADD" :{
        return {
            ...state,
            state:action.payload
        }
    }

   }
   return state
}; 