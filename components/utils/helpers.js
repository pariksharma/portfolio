export const validateForm = (formdata) => {
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!formdata.firstname) {
        return 'Enter your  first name';
    } else if(!formdata.lastname) {
        return 'Enter your last name';
    } else if(!formdata.email) {
        return 'Enter your email';
    } else if(!formdata.email.match(isValidEmail)) {
        return 'Enter your valid email';
    } else if(!formdata.phone) {
        return 'Enter your contact number';
    } else if (formdata.phone.length != 10) {
        return 'Enter your valid number';
    } else if(!formdata.type) {
        return 'select your service';
    } else if(!formdata.message) {
        return 'specify your message';
    } else {
        return 'success'
    }
}
