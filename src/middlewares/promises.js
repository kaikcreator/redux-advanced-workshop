export default store => next => action =>{
    //is it a promise? if not, call next
    if(action.payload && action.payload.then){
        action.payload.then(response => {
            const newAction = {...action, payload:response.data};
            store.dispatch(newAction);
        });
    }
    else{
        next(action);
    }
}