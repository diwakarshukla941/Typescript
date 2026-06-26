/*
=========================================================
GENERIC CONSTRAINTS IN TYPESCRIPT
=========================================================

INDEX

1. What are Generic Constraints?
2. Why Do We Need Constraints?
3. Syntax
4. Length Constraint
5. keyof Constraint
6. Generic Property Access
7. Real World Backend Examples
8. Best Practices
9. Interview Definitions

=========================================================
1. WHAT ARE GENERIC CONSTRAINTS?
=========================================================

Definition:

A Generic Constraint limits
what types can be used as
the generic type.

Without constraints:

T can be ANY type.

With constraints:

T must satisfy a condition.

Syntax:

<T extends SomeType>

Meaning:

T must be assignable to
SomeType.

=========================================================
2. WHY DO WE NEED CONSTRAINTS?
=========================================================

Suppose we want to use:

.length

Example:

function getLength<T>(
  value:T
){
    return value.length;
}

This gives an error.

Why?

Because:

T could be:

number

boolean

Date

null

etc.

TypeScript cannot guarantee
that every type has a
length property.

We need to restrict T.

=========================================================
3. GENERIC CONSTRAINT SYNTAX
=========================================================

<T extends SomeType>

Read it as:

"T must extend SomeType."

It DOES NOT mean inheritance
only.

It means:

"T must satisfy this shape."

=========================================================
4. LENGTH CONSTRAINT
=========================================================
*/

function getLength<
  T extends { length: number }
>(
  value: T
): number {

  return value.length;

}

console.log(
  getLength("Hello")
);

/*
string has:

length

Valid
*/

console.log(
  getLength([1,2,3,4])
);

/*
Array has:

length

Valid
*/

console.log(
  getLength({
    length:4,
    tag:"ok"
  })
);

/*
Object also has:

length

Valid
*/

/*
Invalid:

getLength(100)

Reason:

number has no
length property.
*/

/*
=========================================================
VISUAL UNDERSTANDING
=========================================================

Without Constraint

T

↓

Anything

number

string

Date

boolean

Array

Object

---------------------------------------------------------

With Constraint

T extends {

length:number

}

↓

Only values having
length.

string

array

custom object

=========================================================
5. KEYOF CONSTRAINT
=========================================================

Definition:

keyof returns all keys
of an object.

Example:
*/

type User = {

  id:string;

  name:string;

  age?:number;

};

/*
keyof User

↓

"id"

|

"name"

|

"age"

*/

/*
Constraint:

K extends keyof T

means

K must be one of
the keys of T.
*/

/*
=========================================================
6. GENERIC PROPERTY ACCESS
=========================================================
*/

function extractProperty<
T,
K extends keyof T
>(
  array:T[],
  key:K
): Array<T[K]> {

  return array.map(
    item => item[key]
  );

}

const users:User[] = [

  {

    id:"1",

    name:"Diwakar",

    age:22

  },

  {

    id:"2",

    name:"Bhaskar"

  }

];

console.log(

  extractProperty(
    users,
    "id"
  )

);

/*
Output:

["1","2"]
*/

console.log(

  extractProperty(
    users,
    "name"
  )

);

/*
Output:

["Diwakar","Bhaskar"]
*/

console.log(

  extractProperty(
    users,
    "age"
  )

);

/*
Output:

[22, undefined]
*/

/*
Invalid:

extractProperty(
  users,
  "salary"
)

Error

Reason:

salary

is not a key of User.

=========================================================
STEP BY STEP
=========================================================

Call:

extractProperty(
  users,
  "id"
)

---------------------------------------------------------

Step 1

T becomes:

User

---------------------------------------------------------

Step 2

keyof T

↓

"id"

|

"name"

|

"age"

---------------------------------------------------------

Step 3

K becomes:

"id"

---------------------------------------------------------

Step 4

Return Type

T[K]

↓

User["id"]

↓

string

Final Return:

string[]

=========================================================
7. REAL WORLD BACKEND EXAMPLES
=========================================================

API Sorting
*/

function sortBy<
T,
K extends keyof T
>(
  items:T[],
  key:K
){

  return [...items].sort(
    (a,b)=>

      String(a[key]).localeCompare(
        String(b[key])
      )

  );

}

/*
Reusable Repository
*/

function pluck<
T,
K extends keyof T
>(
  rows:T[],
  key:K
){

  return rows.map(
    row=>row[key]
  );

}

/*
Works for:

Users

Products

Orders

Payments

etc.

=========================================================
8. BEST PRACTICES
=========================================================

✔ Use constraints whenever
  generic code depends on
  certain properties.

✔ Use:

K extends keyof T

for object keys.

✔ Prefer reusable generic
  helpers instead of writing
  multiple similar functions.

=========================================================
9. INTERVIEW DEFINITIONS
=========================================================

GENERIC CONSTRAINT

Restricts what types can
be used for a generic.

Syntax:

<T extends X>

---------------------------------------------------------

KEYOF

Returns all keys of
an object type.

Example:

keyof User

↓

"id"

|

"name"

|

"age"

---------------------------------------------------------

K EXTENDS KEYOF T

Means:

K must be one of the
keys of T.

---------------------------------------------------------

T[K]

Indexed Access Type.

Returns the type of
property K in object T.

Example:

User["id"]

↓

string

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Why use Generic Constraints?

Answer:

To ensure that generic
types satisfy certain
requirements before using
their properties or methods.

Example:

.length

Only works on types
having a length property.

=========================================================
ANALOGY
=========================================================

Imagine T is a person
applying for a job.

Without Constraint:

Anyone can apply.

Doctor

Teacher

Pilot

Student

---------------------------------------------------------

With Constraint:

Requirement:

Must know JavaScript.

Only applicants who satisfy
that requirement are allowed.

Similarly,

<T extends { length:number }>

means:

Only values having a
length property are allowed.

=========================================================
END OF NOTES
=========================================================
*/

export {};