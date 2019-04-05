import React, { Component } from 'react';
import './AddNews.css';
import firebase, {auth} from '../../config/fbConfig';

class AddNews extends Component {
    state = {
        email: '',
        pass: '',
        fileUrl: null,
        file: null,
        user: null,
        progress: ''
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
                this.setState({user});
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

    onFileUpload = (e) => {
        e.preventDefault();
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
                    this.setState({fileUrl});
                })
            }
        )
    };



    render() {
        let form = (
            <form onSubmit = {this.onLogin}
            className = "AddNews-form" >
            <h1 className = "addNewsTitle" > Log in to add news </h1>
                < input className = "formText"
                type = "email"
                name = "email"
                placeholder = "Email"
                autoComplete = "off"
                value={this.state.email} 
                onChange={this.onChangeHandler}/>
            
                <br/>
                < input className = "formText"
                type = "password"
                name = "pass"
                placeholder = "Password" 
                value = {this.state.pass}
                onChange = {this.onChangeHandler}
                />

                <br/>
                <input className="formSubmit" type="submit" placeholder="Add News"/>
            </form>
            
        );
        if (this.state.user) {
            form = (
                <div className="add">
                     <h1> User Есть </h1>
                     <button
                        className="btn"
                        onClick={this.onLogout}
                    >Выйти</button>

                    <input
                        type="text"
                        placeholder="Введите название статьи"/>

                    <br/>

                    <textarea placeholder="Ваша статья"></textarea>

                    <h1>ДОбавить картинку</h1>

                    < form onSubmit = {this.onFileUpload}>
                        <input
                        onChange = {this.onFileSelectHandler}
                        type = "file"
                        name = "file" />
                        <button>Загрузить</button>

                        <br/>

                        <div
                            style={{width: this.state.progress}}
                        >

                        </div>
                        <br/>

                        {
                            this.state.fileUrl ?
                                <img className="addImg" src={this.state.fileUrl} alt="img"/>:
                            null
                        }
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
