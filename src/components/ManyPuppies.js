import React from 'react';

const ManyPuppies = (props) => {

    return (
        <div>{
            isNaN(props.number) ? <p> This pages says: {props.number}</p> :
                <p> This pages says: {props.number} puppies</p> 
            }
           
            {/* <p>This page should have {props.number} puppies</p> */}
            
        </div>
    )
}

export default ManyPuppies;