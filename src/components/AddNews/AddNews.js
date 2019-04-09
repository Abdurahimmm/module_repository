import React, { Component } from 'react';
import './AddNews.css';
import firebase, {auth} from '../../config/fbConfig';
import Auth from '../Auth/Auth';
import axios from '../../axios-news';

class AddNews extends Component {
    state = {
        email: '',
        pass: '',
        fileUrl: null,
        file: null,
        user: null,
        progress: '',
        title: '',
        text: ''
    };

    onChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onLogin = (e) => {
        e.preventDefault();
        firebase.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.pass)
            .then(result => {
                const user = result.user;
                this.setState({
                    user
                });
            }).catch(error => {
                console.log(error);
            });
    };


    onLogout = () => {
        firebase.auth().signOut()
        .then( () => {
            this.setState({user: null});
        });
    };

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({user})
            }
        });
    };

    onFileSelectHandler = e => {
        this.setState({
            file: e.target.files[0]
        })
    };

    onSubmitHandler = e => {
        e.preventDefault();
        const newsItem = {
            title: this.state.title,
            text: this.state.text
        };

        this.onFileUpload(newsItem);

        e.target.reset();
    }

    onFileUpload = (newsItem) => {
        const file = this.state.file;
        const fileName = file.name;

        const storageRef = firebase.storage().ref('images/' + fileName);
        const uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', (snapshot) => {
            // progress
            const progress = snapshot.bytesTranfarred / snapshot.totalBytes * 100;
            this.setState({progress});
        },
            (error) => {
                console.log(error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                .then(fileUrl => {
                    newsItem.imgUrl = fileUrl;

                    axios.post('/news.json', newsItem)
                        .then(response => {
                            this.setState({
                                title: '',
                                text: ''
                            });
                            this.props.history.push('/news');
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
            }
        )
    };
    render() {
        let form = (
            <Auth
                email={this.state.email}
                pass={this.state.pass}
                login={this.onLogin}
                change={this.onChangeHandler}
            />
        );
        if (this.state.user) {
            form = (
                <div className="add">
                     <h1 className="userTitle">You User</h1>
                     <button
                        className="btn"
                        onClick={this.onLogout}
                        >Выйти</button>

                        <br/>

                    <form onSubmit = {this.onSubmitHandler}>
                        <input
                            className="postTitle"
                            type="text"
                            name="title"
                            placeholder="Введите название статьи"
                            value={this.state.title}
                            onChange={this.onChangeHandler}
                        />

                        <br/>

                        <textarea
                            className="postText"
                            name="text"
                            placeholder="Ваша статья"
                            value={this.state.text}
                            onChange={this.onChangeHandler}
                        />

                        <h1>Дoбавить картинку</h1>

                        <input
                        onChange = {this.onFileSelectHandler}
                        type = "file"
                        name = "file" />
                        <button>Загрузить</button>

                        <br/>

                        <div style={{width: this.state.progress + "%"}}>

                        </div>
                    </form>
                    
                </div>
               
                
            );
        }
        return (
            <div className="addNews">
                
                {form}
            </div>
        );
    }


}

export default AddNews;
