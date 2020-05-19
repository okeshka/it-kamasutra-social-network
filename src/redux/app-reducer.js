import { setAuthMe } from "./auth-reducer";

 const INISIALIZED_SUCCESS = "SUCCESS-INISIALIZED";

let initialState = {
    inisialized: false,
};

const appReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case INISIALIZED_SUCCESS: 
        
            return {
                ...state,
                inisialized: true,
            } 
        
        default: return state;       
    }  
}

export const inisializedSuccess = () => ( {type: INISIALIZED_SUCCESS} );

export const inisializedApp = () => dispatch => {
  let promise = dispatch(setAuthMe());
  promise.then(() => {dispatch(inisializedSuccess())});
}

export default appReducer;