import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/OverviewConsentPage.css';
import '../style/CommonStyles.css';
import axios from 'axios';
import swal from 'sweetalert';

class Consent extends Component {
    constructor() {
        super();
        this.state = {
            check: false,
            warning: false,
            user: ""
        }
    }

    componentDidMount() {
        window.onpopstate = this.handlePopState;
        if(!this.props.location.state){
            swal("Please log in first")
            this.props.history.push({pathname: '/login'})
        } else {
            this.setState({user:this.props.location.state.user});
        }
    }

    handlePopState = (event) => {
        event.preventDefault();
        console.log("you cannont go back");
        swal("Oops!", "You cannot go back!", "error");
        this.props.history.replace({pathname: '/overview', state: { user: this.state.user }})
    }

    getNextPage = (e) => {
        e.preventDefault();
        if (this.state.check) {
            this.setState({warning: false})

            const user = {
                userid: this.state.user,
            };
            console.log(user);
            axios.post('/user/consent', user)
                .then(res => console.log(res.data));

            this.props.history.push({pathname: '/initialSurvey/1', state: { user: this.state.user }}); //TODO: change this as single-page form!
        } else {
            this.setState({warning: true})
        }
    }

    render() {
        let warningText;
        console.log(this.state.user)
        if (this.state.warning) {
            warningText = 
            <div style={{'color': 'red'}}>
                <i class="fas fa-exclamation-triangle"/>
                You must check the box to continue.
            </div>
        }
        return (
            <div className="containerWithMargin">
                <div className="titleContainer">
                    <div className="title">Task Overview and Consent</div>
                    <div className="subtitle">
                        The effects of peer advising and history representations on peer feedback
                    </div>
                </div>
                <div className="paragraph" style={{'padding-top': '20px'}}>
                    <p>
                        You are being asked to participate in a research study being done by Sneha Krishna Kumaran and Brian Bailey at the University of Illinois at Urbana-Champaign. Your participation in this research is voluntary. If you decide to participate, you are free to withdraw at any time.
                    </p>
                    <p>
                        The purpose of this study is to investigate the effect of work environment on feedback seeking behavior on creative work. Participating in this research study will include writing a short product review, getting feedback on the review, and incorporating that feedback into the final submission. You will be asked to write a short children's story (at least 150 words) and get feedback on your work. You will then be asked to incorporate the feedback you receive in your final submission. The study will take about 1 hour to complete in total.
                    </p>
                    <p>
                        You will receive up to $5 upon completion of the task ($1.5 base pay for completing an initial story plus $2.5 for submitting a final story and up to $1 bonus based on the quality of the submission). Submissions that are off topic, plagiarized, or inappropriate for the target audience will be rejected.
                    </p>
                    <p>
                        Faculty, students, and staff who may see your information will maintain confidentiality to the extent of federal and state laws and university policies. Personal identifiers will not be published or presented. Your de-identified information could be used for future research without additional informed consent.
                    </p>
                    <p>
                        If you have any questions about the research study, please contact Sneha Krishna Kumaran at srkrish2@illinois.edu. If you have questions or concerns about your rights as a participant please contact the University of Illinois at Urbana-Champaign Office for the Protection of Research Subjects at 217-333-2670 or via email at irb@illinois.edu.
                    </p>
                    <div className="consentContainer">
                        <Form>
                            <h5>
                            <Form.Check type="checkbox" 
                                        label="I have read the information provided above and I consent to participate in the study" 
                                        onClick={e => this.setState({check: !this.state.check})}/>
                            </h5>
                        </Form>
                    </div>
                </div>
                {warningText}
                <Button className="buttons" type="submit" variant="outline-primary" 
                        onClick={e => this.getNextPage(e)}>
                    Next
                </Button>
            </div>
        )
    }
}

export default withRouter(OverviewConsentPage);