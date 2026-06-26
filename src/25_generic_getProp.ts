/*
=========================================================
GENERIC PROPERTY ACCESS (keyof & T[K])
=========================================================

INDEX

1. Why Do We Need Generic Property Access?
2. The Problem
3. keyof
4. Indexed Access Types (T[K])
5. Generic Getter
6. Generic Setter
7. Step-by-Step Type Inference
8. Real World Backend Examples
9. Common Mistakes
10. Best Practices
11. Interview Definitions

=========================================================
1. WHY DO WE NEED GENERIC PROPERTY ACCESS?
=========================================================

Suppose we have an object:

const user = {

  id: "1",

  name: "Diwakar",

  email: "abc@gmail.com"

};

Sometimes we don't know
which property the user
wants.

Example:

getUserProp(user, "id")

or

getUserProp(user, "name")

or

getUserProp(user, "email")

Instead of writing three
different functions, we can
write ONE generic function.

=========================================================
2. THE PROBLEM
=========================================================

Without Generics:

function get(obj:any,key:string){
    return obj[key];
}

Problems:

❌ No type safety

❌ Invalid keys allowed

❌ Return type becomes any

=========================================================
3. KEYOF
=========================================================

Definition:

keyof returns all keys of
an object type.

Example:
*/

type User = {

  id: string;

  name: string;

  email?: string;

};

/*
keyof User

↓

"id"

|

"name"

|

"email"

---------------------------------------------------------

Think of keyof as asking:

"What are all the keys
inside this object?"

=========================================================
4. INDEXED ACCESS TYPES (T[K])
=========================================================

Definition:

T[K]

means:

"The type of property K
inside object T."

Example:

User["id"]

↓

string

---------------------------------------------------------

User["name"]

↓

string

---------------------------------------------------------

User["email"]

↓

string | undefined

because email is optional.

=========================================================
VISUAL
=========================================================

User

{

id:string

name:string

email?:string

}

---------------------------------------------------------

User["id"]

↓

string

---------------------------------------------------------

User["name"]

↓

string

---------------------------------------------------------

User["email"]

↓

string | undefined

=========================================================
5. GENERIC GETTER
=========================================================
*/

function getUserProp<
T,
K extends keyof T
>(
  obj:T,
  key:K
):T[K]{

  return obj[key];

}

/*
T

↓

Object Type

---------------------------------------------------------

K

↓

One key of T

---------------------------------------------------------

T[K]

↓

Type of that property

=========================================================
EXAMPLE
=========================================================
*/

const user:User={

  id:"u1",

  name:"Diwakar",

  email:"abc@gmail.com"

};

const nameValue =
getUserProp(
  user,
  "name"
);

/*
Step 1

T = User

---------------------------------------------------------

Step 2

K = "name"

---------------------------------------------------------

Step 3

Return Type

↓

User["name"]

↓

string

---------------------------------------------------------

Final Type

string
*/

const emailValue =
getUserProp(
  user,
  "email"
);

/*
Return Type

↓

string | undefined

=========================================================
INVALID KEY
=========================================================

getUserProp(
    user,
    "salary"
)

Error

Reason:

salary

is NOT one of

"id"

"name"

"email"

=========================================================
6. GENERIC SETTER
=========================================================
*/

function setUserProp<
T,
K extends keyof T
>(
  obj:T,
  key:K,
  newValue:T[K]
):void{

  obj[key]=newValue;

}

/*
Notice:

newValue

must have exactly
the same type as
that property.
*/

/*
Valid
*/

setUserProp(
  user,
  "name",
  "Bhaskar"
);

/*
name

expects

string

---------------------------------------------------------

Valid
*/

setUserProp(
  user,
  "email",
  "xyz@gmail.com"
);

/*
email

expects

string | undefined

---------------------------------------------------------

Valid
*/

setUserProp(
  user,
  "email",
  undefined
);

/*
=========================================================
INVALID VALUE
=========================================================

setUserProp(

user,

"name",

100

)

Error

Reason:

name expects

string

not number.

=========================================================
7. STEP-BY-STEP TYPE INFERENCE
=========================================================

Call:

getUserProp(

user,

"name"

)

---------------------------------------------------------

Step 1

T

↓

User

---------------------------------------------------------

Step 2

keyof T

↓

"id"

|

"name"

|

"email"

---------------------------------------------------------

Step 3

K

↓

"name"

---------------------------------------------------------

Step 4

T[K]

↓

User["name"]

↓

string

---------------------------------------------------------

Final Return Type

string

=========================================================
8. REAL WORLD BACKEND EXAMPLES
=========================================================

Repository Pattern

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

without writing
multiple functions.

---------------------------------------------------------

Sorting

sortBy(users,"name")

---------------------------------------------------------

Filtering

filterBy(products,"price")

---------------------------------------------------------

Selecting Columns

select(users,"email")

=========================================================
9. COMMON MISTAKES
=========================================================

❌ Using string instead of keyof T

Bad

function get(

obj:T,

key:string

)

---------------------------------------------------------

Good

key: keyof T

---------------------------------------------------------

❌ Returning any

Bad

:any

---------------------------------------------------------

Good

:T[K]

---------------------------------------------------------

❌ Using any instead of Generics

Generics preserve
type information.

=========================================================
10. BEST PRACTICES
=========================================================

✔ Use

K extends keyof T

for property names.

✔ Return

T[K]

instead of any.

✔ Prefer generic helpers
over duplicated code.

✔ Use meaningful names:

T

K

V

Response

Data

=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

KEYOF

Returns all keys of
an object type.

---------------------------------------------------------

T[K]

Indexed Access Type.

Returns the type of
property K inside T.

---------------------------------------------------------

K extends keyof T

Restricts K so that
it must be a valid key
of object T.

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Why use

K extends keyof T

?

Answer:

To ensure only valid
object keys are accepted,
providing full type safety
and autocomplete.

=========================================================
ANALOGY
=========================================================

Imagine an object is
a cupboard.

User

↓

-----------------------

ID Drawer

Name Drawer

Email Drawer

-----------------------

keyof User

asks:

"What drawers exist?"

Answer:

"id"

"name"

"email"

---------------------------------------------------------

T[K]

asks:

"What is stored inside
this drawer?"

Example:

User["name"]

↓

string

User["email"]

↓

string | undefined

=========================================================
END OF NOTES
=========================================================
*/

export {};