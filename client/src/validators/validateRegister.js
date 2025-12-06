export function validateRegister(values) {
    const errors = {};

    if (!values.email) {
        errors["email"] = "Email is required!";
    }

    if (!values.username) {
        errors["username"] = "Username is required!";
    }
    if (values.username?.length < 5) {
        errors["username"] = "Username is must be min 5 characters!";
    }

    if (!values.password) {
        errors["password"] = "Password is required!";
    }
    if (values.password?.length < 5) {
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
