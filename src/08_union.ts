/*
=========================================================
UNION TYPES & TYPE NARROWING IN TYPESCRIPT
=========================================================

INDEX

1. What is a Union Type?
2. Primitive Unions
3. Why Type Narrowing is Needed
4. typeof Narrowing
5. Object Unions
6. Discriminated Unions
7. in Operator Narrowing
8. Array Of Union
9. Union Of Arrays
10. Real World Examples
11. Interview Definitions

=========================================================
1. WHAT IS A UNION TYPE?
=========================================================

Definition:

A Union Type allows a variable
to hold more than one type.

Syntax:

typeA | typeB

Example:

string | number

Meaning:

The value can be:

✔ string
OR
✔ number

Visual:

value
  │
  ├── string
  │
  └── number

=========================================================
2. PRIMITIVE UNIONS
=========================================================
*/

function printId(
  id: string | number
) {

  if (
    typeof id === "string"
  ) {

    console.log(
      id.toUpperCase()
    );

  } else {

    console.log(
      id.toFixed(2)
    );

  }

}

printId("Diwakar");
printId(100);

/*
Meaning:

id can be:

string
OR
number

Type:

string | number

=========================================================
3. WHY TYPE NARROWING IS NEEDED
=========================================================
*/

/*
Without narrowing:

function printId(
  id: string | number
) {

  id.toUpperCase();

}

Error:

Property 'toUpperCase'
does not exist on type
'string | number'

Reason:

What if id is number?

TypeScript does not know.
*/

/*
We must first narrow
the type before using
type specific methods.

=========================================================
4. TYPEOF NARROWING
=========================================================
*/

function showData(
  value: string | number
) {

  if (
    typeof value ===
    "string"
  ) {

    /*
    value becomes string
    */

    console.log(
      value.toUpperCase()
    );

  } else {

    /*
    value becomes number
    */

    console.log(
      value.toFixed(2)
    );

  }

}

/*
This process is called:

TYPE NARROWING

Visual:

string | number
       ↓
typeof check
       ↓
string

OR

string | number
       ↓
typeof check
       ↓
number

=========================================================
5. OBJECT UNIONS
=========================================================
*/

type Admin = {
  role: "Admin";
  permission: string[];
};

type Customer = {
  role: "Customer";
  loyaltyPoints: number;
};

type User =
  | Admin
  | Customer;

/*
User can be:

Admin
OR
Customer

Visual:

          User
            │
     ┌──────┴──────┐
     │             │
   Admin       Customer

=========================================================
6. DISCRIMINATED UNIONS
=========================================================
*/

function describeUser(
  user: User
) {

  if (
    user.role ===
    "Admin"
  ) {

    /*
    user becomes Admin
    */

    console.log(
      user.permission
    );

  } else {

    /*
    user becomes Customer
    */

    console.log(
      user.loyaltyPoints
    );

  }

}

/*
role is called a:

DISCRIMINATOR

Because it helps
TypeScript identify
the exact type.

Visual:

role = "Admin"
       ↓
     Admin

role = "Customer"
       ↓
    Customer

This pattern is called:

DISCRIMINATED UNION

Most common union pattern
used in production code.

=========================================================
7. IN OPERATOR NARROWING
=========================================================
*/

function describeUserWithInOperator(
  user: User
) {

  if (
    "permission" in user
  ) {

    /*
    user becomes Admin
    */

    console.log(
      user.role,
      "Admin User"
    );

  } else {

    /*
    user becomes Customer
    */

    console.log(
      user.role,
      "Customer User"
    );

  }

}

/*
"in" checks whether
a property exists.

Example:

"permission" in user

returns:

true
or
false

Visual:

{
  role:"Admin",
  permission:[]
}

↓

true

---------------------------------------------------------

{
  role:"Customer",
  loyaltyPoints:100
}

↓

false

=========================================================
8. ARRAY OF UNION
=========================================================
*/

const arrOfUnion:
(
  string | number
)[] = [
  "a",
  1,
  "b",
  2
];

/*
Read as:

Array of
(
 string
 OR
 number
)

Visual:

[
  "a",
   1,
  "b",
   2
]

Each element can be:

string
OR
number

Valid:

["a",1,"b",2]

=========================================================
9. UNION OF ARRAYS
=========================================================
*/

const unionOfArrays:
string[]
|
number[] =
Math.random() > 0.5
  ? ["x", "y"]
  : [1, 2];

/*
Read as:

(
 string[]
)

OR

(
 number[]
)

Visual:

Either:

["a","b"]

OR

[1,2]

NOT BOTH

Valid:

["a","b"]

Valid:

[1,2]

Invalid:

["a",1]

=========================================================
ARRAY OF UNION
VS
UNION OF ARRAYS
=========================================================

ARRAY OF UNION

(string | number)[]

Meaning:

Every element can be:

string
OR
number

Example:

["a",1,"b",2]

---------------------------------------------------------

UNION OF ARRAYS

string[] | number[]

Meaning:

Entire array must be:

all strings

OR

all numbers

Example:

["a","b"]

OR

[1,2]

=========================================================
10. REAL WORLD EXAMPLES
=========================================================
*/

/*
API STATUS
*/

type Success = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse =
  | Success
  | ErrorResponse;

function handleResponse(
  response: ApiResponse
) {

  if (
    response.status ===
    "success"
  ) {

    console.log(
      response.data
    );

  } else {

    console.log(
      response.message
    );

  }

}

/*
PAYMENT STATUS
*/

type Payment =
  | "pending"
  | "success"
  | "failed";

/*
ROLE TYPES
*/

type Role =
  | "user"
  | "admin"
  | "operator";

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

UNION TYPE

A Union Type allows a value
to be one of multiple types.

Example:

string | number

---------------------------------------------------------

TYPE NARROWING

Type Narrowing is the process
of reducing a union type into
a more specific type.

Techniques:

✔ typeof

✔ in

✔ instanceof

✔ Type Predicate

---------------------------------------------------------

DISCRIMINATED UNION

A Discriminated Union is a
union of object types that
share a common literal property.

Example:

role: "Admin"
role: "Customer"

The shared property is used
to identify the exact type.

---------------------------------------------------------

ARRAY OF UNION

(string | number)[]

Meaning:

Each element can be
string or number.

---------------------------------------------------------

UNION OF ARRAYS

string[] | number[]

Meaning:

The entire array must be
all strings or all numbers.

=========================================================
END OF NOTES
=========================================================
*/

export {};