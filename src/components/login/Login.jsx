import React from 'react';
import { reduxForm } from 'redux-form';
import {Input, createField} from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import s from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return (
            <form onSubmit = {handleSubmit}>
                {createField('e-mail', 'email',  [required], Input)}
                {createField('Password', 'password',  [required], Input, {type: 'password'})}
                {createField(null,  'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}
                {error && <div className = {s.formSummaryError}>{error}</div>}   
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