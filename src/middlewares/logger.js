export default store => next => action =>{
    console.log("ACTION: ", action.type, " payload: ", action.payload);
    
    next(action);
}