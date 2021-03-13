function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
};

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => {
        return driver.substring(0, letters.length) === letters
    });
};

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}