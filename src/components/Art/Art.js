import React from 'react'
import './Art.css'

const Art = (props) => {

    let {image, name, display, price, artist} = props.art

    return (
        <div className="art">
            <img src={ image } alt={ name }/>
            <p>{ name }, { artist }</p>
            <p>{ display }</p>
            <p>{ price }</p>
            <button onClick={ () => props.editArt(props.id) }>Edit</button>
            <button onClick={ () => props.deleteArt(props.id) }>Delete</button>
        </div>
    )
}

export default Art