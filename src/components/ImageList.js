import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({imageData}) =>{
    const renderedImages = imageData.map((imageData) =>{
        return <ImageShow key={imageData.id} imageData={imageData} />
    })
    return(
        <div className="imagelist__container">
            {renderedImages}
        </div>
    )
}

export default ImageList;