import React from 'react';

const userInput = ( props ) => {
    const styles = {
        width: '50%',
        minWidth: '50px',
        height: '20px',
        outline: 'none',
        textAlign: 'center',
        border: '1px solid teal',
        boxShadow: 'turquoise 0 1px 3px'
    }

    return(
        <input 
            type='text' 
            onChange={props.changed} 
            value={props.value}
            style={styles}
        />
    )
}

export default userInput;