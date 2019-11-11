import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class AwaitingFeedback extends Component {
    constructor() {
        super();
        this.state = {
            confcode: '',
            user: '',
        }
    }

    componentDidMount() {
        var this_user = this.props.location.state.user
        axios.get('/user/' + this_user)
                .then(res => this.setcondition(res));

        // var this_user = this.props.user //for debugging
        window.onpopstate = this.handlePopState;

        // set the path once get to this page, so it will stay in this page when click go back button
        // (like save it as the previous page) 
        // drawback: when refresh it will save it again in the history, have bad performance when refresh many times
        this.props.history.push({pathname: this.state.thispage, state: { user: this_user }}); 
    }

    setcondition(res){
        this.setState( { user: res.data.mturkID
                       , confcode: res.data.compensationCode})
    }

    handlePopState = (event) => {
        event.preventDefault();
        swal("Oops!", "You cannot go back!", "error");
        this.props.history.push({pathname: this.state.thispage, state: { user: this.state.user, story: this.state.story }})
    }


    render() {

        return (
        <div>
            <div className="titleContainer">
                    <div className="title">Thank you for your submission!</div>
                </div>
            <div className="containerWithMargin">
                <br/>
                <div className="surveyQuestionsContainer">
                    We will email you once the feedback for your story is ready. Please copy the following code to the task in Mturk.
                </div>
                <div>
                    {this.state.confcode}
                </div>
            </div>

        </div>
                        
        )
    }
}

export default withRouter(AwaitingFeedback);