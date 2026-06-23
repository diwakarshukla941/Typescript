/*
=========================================================
IN OPERATOR, OPTIONAL CHAINING,
NULLISH COALESCING & LOGICAL OR
=========================================================

INDEX

1. in Operator
2. Why Use in?
3. in Operator Example
4. Optional Chaining (?.)
5. Why Optional Chaining?
6. Nullish Coalescing (??)
7. Logical OR (||)
8. ?? vs ||
9. Real World Examples
10. Interview Definitions

=========================================================
1. IN OPERATOR
=========================================================

Definition:

The in operator checks whether
a property exists inside an object.

Syntax:

"propertyName" in object

Returns:

true

or

false

=========================================================
2. WHY USE IN?
=========================================================

Useful when working with
union object types.

Example:

Admin

OR

User

We need to determine which
object we received.

=========================================================
3. IN OPERATOR EXAMPLE
=========================================================
*/

type Admin = {

  role: "Admin";

  permission: string[];

};

type User = {

  role: "User";

  expiresAt: Date;

};

type Person =
  | Admin
  | User;

function describeUser(
  user: Person
) {

  if (
    "permission" in user
  ) {

    return `Admin ${user.permission}`;

  }

  return `User ${user.expiresAt.toISOString()}`;

}

/*
TypeScript narrows:

Person

↓

Admin

when:

"permission" in user

---------------------------------------------------------

Otherwise:

User
*/

console.log(
  describeUser({
    role: "Admin",
    permission: [
      "read",
      "write"
    ]
  })
);

/*
Output:

Admin read,write

=========================================================
WHY DOES THIS WORK?
=========================================================

Before check:

Admin | User

---------------------------------------------------------

After:

"permission" in user

↓

Admin

---------------------------------------------------------

Else:

User

=========================================================
4. OPTIONAL CHAINING (?.)
=========================================================

Definition:

Safely access properties
that may not exist.

Syntax:

obj?.property

=========================================================
5. WHY OPTIONAL CHAINING?
=========================================================

Without Optional Chaining:
*/

const obj = {

  profile: {

    email:
      "test@gmail.com"

  }

};

/*
obj.profile.email

Works
*/

/*
But:
*/

const broken = {};

/*
broken.profile.email

Runtime Error

Because:

profile is undefined
*/

/*
Optional chaining prevents this.
*/

/*
=========================================================
OPTIONAL CHAINING EXAMPLE
=========================================================
*/

type Profile = {

  name: string;

  contact?: {

    email?: string;

  };

};

const profile1: Profile = {

  name: "Diwakar"

};

const profile2: Profile = {

  name: "Bhaskar",

  contact: {

    email:
      "bhaskar@gmail.com"

  }

};

const email1 =
profile1.contact?.email;

const email2 =
profile2.contact?.email;

console.log(email1);

console.log(email2);

/*
Results:

undefined

bhaskar@gmail.com

---------------------------------------------------------

Without ?.

profile1.contact.email

Runtime Error

=========================================================
OPTIONAL CHAINING FLOW
=========================================================

profile1.contact?.email

Step 1

Check:

contact exists?

No

↓

Return undefined

---------------------------------------------------------

No crash occurs.
*/

/*
=========================================================
6. NULLISH COALESCING (??)
=========================================================

Definition:

Uses the right-side value only
when the left-side value is:

null

or

undefined

Syntax:

value ?? defaultValue

=========================================================
*/

const countFromServer:
number | null = 0;

const labelFromServer:
string | undefined = "";

const result1 =
countFromServer ?? 100;

/*
0

because:

0 is NOT null

0 is NOT undefined
*/

const result2 =
labelFromServer ??
"Diwakar";

/*
""

because:

empty string is NOT null

and NOT undefined
*/

/*
=========================================================
7. LOGICAL OR (||)
=========================================================

Definition:

Uses the right-side value when
the left-side value is FALSY.

Falsy values:

0

""

false

null

undefined

NaN

=========================================================
*/

const result3 =
countFromServer || 100;

/*
100

because:

0 is falsy
*/

const result4 =
labelFromServer ||
"Diwakar";

/*
Diwakar

because:

"" is falsy
*/

/*
=========================================================
8. ?? VS ||
=========================================================

Value = 0

---------------------------------------------------------

0 ?? 100

Result:

0

---------------------------------------------------------

0 || 100

Result:

100

=========================================================

Value = ""

---------------------------------------------------------

"" ?? "Guest"

Result:

""

---------------------------------------------------------

"" || "Guest"

Result:

"Guest"

=========================================================

Value = null

---------------------------------------------------------

null ?? "Guest"

Result:

"Guest"

---------------------------------------------------------

null || "Guest"

Result:

"Guest"

=========================================================
9. REAL WORLD EXAMPLES
=========================================================
*/

/*
API Count
*/

const apiCount:
number | null = 0;

const displayCount =
apiCount ?? 0;

/*
User Name
*/

const userName:
string | undefined =
undefined;

const displayName =
userName ??
"Guest";

/*
Nested API Data
*/

const response = {

  user: {

    profile: {

      email:
        "test@gmail.com"

    }

  }

};

const email =
response.user
?.profile
?.email;

/*
=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

IN OPERATOR

Checks whether a property
exists inside an object.

Example:

"permission" in user

---------------------------------------------------------

OPTIONAL CHAINING

Safely accesses nested
properties that may not exist.

Example:

user?.profile?.email

---------------------------------------------------------

NULLISH COALESCING

Uses a fallback only when
the value is:

null

or

undefined

Example:

value ?? defaultValue

---------------------------------------------------------

LOGICAL OR

Uses a fallback when the
value is falsy.

Example:

value || defaultValue

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Difference between:

?? and ||

---------------------------------------------------------

??

Checks:

null
undefined

---------------------------------------------------------

||

Checks:

0

""

false

null

undefined

NaN

---------------------------------------------------------

Use ??

for API/default values.

Use ||

when any falsy value should
trigger the fallback.

=========================================================
END OF NOTES
=========================================================
*/

export {};