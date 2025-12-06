import { useState } from "react";

export default function useForm(initialValues, validateFn, onSubmit) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const blurHandler = (e) => {
        setTouched(state => ({ 
            ...state, 
            [e.target.name]: true 
        }));

        setErrors(validateFn(values));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const validation = validateFn(values);
        setErrors(validation);

        if (Object.keys(validation).length > 0) return;

        onSubmit(values);
    }

    const register = (field) => ({
        name: field,
        value: values[field],
        onChange: changeHandler,
        onBlur: blurHandler
    });

    return {
        values,
        errors,
        touched,
        register,
        submitHandler,
    }
}
