// Checks that an email is valid
const validateEmail = (email) => {
    // Code humbly borrowed from  GeeksForGeeks
    // Source: https://www.geeksforgeeks.org/javascript-program-to-validate-an-email-address/
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export {validateEmail};
