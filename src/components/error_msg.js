import React, { Component } from 'react';
import DataLoader from './data_loader';


const errorMessage = (props) =>{
    
    if(!props.httpError)
        return null;
        
    return(
        <div className="alert alert-danger" role="alert">
            Ooops! there's been an HTTP response error: {props.httpError.status} - {props.httpError.statusText}
       </div> 
    )
}


export default DataLoader(errorMessage, null, "httpError", null);
