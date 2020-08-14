import React from 'react';
import {
    useParams
} from "react-router-dom";

const url = "http://localhost:4000/story/getStory";

function Story() {
    let { storyName } = useParams();

    return (
        <div>
            <h3>ID: {storyName} </h3>
            <StoryClass name={storyName} />
        </div>
    )
}

class StoryClass extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            name : props.name
        }
    }

    handleNewStory() {
        fetch(url, {
            method : 'POST',
            body : JSON.stringify({
                name: this.state.name
            }),
            headers: {
                'Content-type' : 'application/json'
            }
        }).then(response => response.json())
        .then(response => this.setState({
            apiResponse : JSON.stringify(response)
        }))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.handleNewStory();
    }

    componentDidUpdate() {
        if (this.state.name !== this.props.name) {
            this.setState({
                name : this.props.name
            })
            this.handleNewStory();
        }
    }

    render() {
        return (
            <div>
                <h4>name: {this.state.name}</h4>
                <p>{this.state.apiResponse}</p>
            </div> 
        )
    }
}

export default Story;