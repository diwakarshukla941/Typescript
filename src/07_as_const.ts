/*
=========================================================
AS CONST IN TYPESCRIPT
=========================================================

INDEX

1. What is as const?
2. Why do we need as const?
3. Without as const
4. With as const
5. Arrays and as const
6. Objects and as const
7. Readonly Behavior
8. Deriving Union Types
9. Real World Use Cases
10. as const vs const
11. Interview Definitions

=========================================================
1. WHAT IS AS CONST?
=========================================================

Definition:

as const is a TypeScript assertion that:

✔ Makes values readonly
✔ Preserves literal values
✔ Prevents type widening

Syntax:

value as const

Example:

const role = "admin" as const;

Instead of:

string

TypeScript infers:

"admin"

=========================================================
2. WHY DO WE NEED AS CONST?
=========================================================

By default TypeScript widens types.

Example:

const role = "admin";

TypeScript infers:

string

NOT:

"admin"

Reason:

TypeScript assumes the value
might be used as any string.

Sometimes we want TypeScript
to remember the exact value.

That's where as const helps.

=========================================================
3. WITHOUT AS CONST
=========================================================
*/

const role1 = "admin";

/*
Type:

string

NOT:

"admin"
*/

const roles1 = [
  "user",
  "admin",
  "operator"
];

/*
Type:

string[]

TypeScript forgets the
actual values.

It only remembers:

Array of strings.
*/

/*
=========================================================
4. WITH AS CONST
=========================================================
*/

const role2 =
  "admin" as const;

/*
Type:

"admin"

Literal type preserved.
*/

const roles2 = [
  "user",
  "admin",
  "operator"
] as const;

/*
Type:

readonly [
  "user",
  "admin",
  "operator"
]

TypeScript remembers
every value exactly.
*/

/*
=========================================================
5. ARRAYS AND AS CONST
=========================================================
*/

const colors = [
  "red",
  "green",
  "blue"
] as const;

/*
Without as const:

string[]

With as const:

readonly [
  "red",
  "green",
  "blue"
]
*/

/*
Every position becomes fixed.

colors[0] -> "red"
colors[1] -> "green"
colors[2] -> "blue"
*/

/*
=========================================================
6. OBJECTS AND AS CONST
=========================================================
*/

const user = {
  name: "Diwakar",
  role: "admin"
} as const;

/*
Type:

{
  readonly name: "Diwakar";
  readonly role: "admin";
}

Properties become readonly.

Values become literal types.
*/

/*
=========================================================
7. READONLY BEHAVIOR
=========================================================
*/

const permissions = [
  "read",
  "write"
] as const;

// permissions.push("delete");

/*
Error:

Property 'push'
does not exist.

Reason:

Array became readonly.
*/

const profile = {
  name: "Diwakar"
} as const;

// profile.name = "Rahul";

/*
Error:

Cannot assign to
'name' because
it is readonly.
*/

/*
=========================================================
8. DERIVING UNION TYPES
=========================================================

MOST IMPORTANT USE CASE
=========================================================
*/

const roles = [
  "user",
  "admin",
  "operator"
] as const;

/*
Type:

readonly [
  "user",
  "admin",
  "operator"
]
*/

type Role =
  (typeof roles)[number];

/*
Step 1

typeof roles

↓

readonly [
  "user",
  "admin",
  "operator"
]

---------------------------------------------------------

Step 2

(typeof roles)[number]

↓

"user"
|
"admin"
|
"operator"

---------------------------------------------------------

Final Type

type Role =
  "user"
  | "admin"
  | "operator"
*/

function setRole(
  role: Role
) {
  console.log(role);
}

setRole("admin");
setRole("user");

/*
Valid
*/

// setRole("superadmin");

/*
Error

Argument of type
"superadmin"

is not assignable
to type Role.
*/

/*
=========================================================
9. REAL WORLD USE CASES
=========================================================
*/

/*
ROLE BASED ACCESS CONTROL
*/

const systemRoles = [
  "user",
  "admin",
  "operator",
  "manager"
] as const;

type SystemRole =
  (typeof systemRoles)[number];

/*
---------------------------------------------------------
ORDER STATUS
---------------------------------------------------------
*/

const orderStatuses = [
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled"
] as const;

type OrderStatus =
  (typeof orderStatuses)[number];

/*
---------------------------------------------------------
PAYMENT STATUS
---------------------------------------------------------
*/

const paymentStatuses = [
  "pending",
  "success",
  "failed"
] as const;

type PaymentStatus =
  (typeof paymentStatuses)[number];

/*
---------------------------------------------------------
API ROUTES
---------------------------------------------------------
*/

const apiRoutes = [
  "/users",
  "/products",
  "/orders"
] as const;

type ApiRoute =
  (typeof apiRoutes)[number];

/*
=========================================================
10. AS CONST VS CONST
=========================================================
*/

const roleA = "admin";

/*
Type:

string
*/

const roleB =
  "admin" as const;

/*
Type:

"admin"
*/

/*
---------------------------------------------------------
*/

const objA = {
  role: "admin"
};

/*
Type:

{
  role: string
}
*/

const objB = {
  role: "admin"
} as const;

/*
Type:

{
  readonly role: "admin"
}
*/

/*
---------------------------------------------------------
*/

const arrA = [
  "user",
  "admin"
];

/*
Type:

string[]
*/

const arrB = [
  "user",
  "admin"
] as const;

/*
Type:

readonly [
  "user",
  "admin"
]
*/

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

Definition:

as const is a TypeScript
const assertion that:

1. Prevents type widening
2. Preserves literal values
3. Makes properties readonly

---------------------------------------------------------

Example:

const role =
  "admin" as const;

Type:

"admin"

instead of:

string

---------------------------------------------------------

Most Common Use:

const roles = [
  "user",
  "admin",
  "operator"
] as const;

type Role =
  (typeof roles)[number];

Result:

"user"
|
"admin"
|
"operator"

---------------------------------------------------------

Benefits:

✔ Safer code

✔ Stronger autocomplete

✔ Literal type inference

✔ Union type generation

✔ Prevents accidental mutation

=========================================================
END OF NOTES
=========================================================
*/

export {}