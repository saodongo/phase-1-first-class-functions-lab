const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Antonia', 'Nuru']

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // ['Amari', 'Mo']

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);  // Declared fareDoubler here
console.log(fareDoubler(10)); // 20

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10)); // 30

const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(5)); // 20

const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
};
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // ['Amari', 'Mo']

