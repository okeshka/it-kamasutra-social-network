import React from 'react';
import s from './FormsControls.module.css';
import {Field} from 'redux-form';

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className = {`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    let {input, child, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props) => {
    let {input, child, meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        <Field component = {component} name = {name} placeholder = {placeholder} 
            validate = {validators} {...props}/>
        {text}
    </div>
)  