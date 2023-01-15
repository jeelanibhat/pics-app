import React from "react";

const ImageShow = ({ imageData }) => {
    return (

        <div className="w-full md:w-1/2 lg:my-4 lg:px-2 lg:w-1/2">
            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href={imageData.urls.full} target="_blank">
                    <img alt="Placeholder" className="block h-auto w-full" src={imageData.urls.small} />
                </a>

                <header className="flex items-start justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        {imageData.alt_description}
                    </h1>
                    <p className="text-grey-darker text-sm">
                        Likes : {imageData.likes}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="ml-2 text-sm">
                        {imageData.description}
                    </p>
                </footer>

            </article>
        </div>
    )
}

export default ImageShow 