/*
=========================================================
GENERICS IN TYPESCRIPT
=========================================================

INDEX

1. What are Generics?
2. Why Generics?
3. Type Parameters
4. Generic Functions
5. Type Inference
6. Explicit Generic Types
7. Generic Arrays
8. Generic Objects
9. Multiple Type Parameters
10. Generic Type Aliases
11. Generic Interfaces
12. Generics vs Unknown
13. Real World Backend Examples
14. Best Practices
15. Interview Definitions

=========================================================
1. WHAT ARE GENERICS?
=========================================================

Definition:

Generics allow us to write
reusable code that works with
different types while preserving
type safety.

Think:

Normal Function

number -> number

Generic Function

T -> T

The type is decided later.

=========================================================
2. WHY GENERICS?
=========================================================

Without Generics
=========================================================
*/

function identityBad(
  value: unknown
) {
  return value;
}

const resultBad =
identityBad(10);

/*
Type:

unknown

Type information lost.
*/

/*
=========================================================
WITH GENERICS
=========================================================
*/

function identity<T>(
  value: T
): T {

  return value;

}

const resultGood =
identity(10);

/*
Type:

number

Type preserved.
*/

/*
=========================================================
3. TYPE PARAMETERS
=========================================================

<T>

is called a:

Type Parameter

It is a placeholder type.

---------------------------------------------------------

T is just a name.

Could also be:

<U>

<V>

<Data>

<Response>

=========================================================
*/

function id<T>(
  value: T
): T {

  return value;

}

/*
Input:

T

Output:

T

Same type goes in
and comes out.
*/

/*
=========================================================
4. GENERIC FUNCTIONS
=========================================================
*/

function id2<T>(
  value: T
): T {

  return value;

}

console.log(
  id2(100)
);

console.log(
  id2("Diwakar")
);

console.log(
  id2(true)
);

/*
=========================================================
5. TYPE INFERENCE
=========================================================

TypeScript automatically
figures out T.
=========================================================
*/

const n =
id(10);

/*
T = number
*/

const str =
id("Diwakar");

/*
T = string
*/

const bool =
id(true);

/*
T = boolean
*/

/*
This is called:

Type Inference
*/

/*
=========================================================
6. EXPLICIT GENERIC TYPES
=========================================================
*/

const value1 =
id<number>(5);

const value2 =
id<string>(
  "Hello"
);

/*
Sometimes we explicitly
provide T ourselves.
*/

/*
=========================================================
7. GENERIC ARRAYS
=========================================================
*/

function firstGen<T>(
  arr: T[]
): T | undefined {

  return arr[0];

}

console.log(
  firstGen(
    [1,2,3]
  )
);

/*
number | undefined
*/

console.log(
  firstGen(
    ["a","b"]
  )
);

/*
string | undefined
*/

/*
=========================================================
8. GENERIC OBJECTS
=========================================================
*/

function wrap<T>(
  value: T
): {
  value: T
} {

  return {
    value
  };

}

const wrappedNumber =
wrap(100);

/*
{
  value:number
}
*/

const wrappedString =
wrap("Diwakar");

/*
{
  value:string
}
*/

/*
=========================================================
9. MULTIPLE TYPE PARAMETERS
=========================================================
*/

function pair<T, U>(
  first: T,
  second: U
): [T, U] {

  return [
    first,
    second
  ];

}

const p1 =
pair(
  "Diwakar",
  23
);

/*
Type:

[string, number]
*/

const p2 =
pair(
  true,
  "Active"
);

/*
Type:

[boolean, string]
*/

/*
=========================================================
10. GENERIC TYPE ALIASES
=========================================================
*/

type Box<T> = {

  value: T;

};

const box1:
Box<number> = {

  value: 100

};

const box2:
Box<string> = {

  value: "Diwakar"

};

/*
=========================================================
11. GENERIC INTERFACES
=========================================================
*/

interface Container<T> {

  data: T;

}

const userContainer:
Container<string> = {

  data: "Diwakar"

};

const countContainer:
Container<number> = {

  data: 10

};

/*
=========================================================
12. GENERICS VS UNKNOWN
=========================================================
*/

/*
UNKNOWN
*/

function badWrap(
  value: unknown
) {

  return {
    value
  };

}

const bad =
badWrap(5);

/*
Type:

{
  value: unknown
}
*/

/*
---------------------------------------------------------

GENERIC
*/

function goodWrap<T>(
  value: T
) {

  return {
    value
  };

}

const good =
goodWrap(5);

/*
Type:

{
  value:number
}
*/

/*
Generics preserve types.

Unknown loses them.
*/

/*
=========================================================
13. REAL WORLD BACKEND EXAMPLES
=========================================================
*/

/*
API RESPONSE
*/

type ApiResponse<T> = {

  success: boolean;

  message: string;

  data: T;

};

type User = {

  id: string;

  name: string;

};

const response:
ApiResponse<User> = {

  success: true,

  message: "Fetched",

  data: {

    id: "1",

    name: "Diwakar"

  }

};

/*
---------------------------------------------------------

PAGINATED RESPONSE
---------------------------------------------------------
*/

type Paginated<T> = {

  items: T[];

  total: number;

};

type Product = {

  id: string;

  title: string;

};

const products:
Paginated<Product> = {

  items: [
    {
      id: "1",
      title: "Laptop"
    }
  ],

  total: 1

};

/*
=========================================================
14. BEST PRACTICES
=========================================================

✔ Use Generics when the
  same logic works for
  multiple types.

✔ Prefer Type Inference.

✔ Use meaningful names
  when needed.

✔ Use Generics instead
  of unknown when you
  need to preserve types.

✔ Common Names:

T

U

K

V

Response

Data

=========================================================
15. INTERVIEW DEFINITIONS
=========================================================

GENERIC

A TypeScript feature that
allows types to be passed
as parameters.

---------------------------------------------------------

TYPE PARAMETER

A placeholder type.

Example:

<T>

---------------------------------------------------------

GENERIC FUNCTION

A function that works with
multiple types while preserving
type safety.

---------------------------------------------------------

GENERIC TYPE ALIAS

type Box<T> = {
  value:T;
}

---------------------------------------------------------

GENERIC INTERFACE

interface Container<T> {
  data:T;
}

---------------------------------------------------------

MOST IMPORTANT QUESTION

Why use Generics?

Answer:

To write reusable code
that works with many types
without losing type safety.

=========================================================
END OF NOTES
=========================================================
*/

export {};