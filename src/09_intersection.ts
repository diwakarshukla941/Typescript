/*
=========================================================
INTERSECTION TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What is an Intersection Type?
2. Why do we need Intersection Types?
3. Basic Intersection
4. Multiple Object Types
5. Real World Examples
6. Intersection vs Union
7. Common Mistakes
8. Interview Definitions

=========================================================
1. WHAT IS AN INTERSECTION TYPE?
=========================================================

Definition:

An Intersection Type combines
multiple types into a single type.

Syntax:

TypeA & TypeB

Meaning:

The value must satisfy:

✔ TypeA
AND
✔ TypeB

Visual:

TypeA
  │
  ▼
 TypeA & TypeB
  ▲
  │
TypeB

Think:

Union (|)

"THIS OR THAT"

Intersection (&)

"THIS AND THAT"

=========================================================
2. WHY DO WE NEED INTERSECTION TYPES?
=========================================================

Sometimes an object must contain
properties from multiple types.

Example:

User Information

+
Audit Information

+
Permissions

Instead of rewriting everything,
we combine existing types.

=========================================================
3. BASIC INTERSECTION
=========================================================
*/

type Inter1 = {
  id: string;
};

type Inter2 = {
  createdAt: Date;
};

type Entity =
  Inter1 & Inter2;

/*
Expansion:

type Entity = {
  id: string;
  createdAt: Date;
}

Entity must contain:

✔ id
✔ createdAt

Both are required.
*/

const entityExample: Entity = {
  id: "D1",
  createdAt: new Date()
};

/*
Valid

Contains all required
properties.
*/

/*
Invalid Example

const entityExample: Entity = {
  id: "D1"
}

Error:

Property 'createdAt'
is missing.
*/

/*
=========================================================
4. MULTIPLE OBJECT TYPES
=========================================================
*/

type Product = {
  id: string;
  title: string;
};

type Price = {
  price: number;
};

type PricedProduct =
  Product & Price;

/*
Expansion:

type PricedProduct = {
  id: string;
  title: string;
  price: number;
}
*/

const productExample:
  PricedProduct = {

  id: "441",

  title: "Car",

  price: 204633565

};

/*
Valid

Contains:

✔ id
✔ title
✔ price
*/

/*
=========================================================
VISUAL REPRESENTATION
=========================================================

Product

{
  id: string;
  title: string;
}

AND

Price

{
  price: number;
}

↓

Intersection (&)

{
  id: string;
  title: string;
  price: number;
}

=========================================================
5. REAL WORLD EXAMPLES
=========================================================
*/

/*
USER + TIMESTAMPS
*/

type UserInfo = {
  id: string;
  name: string;
};

type AuditInfo = {
  createdAt: Date;
  updatedAt: Date;
};

type UserRecord =
  UserInfo & AuditInfo;

const userRecord: UserRecord = {
  id: "1",
  name: "Diwakar",
  createdAt: new Date(),
  updatedAt: new Date()
};

/*
---------------------------------------------------------
API RESPONSE
---------------------------------------------------------
*/

type ApiData = {
  data: string[];
};

type ApiMeta = {
  total: number;
  page: number;
};

type ApiResponse =
  ApiData & ApiMeta;

/*
Result

{
  data: string[];
  total: number;
  page: number;
}
*/

/*
---------------------------------------------------------
PRODUCT + INVENTORY
---------------------------------------------------------
*/

type ProductInfo = {
  id: string;
  title: string;
};

type Inventory = {
  quantity: number;
};

type ProductInventory =
  ProductInfo & Inventory;

/*
=========================================================
6. INTERSECTION VS UNION
=========================================================

UNION (|)

Means:

THIS OR THAT

Example:
*/

type UnionExample =
  { id: string }
  |
  { name: string };

/*
Valid:

{ id: "1" }

Valid:

{ name: "Diwakar" }

Can be either one.
*/

/*
---------------------------------------------------------
INTERSECTION (&)

Means:

THIS AND THAT
*/

type IntersectionExample =
  { id: string }
  &
  { name: string };

/*
Valid:

{
  id: "1",
  name: "Diwakar"
}

Must contain both.
*/

/*
Visual:

Union

A | B

    A
     \
      \
       \
        B

Choose one.

---------------------------------------------------------

Intersection

A & B

    A
     \
      \
       X
      /
     /
    B

Must satisfy both.

=========================================================
7. COMMON MISTAKES
=========================================================
*/

/*
Mistake 1

Thinking & means OR

Wrong

A & B

means:

A AND B

---------------------------------------------------------

Mistake 2

Missing required fields
*/

type UserA = {
  id: string;
};

type UserB = {
  name: string;
};

type CombinedUser =
  UserA & UserB;

/*
Wrong

const user: CombinedUser = {
  id: "1"
}

Missing:

name

---------------------------------------------------------

Correct

const user: CombinedUser = {
  id: "1",
  name: "Diwakar"
}
*/

/*
=========================================================
8. INTERVIEW DEFINITIONS
=========================================================

Intersection Type

An Intersection Type combines
multiple types into one type.

Syntax:

TypeA & TypeB

Meaning:

The resulting type must satisfy
all constituent types.

---------------------------------------------------------

Example:

type User = {
  id: string;
};

type Audit = {
  createdAt: Date;
};

type UserRecord =
  User & Audit;

Result:

{
  id: string;
  createdAt: Date;
}

---------------------------------------------------------

Union vs Intersection

Union (|)

TypeA | TypeB

Means:

A OR B

---------------------------------------------------------

Intersection (&)

TypeA & TypeB

Means:

A AND B

---------------------------------------------------------

Benefits

✔ Reusable Types

✔ Cleaner Code

✔ Composition

✔ Strong Type Safety

✔ Common In API Models

=========================================================
END OF NOTES
=========================================================
*/
export {}
