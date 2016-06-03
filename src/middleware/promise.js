export default store => next => action => {
    if(action.payload && action.payload.then){
        //it is a promise, so resolve it and create a new action
        console.log("request data");
        action.payload.then(response => {
            console.log("resolve data");
            const newAction = {...action, payload:response};
            return store.dispatch(newAction);
        })
    }
    else{
        //otherwise
        return next(action);        
    }
}