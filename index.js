
function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, letters) {
  return drivers.filter(function (driverName) {
      if (driverName.slice(0,2) === letters){
        return driverName;
      }
  });
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    if (driver.name === name) {
      return driver;
    }
  });
}
