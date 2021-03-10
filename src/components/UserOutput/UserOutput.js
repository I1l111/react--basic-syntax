import React from 'react';

const userOutput = ( props ) => {
    const styles = {
        ...props.styles,
        width: '90%',
        marginTop: '10px',
        border: '1px solid teal',
        boxShadow: 'turquoise 0 1px 3px'
    }

    return (
        <div style={styles}>
            <p ><strong>{props.username}</strong></p>
            <p>{props.children}</p>
        </div>
    )
}

export default userOutput;