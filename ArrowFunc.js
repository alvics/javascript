// JS Functions
const square = function(number) {
        return number * number
    }
    // New ES6 Arrow Functions

// if a single parameter no paretheses needed
const square = number => number * number;
console.log(square(5));

// if no parameter then parentheses are needed!
const square = () => {
    return number * number; // body of the function
}


// If the the body of the function returns a value then a single line can be used, can remove the return keyword

const jobs = [
    { id: 1, isActive: true },
    { id: 1, isActive: true },
    { id: 1, isActive: false },
];

const activeJobs = jobs.filter(function(job) { return job.isActive }); // JS
const activeJobs = job.filter(job => job.isActive); //JS ES6