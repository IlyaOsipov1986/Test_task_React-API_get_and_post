import React from "react";

const Images = ({image, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className={'img__card'}>
            {
            image.map((image, i) => (
                <div><img id={image.id} src={image.url} alt={''}/></div>
            ))
            }
        </div>
    )
}

export default Images;