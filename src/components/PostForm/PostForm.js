import React, {Component} from 'react';
import {connect} from 'react-redux'
import {createPost} from "../../redux/actions";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ''
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const {title} = this.state;

        const newPost = {
            title, id: Date.now().toString()
        };
        this.props.createPost(newPost);
        this.setState({
            title: ''
        });
        console.log(newPost);
    };

    inputChangeHandler = event => {
        event.persist();
        this.setState(prev => ({...prev, ...{
            [event.target.name] : event.target.value
        }}))
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Post form</h1>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           value={this.state.title}
                           name="title"
                           onChange={this.inputChangeHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm);