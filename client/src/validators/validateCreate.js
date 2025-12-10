export function validateCreate(values) {
    const errors = {};

    if (!values.phoneName) {
        errors["phoneName"] = "Phone Name is required!";
    }
        if (values.phoneName?.length < 3) {
        errors["phoneName"] = "Phone Name is must be min 3 characters!";
    }

    if (!values.displaySize) {
        errors["displaySize"] = "Display Size is required!";
    }
    if (!values.color) {
        errors["color"] = "Color is Required !";
    }

    if (!values.cpu) {
        errors["cpu"] = "CPU is required!";
    }
    if (!values.ram) {
        errors["ram"] = "RAM is required!";
    }
    if (!values.storage) {
        errors["storage"] = "Storage is required!";
    }

    if (!values.price ) {
        errors["price"] = "Price is Required!";
    }

    if (!values.image ) {
        errors["image"] = "Image is required!";
    }

    return errors;
}
