/*
=========================================================
PARAMETER ANNOTATIONS IN TYPESCRIPT
=========================================================

INDEX

1. What are Parameter Annotations?
2. Why Parameter Annotations?
3. Basic Parameter Annotations
4. Return Type Annotations
5. Parameter Type Checking
6. Callback Parameter Inference
7. Implicit Any
8. Object Parameter Annotations
9. Real World Examples
10. Best Practices
11. Interview Definitions

=========================================================
1. WHAT ARE PARAMETER ANNOTATIONS?
=========================================================

Definition:

Parameter Annotations specify
the type of values a function
expects as input.

Syntax:

function fn(
  parameter: Type
) {}

Example:

function greet(
  name: string
) {}

TypeScript now knows:

name must be a string.

=========================================================
2. WHY PARAMETER ANNOTATIONS?
=========================================================

Without annotations,
TypeScript may not know
what type a parameter is.

Annotations provide:

✔ Type Safety

✔ Better Autocomplete

✔ Better Documentation

✔ Compile-Time Error Checking

=========================================================
3. BASIC PARAMETER ANNOTATIONS
=========================================================
*/

function func1(
    a: number,
    b: number
): number {

    return a + b;

}

console.log(
    func1(5, 2)
);

/*
Parameters:

a -> number

b -> number

Return Type:

number

Output:

7
*/

/*
Invalid:

func1("5", 2)

Error:

Argument of type string
is not assignable to number.
*/

/*
=========================================================
4. RETURN TYPE ANNOTATIONS
=========================================================
*/

/*
Explicit Return Type
*/

function multiply(
    a: number,
    b: number
): number {

    return a * b;

}

/*
TypeScript knows:

Return Type = number
*/

/*
Without Return Annotation
*/

function subtract(
    a: number,
    b: number
) {

    return a - b;

}

/*
TypeScript infers:

number

automatically.
*/

/*
=========================================================
5. PARAMETER TYPE CHECKING
=========================================================
*/

function greet(
    name: string
) {

    console.log(
        `Hello ${name}`
    );

}

greet("Diwakar");

/*
Valid
*/

/*
greet(100);

Error

Expected string
received number.
*/

/*
=========================================================
6. CALLBACK PARAMETER INFERENCE
=========================================================
*/

const numbers =
    [
        1,
        2,
        3
    ];

const doubled =
    numbers.map(
        n => n * 2
    );

console.log(doubled);

/*
TypeScript infers:

n -> number

because:

numbers is number[]

This is called:

Contextual Typing
*/

/*
Equivalent:
*/

numbers.map(
    (
        n: number
    ) => n * 2
);

/*
Usually not needed because
TypeScript already knows.
*/

/*
=========================================================
7. IMPLICIT ANY
=========================================================
*/

/*
Bad Example
*/

/*
const times2 = (n) => n * 2;
*/


/*
In strict mode:

Error

Parameter 'n'
implicitly has
an 'any' type.

Reason:

TypeScript has no context
to determine the type.
*/

/*
Correct Version
*/

const timesTwo =
    (
        n: number
    ) => n * 2;

console.log(
    timesTwo(5)
);

/*
Parameter:

number

Return:

number
*/

/*
=========================================================
8. OBJECT PARAMETER ANNOTATIONS
=========================================================
*/

type Point = {

    x: number;

    y: number;

};

function distanceFromOrigin(
    point: Point
) {

    return Math.hypot(
        point.x,
        point.y
    );

}

console.log(
    distanceFromOrigin({
        x: 3,
        y: 2
    })
);

/*
Point Type:

{
  x:number;
  y:number;
}

TypeScript validates
the object structure.
*/

/*
Invalid:

distanceFromOrigin({
  x: 3
})

Missing:

y
*/

/*
=========================================================
9. REAL WORLD EXAMPLES
=========================================================
*/

/*
User Object
*/

type User = {

    id: string;

    name: string;

};

function printUser(
    user: User
) {

    console.log(
        user.name
    );

}

/*
Product Object
*/

type Product = {

    id: string;

    price: number;

};

function printPrice(
    product: Product
) {

    console.log(
        product.price
    );

}

/*
=========================================================
10. BEST PRACTICES
=========================================================

✔ Always annotate
  function parameters

✔ Let TypeScript infer
  simple return types

✔ Avoid implicit any

✔ Use custom types
  for object parameters

✔ Prefer reusable types
  over inline object types

=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

PARAMETER ANNOTATION

A Parameter Annotation
specifies the type of a
function parameter.

Example:

function greet(
  name:string
){}

---------------------------------------------------------

RETURN TYPE ANNOTATION

Specifies the type returned
by a function.

Example:

function add(
  a:number,
  b:number
): number

---------------------------------------------------------

CONTEXTUAL TYPING

TypeScript infers types
based on surrounding context.

Example:

[1,2,3].map(
  n => n * 2
)

n becomes:

number

---------------------------------------------------------

IMPLICIT ANY

Occurs when TypeScript
cannot determine a type
and falls back to any.

Avoid it whenever possible.

=========================================================
END OF NOTES
=========================================================
*/

export { };