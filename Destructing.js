// The Object
const address = {
    street: '',
    number: '',
    city: '',

};

// set variables
const street = address.street;
const number = address.number;
const city = address.city;

// set variables with the Destructing syntax
const { street, number, city } = address

// defining a new constant
const { street: St } = address;