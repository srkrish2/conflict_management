import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Invalid extends Component {
    render() {
        return (
            <div className="container">
                <h1> You are not eligible for the study. </h1>
                <p>You have previously attempted to participate in this task, but your answers for the quiz were incorrect, indicating that you did not read the instructions thoroughly. Therefore you are uneligible for the study.</p>
                <Link to="/login">
                    <Button className="buttons" type="submit" variant="outline-primary">
                        Log Out
                    </Button>
                </Link>
            </div>
        )
    }
}

export default withRouter(Invalid);