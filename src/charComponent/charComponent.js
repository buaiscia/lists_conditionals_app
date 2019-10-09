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
        <div>
            
            <div style={style}>
                {chars}
                            
            </div>
            
        </div>
        
    )
}

export default CharComponent;