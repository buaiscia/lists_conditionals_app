import React from 'react';

const CharComponent = (props) => {
    
     

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'


    }
    return(
        
            
            <div style={style} onClick={props.click}>
                {props.singleChar}
                            
            </div>
            
        
        
    )
}

export default CharComponent;