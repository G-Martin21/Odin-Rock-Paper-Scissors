JavaScript

1. camelCase, constant with uppercasse if hard-coded, if calculate at run-time, lowercase.

Numbers

64-bits floating point (8 bytes)

52 bits mantissa/fraction, 11 bits exponent, 1 bit sign

integers are precise at to 15 digits, the maximum number of decimals is 17.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

#Errors

Syntax Error

A syntax error occurs when the code you are trying to run is not written correctly, i.e., in accordance with the grammatical rules of JavaScript.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

Reference Error

These arise because whatever variable you are trying to reference does not exist (within the current scope) - or it has been spelt incorrectly!

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError

Type Error

These errors are thrown for a few different reasons:

Per MDN, a TypeError may be thrown when:

        an operand or argument passed to a function is incompatible with the type expected by that operator or function;
        or when attempting to modify a value that cannot be changed;
        or when attempting to use a value in an inappropriate way.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong



There are 3 ways to include Javascript in HTML:

    External Javascript, load a Javascript file – <script src="FILE.JS"></script>
    Internal Javascript, add a block of code in the HTML document itself – <script>DO SOMETHING</script>
    Inline Javascript, directly add Javascript to an HTML element – <input type="button" value="Test" onclick="FUNCTION()"/> 


