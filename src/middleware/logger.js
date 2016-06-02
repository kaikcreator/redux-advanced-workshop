export default function({ dispatch }) {
    return next => action => {
        console.log("ACTION CALLLED: ", action.type, " with payload: ", action.payload);
        
        next(action);
    }
}