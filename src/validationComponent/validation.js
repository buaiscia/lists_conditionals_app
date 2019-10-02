import React from 'react';

const Validation = (props) => {
    
    return(

        <div>
            The text is long {props.textLength} characters
            {props.textValidation}
        </div>
    )
}


export default Validation;