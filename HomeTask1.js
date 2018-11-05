var person = {
    name: 'Masha',
    age: 18,
    inventory: {
        pen: true,
        phone: true
    }
}

var clonePerson = Clone(person);

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
