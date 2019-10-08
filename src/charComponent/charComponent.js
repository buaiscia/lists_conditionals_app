import React from 'react';

const CharComponent = (props) => {
    
    let chars = props.singleChar;

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'


    }
    return(
        <div style={style} onClick={props.click}>
            { props.singleChar}
            {props.children}
                        
            {/* {console.log(chars)} */}
        </div>
    )
}

export default CharComponent;