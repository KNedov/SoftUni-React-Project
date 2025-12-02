import { useState } from "react";

export default function useForm(callback, initialValues) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const validationHandler = (e) => {
        setTouched((state) => ({
            ...state,
            [e.target.name]: true,
        }));

        const newErrors = validate(values);
        setErrors(newErrors);
    };
     const loginFormAction = (formData) => {
        callback(values, formData);
    }
    const formAction = (formData) => {
        const newErrors = validate(values);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            callback(values, formData);
        }
    };

    const register = (fieldName) => {
        return {
            name: fieldName,
            onChange: changeHandler,
            value: values[fieldName],
            onBlur: validationHandler,
        };
    };

    function validate(values) {
        let errors = {};

        if (!values.email) {
            errors["email"] = "Email is required!";
        }

        if (!values.username) {
            errors["username"] = "Username is required!";
        }
        if (values.username?.length<5) {
            errors["username"] = "Username is must be min 5 characters!";
        }

        if (!values.password) {
            errors["password"] = "Password is required!";
        }
        if (values.password?.length<5) {
            errors["password"] = "Password should be at least 5 characters!";
        }
        if (!values.rePassword) {
            errors["rePassword"] = "Password is required!";
        }
      

        if (values.password !== values.rePassword) {
            errors["rePassword"] = "Passwords do not match!";
        }

        return errors;
    }

    return {
        values,
        errors,
        touched,
        register,
        formAction,
        loginFormAction,
    };
}
