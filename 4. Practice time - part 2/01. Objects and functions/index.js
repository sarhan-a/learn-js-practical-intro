// Create a person object that contains three keys: name, age, and city.

let person = {
  name: "Bruce Wayne",
  age: 26,
  city: "Gotham City"
};

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in " + person.city);
}

// Call the logData() function to verify that it works
logData();
