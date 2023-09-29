// Define the global object sampleObject
const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

// Function to check if the key exists in sampleObject
function hasKey(key) {
    // Check if the key exists in sampleObject
    return sampleObject.hasOwnProperty(key);
}

// Example usage:
const key1 = "red";
const key2 = "blue";
const key3 = "white";

console.log(hasKey(key1)); // Should return true
console.log(hasKey(key2)); // Should return false
console.log(hasKey(key3)); // Should return true
