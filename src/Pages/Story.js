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
            title : "None",
            author : "None",
            body : "None",
        }
    }

    handleNewStory() {
        fetch(url, {
            method : 'POST',
            body : JSON.stringify({
                name: this.props.name
            }),
            headers: {
                'Content-type' : 'application/json'
            }
        }).then(response => response.json())
        .then(response => this.handleNewResponse(response))
        .catch(error => console.log(error))
    }

    handleNewResponse(response) {
        response = response[0];
        this.setState({
            title : response["title"],
            author : response["author"],
            body : response["body"],
        })
    }

    componentDidMount() {
        this.handleNewStory();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.name !== this.props.name) {
            this.handleNewStory();
        }
    }

    render() {
        return (
            <div>
                <h4>{this.state.title}</h4>
                <h5>{this.state.author}</h5>
                <p>{this.state.body}</p>
            </div> 
        )
    }
}

export default Story;