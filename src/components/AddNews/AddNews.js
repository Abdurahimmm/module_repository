import React, { Component } from 'react';
import './AddNews.css'

class AddNews extends Component {
    state = {
        name: '',
        text: ''
    };

    valueChanged = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    };


    addNewsHandler = (e) => {
        e.preventDefault();
        const addNews = {
            name: this.state.name,
            text: this.state.text
        };
    };

    
    render() {
        return (
            <div>
                <h1 className="addNewsTitle">Add news on page</h1>
                <form className="AddNews-form">
                    <input className="formText" type="text" name="title" placeholder="News Title"/>
                    <br/>
                    <textarea readonly className="formTextarea" name="text" placeholder="News text"></textarea>
                    <br/>
                    <input className="formSubmit" type="submit" placeholder="Add News"/>
                </form>
            </div>
        );
    }
}

export default AddNews;
