import React from 'react';
import {
    useParams
} from "react-router-dom";

function Story() {
    let { storyName } = useParams();

    return (
        <div>
            <h3>ID: {storyName} </h3>
        </div>
    )
}

export default Story;