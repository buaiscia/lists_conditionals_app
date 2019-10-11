import React from 'react';

const Validation = (props) => {
    
    const textValidation = props.textLength;
    let validation;
    if(textValidation > 5) {
        validation = 'text is long enough'
    } else {
        validation = 'text is too short'
    }

    return(

        <div>
            The text is long {props.textLength} characters
            <p>{validation}</p>
        </div>
    )
}


export default Validation;