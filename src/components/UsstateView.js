import React, {useState} from 'react';


const UsstateView = (props) => {
    const { state, state_flag_url, landscape_background_url} = props.data;
    return(
        <>
        <div>US States here</div>
        <h2>{state}</h2>
        <img src={state_flag_url}></img>
        <img src={landscape_background_url}></img>

        </>
    )
}
export default UsstateView;