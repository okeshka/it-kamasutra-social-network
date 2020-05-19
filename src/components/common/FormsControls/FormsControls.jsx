import React from 'react';
import s from './FormsControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className = {`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
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