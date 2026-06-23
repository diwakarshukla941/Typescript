/*
=========================================================
INTERFACES IN TYPESCRIPT
=========================================================

INDEX

1. What is an Interface?
2. Why Use Interfaces?
3. Basic Interface
4. Optional Properties
5. Readonly Properties
6. Interface Extension
7. Multiple Interface Extension
8. Interface vs Type Alias
9. Real World Examples
10. Best Practices
11. Interview Definitions

=========================================================
1. WHAT IS AN INTERFACE?
=========================================================

Definition:

An Interface is a named contract
that describes the shape of an object.

It defines:

✔ Property Names

✔ Property Types

✔ Optional Properties

✔ Readonly Properties

Think:

Interface = Blueprint

Example:

interface User {
  id: string;
  name: string;
}

Any object implementing this
interface must follow the shape.

=========================================================
2. WHY USE INTERFACES?
=========================================================

Benefits:

✔ Reusable

✔ Readable

✔ Extensible

✔ Great for OOP

✔ Common in APIs

✔ Common in React Props

=========================================================
3. BASIC INTERFACE
=========================================================
*/

interface User {

  id: string;

  name: string;

  email?: string;

  readonly createdAt: Date;

}

const user: User = {

  id: "a1b2c3",

  name: "Diwakar",

  email: "diwakar@gmail.com",

  createdAt: new Date()

};

console.log(user);

/*
Meaning:

Required:

✔ id

✔ name

✔ createdAt

Optional:

✔ email

=========================================================
4. OPTIONAL PROPERTIES
=========================================================
*/

/*
email?: string

means:

Property may exist

OR

Property may be absent.
*/

const userWithoutEmail:
User = {

  id: "u1",

  name: "Bhaskar",

  createdAt: new Date()

};

/*
Valid

email omitted.
*/

/*
=========================================================
5. READONLY PROPERTIES
=========================================================
*/

/*
readonly createdAt: Date

means:

Can read

Cannot reassign
*/

/*
Not Allowed:

user.createdAt =
new Date();

Error

Cannot assign because
it is readonly.
*/

/*
=========================================================
6. INTERFACE EXTENSION
=========================================================

Interface can inherit
another interface.

Keyword:

extends
=========================================================
*/

interface Admin
extends User {

  permissions:
  string[];

}

/*
Admin contains:

id

name

email

createdAt

permissions
*/

const admin: Admin = {

  id: "a1b2c3",

  name: "Diwakar",

  email: "diwakar@gmail.com",

  createdAt: new Date(),

  permissions: [
    "Owner",
    "Manager"
  ]

};

console.log(admin);

/*
Visual:

User
  │
  ▼
Admin

Admin gets everything
from User.

=========================================================
7. MULTIPLE INTERFACE EXTENSION
=========================================================
*/

interface WithMeta {

  meta: {

    active: boolean;

  };

}

/*
Multiple inheritance
*/

interface AdminWithMeta
extends
  Admin,
  WithMeta {

}

/*
AdminWithMeta contains:

User properties

+

Admin properties

+

Meta properties
*/

const adminWithMeta:
AdminWithMeta = {

  id: "a1b2c3",

  name: "Diwakar",

  email: "diwakar@gmail.com",

  createdAt: new Date(),

  permissions: [
    "Owner",
    "Manager"
  ],

  meta: {

    active: true

  }

};

console.log(adminWithMeta);

/*
Visual:

        User
          │
          ▼
        Admin
          │
          ▼
  AdminWithMeta
          ▲
          │
      WithMeta

=========================================================
8. INTERFACE VS TYPE ALIAS
=========================================================

INTERFACE
=========================================================
*/

interface Person {

  name: string;

}

/*
TYPE ALIAS
=========================================================
*/

type PersonType = {

  name: string;

};

/*
Both can describe objects.

---------------------------------------------------------

INTERFACE

Better for:

✔ Object Shapes

✔ OOP

✔ Extending

---------------------------------------------------------

TYPE

Better for:

✔ Unions

✔ Intersections

✔ Utility Types

✔ Advanced Types

=========================================================
9. REAL WORLD EXAMPLES
=========================================================
*/

/*
API User
*/

interface ApiUser {

  id: string;

  name: string;

  email: string;

}

/*
Product
*/

interface Product {

  id: string;

  title: string;

  price: number;

}

/*
API Response
*/

interface ApiResponse<T> {

  success: boolean;

  data: T;

}

/*
Example
*/

const response:
ApiResponse<Product> = {

  success: true,

  data: {

    id: "1",

    title: "Laptop",

    price: 50000

  }

};

/*
=========================================================
10. BEST PRACTICES
=========================================================

✔ Use Interface for
  object shapes

✔ Use Type for unions

✔ Use Interface when
  inheritance is needed

✔ Keep interfaces small
  and reusable

✔ Prefer meaningful names

=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

INTERFACE

An Interface defines the
structure (shape) of an object.

---------------------------------------------------------

Example:

interface User {

  id: string;

  name: string;

}

---------------------------------------------------------

OPTIONAL PROPERTY

email?: string

Property may be omitted.

---------------------------------------------------------

READONLY PROPERTY

readonly createdAt: Date

Cannot be reassigned.

---------------------------------------------------------

EXTENDS

Allows one interface to
inherit another interface.

Example:

interface Admin
extends User

---------------------------------------------------------

MULTIPLE INHERITANCE

interface AdminWithMeta
extends Admin, WithMeta

---------------------------------------------------------

INTERFACE VS TYPE

Interface:

Best for object structures.

---------------------------------------------------------

Type:

Best for unions and
advanced type compositions.

=========================================================
MOST IMPORTANT INTERVIEW QUESTION
=========================================================

When should we use Interface
and when should we use Type?

Use Interface:

✔ Object Shapes

✔ Classes

✔ Extendable Structures

---------------------------------------------------------

Use Type:

✔ Union Types

✔ Intersection Types

✔ Utility Types

✔ Advanced Type Manipulation

=========================================================
END OF NOTES
=========================================================
*/

export {};