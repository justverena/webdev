let name = "Verena";

alert( `hello ${1}` ); // ? "hello 1"

alert( `hello ${"name"}` ); // ? "hello name "

alert( `hello ${name}` ); // ? "hello Verena"let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya