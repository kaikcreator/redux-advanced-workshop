import { HTTP_ERROR_ACTION } from '../actions/types';

export default store => next => action =>{
    //is it a promise? if not, call next
    if(action.payload && action.payload.then){
        action.payload.then(
            response => {
                const newAction = {...action, payload:response.data};
                store.dispatch(newAction);
            },
            error => {
                const newAction = {type:HTTP_ERROR_ACTION, payload:error};
                store.dispatch(newAction);
                
                setTimeout(()=>{
                    const cleanMsgAction = {type:HTTP_ERROR_ACTION, payload:null};
                    store.dispatch(cleanMsgAction);                                
                }, 3000);
                
            }
        );
    }
    else{
        next(action);
    }
}