import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Didnotfinish extends Component {
    render() {
        return (
            <div className="container">
                <h1> You are not eligible for the study. </h1>
                <p>You have previously attempted to participate, but you did not complete the task. Therefore you are not eligible.</p>
                <Link to="/login">
                    <Button className="buttons" type="submit" variant="outline-primary">
                        Log Out
                    </Button>
                </Link>
            </div>
        )
    }
}

export default withRouter(Didnotfinish);