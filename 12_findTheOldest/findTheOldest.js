const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (oldest === undefined) return person;
        const calcAge = (person) => (person.yearOfDeath ?? (new Date().getFullYear())) - person.yearOfBirth;
        return (calcAge(oldest) > calcAge(person))? oldest : person; 
    });
};

// Do not edit below this line
module.exports = findTheOldest;
