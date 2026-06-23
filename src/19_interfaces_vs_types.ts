/*
=========================================================
INTERFACE VS TYPE ALIAS
=========================================================

INDEX

1. What is Interface?
2. What is Type Alias?
3. Similarities
4. Declaration Merging
5. Interface Extension
6. Type Intersections
7. Interface vs Type
8. When To Use Interface
9. When To Use Type
10. Interview Definitions

=========================================================
1. WHAT IS INTERFACE?
=========================================================

Definition:

An Interface describes the
shape of an object.

Interfaces are primarily
used for object structures.

Example:
*/

interface User {

  id: string;

  name: string;

}

/*
Object must contain:

id

name

=========================================================
2. WHAT IS TYPE ALIAS?
=========================================================

Definition:

A Type Alias creates a custom
name for any type.

Example:
*/

type UserType = {

  id: string;

  name: string;

};

/*
Type aliases can represent:

✔ Objects

✔ Unions

✔ Intersections

✔ Functions

✔ Tuples

✔ Primitive Aliases

=========================================================
3. SIMILARITIES
=========================================================

Both can describe objects.
=========================================================
*/

interface PersonInterface {

  id: string;

  name: string;

}

type PersonType = {

  id: string;

  name: string;

};

const p1:
PersonInterface = {

  id: "1",

  name: "Diwakar"

};

const p2:
PersonType = {

  id: "2",

  name: "Bhaskar"

};

/*
Both are valid.

Both produce almost
the same object shape.
*/

/*
=========================================================
4. DECLARATION MERGING
=========================================================

INTERFACES SUPPORT IT
=========================================================
*/

interface Box {

  width: number;

}

interface Box {

  height: number;

}

/*
TypeScript merges them.

Result:

interface Box {

  width:number;

  height:number;

}
*/

const boxDemo: Box = {

  width: 10,

  height: 10

};

console.log(boxDemo);

/*
This feature is called:

Declaration Merging

Only Interfaces support this.

=========================================================
5. INTERFACE EXTENSION
=========================================================

Interfaces use:

extends
=========================================================
*/

interface UserBase {

  id: string;

  name: string;

}

interface Admin
extends UserBase {

  permissions:
  string[];

}

const admin: Admin = {

  id: "1",

  name: "Diwakar",

  permissions: [
    "Owner"
  ]

};

/*
Admin inherits:

id

name

permissions

=========================================================
6. TYPE INTERSECTIONS
=========================================================

Types use:

&
=========================================================
*/

type Width = {

  width: number;

};

type Height = {

  height: number;

};

type Rectangle =
Width &
Height;

/*
Result:

{
  width:number;
  height:number;
}
*/

const rect:
Rectangle = {

  width: 10,

  height: 20

};

/*
Intersection combines
multiple types.

=========================================================
7. INTERFACE VS TYPE
=========================================================

INTERFACE

✔ Object Shapes

✔ Declaration Merging

✔ Extends

---------------------------------------------------------

TYPE

✔ Object Shapes

✔ Unions

✔ Intersections

✔ Tuples

✔ Primitive Aliases

✔ Function Types

=========================================================
8. WHEN TO USE INTERFACE
=========================================================

Recommended For:

✔ API Models

✔ React Props

✔ Class Contracts

✔ Object Structures

✔ Extensible Models

Example:
*/

interface Product {

  id: string;

  title: string;

  price: number;

}

/*
=========================================================
9. WHEN TO USE TYPE
=========================================================

Recommended For:

✔ Union Types

✔ Intersection Types

✔ Literal Types

✔ Function Types

✔ Tuples

=========================================================
*/

/*
Union Type
*/

type Status =
  | "pending"
  | "success"
  | "failed";

/*
Intersection Type
*/

type ProductInfo =
{
  price: number;
}
&
{
  stock: number;
};

/*
Function Type
*/

type AddFunction =
(
  a: number,
  b: number
) => number;

/*
Tuple
*/

type Point =
[
  number,
  number
];

/*
=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

INTERFACE

A TypeScript feature used
to describe the shape of
an object.

---------------------------------------------------------

TYPE ALIAS

A custom name for any type.

---------------------------------------------------------

DECLARATION MERGING

The ability of interfaces
with the same name to be
automatically combined.

Example:

interface Box {
  width:number;
}

interface Box {
  height:number;
}

Result:

{
  width:number;
  height:number;
}

---------------------------------------------------------

WHY DOES THIS WORK?

interface Box {
  width:number;
}

interface Box {
  height:number;
}

Because interfaces support
declaration merging.

---------------------------------------------------------

WHY DOES THIS FAIL?

type Bag = {
  size:number;
}

type Bag = {
  color:string;
}

Error:

Duplicate identifier 'Bag'

Because type aliases
cannot be reopened.

---------------------------------------------------------

MOST IMPORTANT DIFFERENCE

Interface

✔ Supports Declaration Merging

---------------------------------------------------------

Type

❌ No Declaration Merging

---------------------------------------------------------

RULE OF THUMB

Interface

For object shapes you expect
to extend.

---------------------------------------------------------

Type

For everything else:

✔ Unions

✔ Intersections

✔ Tuples

✔ Function Types

✔ Literal Types

=========================================================
END OF NOTES
=========================================================
*/

export {};