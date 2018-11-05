var person = {
    name: 'Masha',
    age: 18,
    inventory: {
        pen: true,
        phone: true
    }
}

var clonePerson = Clone(person);
console.log(person);
console.log(clonePerson);
clonePerson.age = 20;
console.log("After changing")
console.log(person);
console.log(clonePerson);

function Clone(obj) {
    var clone = {}; 
    for (var prop in obj) { 
      if (obj.hasOwnProperty(prop)) {
        if ("object"===typeof obj[prop]) 
        clone[prop] = Clone(obj[prop]); 
        else
        clone[prop] = obj[prop]; 
      }
    }
   return clone;
  }