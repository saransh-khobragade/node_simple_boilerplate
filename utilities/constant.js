  
function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

define("orbit1_miles", 18);
define("orbit1_craters", 20);
define("orbit2_miles", 20);
define("orbit2_craters", 10);