//Define new method hello that return "hello name" to a given params name
// else if name ie empty you should return "hello world"
// Then check user typos example iLhAM => Ilham

function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }

console.log(hello('AcIkIWIR'))