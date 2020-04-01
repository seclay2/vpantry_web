import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LandingBar from './LandingBar';
import { setToken } from '../../actions/authActions';

class Landing extends Component {

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
        else if (sessionStorage.getItem('jwtToken')) {
            this.props.setToken(sessionStorage.getItem('jwtToken'));
            this.props.history.push('/dashboard');
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }


    }

    render() {
        return (
            <div>
                <LandingBar />
                <br />
                <h1>Landing Page</h1>
            </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setToken } )(Landing);