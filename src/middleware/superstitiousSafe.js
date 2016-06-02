export default store => next => action => {
    if(store.getState().counter + action.payload == 13 ){
        const newAction = {...action, payload:action.payload*2}
        store.dispatch(newAction);
    }
    else{
        next(action);
    }
}