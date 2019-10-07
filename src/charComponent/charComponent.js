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
        <div style={style}>
            { props.singleChar}
                        
            {/* {console.log(chars)} */}
        </div>
    )
}

export default CharComponent;