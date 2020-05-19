import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {Input} from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = props => {
    return (
            <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field component = {Input} name = 'email' placeholder = "email"
                        validate = {[required]}
                    />
                </div>
                <div>
                    <Field component = {Input} name = 'password' placeholder = "password" 
                        validate = {[required]} type = 'password'/>
                </div>
                <div>
                    
                    <label>
                        Remember me
                        <Field component = {Input} name = 'rememberMe' type = 'checkbox' />
                    </label>
                </div>
                    {props.error && <div className = {s.formSummaryError}>{props.error}</div>}   
                <div>
                    <button>Жми не бойся</button>
                </div>
            </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = props => {

    const onSubmit = ({email, password, rememberMe}) => {
        props.login(email, password, rememberMe); 
    }

    if (props.isAuth) return <Redirect to = '/profile' />;

    return (
        <div>
            <h1>
                Login
            </h1>
           <LoginReduxForm onSubmit = {onSubmit} />
        </div>
    )
};

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {login})(Login);