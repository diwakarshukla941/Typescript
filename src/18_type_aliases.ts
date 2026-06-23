/*
=========================================================
TYPE ALIASES IN TYPESCRIPT
=========================================================

INDEX

1. What is a Type Alias?
2. Why Use Type Aliases?
3. Object Types
4. Union Types
5. Literal Types
6. Intersection Types
7. Type Alias vs Interface
8. Real World Examples
9. Best Practices
10. Interview Definitions

=========================================================
1. WHAT IS A TYPE ALIAS?
=========================================================

Definition:

A Type Alias creates a custom
name for a type.

Syntax:

type Name = Type;

Example:
*/

type UserId = string;

/*
UserId is now an alias
for string.
*/

/*
=========================================================
2. WHY USE TYPE ALIASES?
=========================================================

Benefits:

✔ Reusable

✔ Readable

✔ Supports Unions

✔ Supports Intersections

✔ Supports Primitive Aliases

=========================================================
3. OBJECT TYPES
=========================================================
*/

type Person = {

  id: string;

  address: string;

  salary: number;

};

const person: Person = {

  id: "1",

  address: "Mumbai",

  salary: 50000

};

console.log(person);

/*
Type Alias can describe
the shape of an object.

Very similar to Interface.
*/

/*
=========================================================
4. UNION TYPES
=========================================================

Union means:

THIS OR THAT

Syntax:

A | B

=========================================================
*/

type Status =
  | "new"
  | "paid"
  | "pending";

/*
Allowed Values:

new

paid

pending
*/

function nextActionCheck(
  status: Status
): string {

  switch (status) {

    case "new":
      return "Create Payment";

    case "paid":
      return "Send Receipt";

    case "pending":
      return "Wait For Payment";

    default:
      return "Unknown";

  }

}

console.log(
  nextActionCheck("new")
);

/*
Benefits:

✔ Autocomplete

✔ Validation

✔ Prevents invalid values
*/

/*
=========================================================
5. LITERAL TYPES
=========================================================
*/

/*
These are literal values.
*/

type Direction =
  | "Left"
  | "Right"
  | "Up"
  | "Down";

let moveDirection:
Direction = "Left";

/*
Valid
*/

/*
moveDirection = "Forward";

Error
*/

/*
=========================================================
6. INTERSECTION TYPES
=========================================================

Intersection means:

THIS AND THAT

Syntax:

A & B

=========================================================
*/

type ProductPrice = {

  price: number;

};

type ProductStock = {

  stock: number;

};

type ProductInfo =
ProductPrice &
ProductStock;

/*
Result:

{
  price:number;
  stock:number;
}
*/

const product:
ProductInfo = {

  price: 100,

  stock: 20

};

/*
=========================================================
INTERSECTION WITH MULTIPLE TYPES
=========================================================
*/

type PersonInfo = {

  id: string;

  address: string;

  salary: number;

};

type PriceInfo = {

  price: number;

};

type StockInfo = {

  stock: number;

};

type MergedProductInfo =
PersonInfo &
PriceInfo &
StockInfo;

const merged:
MergedProductInfo = {

  id: "1",

  address: "Mumbai",

  salary: 50000,

  price: 100,

  stock: 20

};

/*
Visual:

PersonInfo
      &
PriceInfo
      &
StockInfo

↓

Single Combined Type
*/

/*
=========================================================
7. TYPE ALIAS VS INTERFACE
=========================================================

INTERFACE

interface User {
  id:string;
}

---------------------------------------------------------

TYPE

type User = {
  id:string;
}

---------------------------------------------------------

Both work for objects.

Main Difference:

Type supports:

✔ Union Types

✔ Intersection Types

✔ Primitive Aliases

Interface does not.
*/

/*
=========================================================
8. REAL WORLD EXAMPLES
=========================================================
*/

/*
User Roles
*/

type Role =
  | "admin"
  | "user"
  | "manager";

/*
Payment Status
*/

type PaymentStatus =
  | "pending"
  | "success"
  | "failed";

/*
API Response
*/

type ApiResponse<T> = {

  success: boolean;

  data: T;

};

/*
=========================================================
9. BEST PRACTICES
=========================================================

✔ Use PascalCase names

✔ Use Type for Unions

✔ Use Type for Intersections

✔ Use Interface for
  large object structures

✔ Keep aliases reusable

=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

TYPE ALIAS

A Type Alias creates a custom
name for any TypeScript type.

Syntax:

type User = {
  id:string;
}

---------------------------------------------------------

UNION TYPE

A value can be one of
multiple types.

Example:

string | number

---------------------------------------------------------

INTERSECTION TYPE

Combines multiple types
into one.

Example:

A & B

---------------------------------------------------------

TYPE VS INTERFACE

Type:

Supports unions,
intersections,
primitive aliases.

---------------------------------------------------------

Interface:

Best for object shapes
and inheritance.

=========================================================
MOST IMPORTANT INTERVIEW QUESTION
=========================================================

When should you use Type?

✔ Union Types

✔ Intersection Types

✔ Primitive Aliases

✔ Utility Types

---------------------------------------------------------

When should you use Interface?

✔ Object Shapes

✔ OOP

✔ Extendable Structures

=========================================================
END OF NOTES
=========================================================
*/

export {};