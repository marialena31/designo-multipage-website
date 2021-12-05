import React from "react";
import { Form, useField } from 'formik';
import ButtonOnDark from "../button-on-dark/button-on-dark.component";
import {IconError as ReactComponent} from '../../assets/contact/desktop/icon-error.svg'

import './form.styles.scss'

const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = 'Can\'t be empty';
    }
    if(!values.email) {
        errors.email = 'Can\'t be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Please use a valid email address';
    }
    if(!values.message) {
        errors.message = 'Can\'t be empty';

    }
    return errors;
};

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}/>
        <textarea className="text-input" rows="5" cols="35" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}<span>{IconError}</span></div>
        ) : null}
      </>
    );
  };  

  const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}/>
        <input className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };  

const Form = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form className="form" onsubmit={formik.handleSubmit}>
            <MyTextInput
                name="name"
                type="text"
                placeholder="Name"
            />
            <MyTextInput
                name="email"
                type="email"
                placeholder="Email Address"
            />
            <MyTextInput
                name="phone"
                type="text"
                placeholder="Phone"
            />
            <MyTextArea
                name="name"
                type="textarea"
                placeholder="Message"
            />
            <ButtonOnDark value="Submit"/>
        </form>
    )
}

export default Form;