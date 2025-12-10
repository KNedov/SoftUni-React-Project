export function validateComment(values) {
    const errors = {};

    if (!values.commentText) {
        errors.text = "Comment is required";
    }

    if (values.commentText?.length <3) {
        errors.commentText ="Text must be min 3 characters"
        
    }

    return errors;
}
