import React from 'react'

const Comentario = (props) => {
    return (
        <div className="media">
            <img src={props.urlImagen} className="mr-3" alt="" />
            <div className="media-body">
            <h5 className="mt-0">{props.persona}</h5>
            {props.texto}
            </div>
            
            
        </div>
    )
}

export default Comentario
