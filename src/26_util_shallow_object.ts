/*
=========================================================
UTILITY TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What are Utility Types?
2. Why Utility Types?
3. Partial<T>
4. Required<T>
5. Readonly<T>
6. Pick<T, K>
7. Omit<T, K>
8. Record<K, V>
9. Real World Backend Examples
10. Common Mistakes
11. Best Practices
12. Interview Definitions

=========================================================
1. WHAT ARE UTILITY TYPES?
=========================================================

Definition:

Utility Types are built-in generic
types provided by TypeScript.

They help us transform existing
types without rewriting them.

Think of them as ready-made tools.

Instead of writing:

type UpdateUser = {
    name?: string;
    email?: string;
}

We can simply use:

Partial<User>

=========================================================
2. WHY UTILITY TYPES?
=========================================================

Imagine we already have:

type User = {

    id:string;

    name:string;

    email?:string;

    address:Address;

}

Now suppose we need:

✔ Update DTO

✔ Public Response

✔ Readonly Object

✔ Required Object

Instead of creating new types,
Utility Types generate them
automatically.

=========================================================
BASE TYPES
=========================================================
*/

type Address = {

    line1:string;

    city:string;

};

type User = {

    id:string;

    name:string;

    email?:string;

    address:Address;

};

/*
=========================================================
3. PARTIAL<T>
=========================================================

Definition:

Makes every TOP LEVEL property
optional.

Syntax:

Partial<T>

=========================================================
*/

type UserPatch = Partial<User>;

const patch1:UserPatch = {

    name:"Diwakar"

};

const patch2:UserPatch = {

    address:{

        line1:"Road 1",

        city:"Mumbai"

    }

};

/*
Visual

User

↓

{

id

name

email

address

}

↓

Partial<User>

{

id?

name?

email?

address?

}

=========================================================
IMPORTANT
=========================================================

Partial is SHALLOW.

Only first-level properties
become optional.

Example:

address itself becomes optional.

But once address exists:

line1

city

are still required.

This is VALID:

{

address:{
line1:"Road",
city:"Mumbai"
}

}

This is INVALID:

{

address:{
line1:"Road"
}

}

city is missing.

=========================================================
REAL WORLD USE
=========================================================

PATCH API

PATCH /users/:id

Only changed fields
need to be sent.

=========================================================
4. REQUIRED<T>
=========================================================

Definition:

Makes every property required.

Syntax:

Required<T>

=========================================================
*/

type UserRequired =
Required<User>;

const requiredUser:
UserRequired = {

    id:"1",

    name:"Diwakar",

    email:"abc@gmail.com",

    address:{

        line1:"Road",

        city:"Mumbai"

    }

};

/*
Visual

email?

↓

email

=========================================================
REAL WORLD USE
=========================================================

Database Records

After saving into DB,
all required fields
must exist.

=========================================================
5. READONLY<T>
=========================================================

Definition:

Makes every property readonly.

Syntax:

Readonly<T>

=========================================================
*/

type ReadonlyUser =
Readonly<User>;

const readonlyUser:
ReadonlyUser = {

    id:"1",

    name:"Diwakar",

    address:{

        line1:"Road",

        city:"Mumbai"

    }

};

/*
Not Allowed

readonlyUser.name="Rahul";

Error

=========================================================
IMPORTANT
=========================================================

Readonly is also SHALLOW.

Nested objects are NOT readonly.

Example:

readonlyUser.address.city =
"Delhi";

This is allowed.

Reason:

address reference is readonly.

Its internal properties
are not.

=========================================================
REAL WORLD USE
=========================================================

Configuration

Environment Variables

Application Settings

=========================================================
6. PICK<T,K>
=========================================================

Definition:

Keeps only selected properties.

Syntax:

Pick<T,K>

=========================================================
*/

type PublicUser =
Pick<User,

"id"

|

"name"

>;

const publicUser:
PublicUser={

    id:"1",

    name:"Diwakar"

};

/*
Visual

User

↓

id

name

email

address

↓

Pick

↓

id

name

=========================================================
REAL WORLD USE
=========================================================

Public API Response

Never expose:

password

tokens

internal fields

=========================================================
7. OMIT<T,K>
=========================================================

Definition:

Removes selected properties.

Syntax:

Omit<T,K>

=========================================================
*/

type UserWithoutEmail =
Omit<User,

"email"

>;

const userWithoutEmail:
UserWithoutEmail={

    id:"1",

    name:"Diwakar",

    address:{

        line1:"Road",

        city:"Mumbai"

    }

};

/*
Visual

User

↓

id

name

email

address

↓

Remove email

↓

id

name

address

=========================================================
REAL WORLD USE
=========================================================

Hide:

Password

Refresh Token

OTP

Sensitive Fields

=========================================================
8. RECORD<K,V>
=========================================================

Definition:

Creates an object whose keys
are K and values are V.

Syntax:

Record<K,V>

=========================================================
*/

type Role =

"Admin"

|

"User"

|

"Editor";

type RoleDirectory =
Record<Role,User>;

const directory:
RoleDirectory={

Admin:{

id:"1",

name:"Admin",

address:{

line1:"A",

city:"Mumbai"

}

},

User:{

id:"2",

name:"User",

address:{

line1:"B",

city:"Mumbai"

}

},

Editor:{

id:"3",

name:"Editor",

address:{

line1:"C",

city:"Mumbai"

}

}

};

/*
Visual

Role

↓

Admin

User

Editor

↓

Each key maps to

User

=========================================================
REAL WORLD USE
=========================================================

Role Permissions

Country Codes

Currency Maps

Language Maps

=========================================================
9. REAL WORLD BACKEND EXAMPLES
=========================================================

Update DTO

type UpdateUserDto =
Partial<User>;

---------------------------------------------------------

Public Response

type UserResponse =
Pick<User,

"id"

|

"name"

>;

---------------------------------------------------------

Database Entity

type DatabaseUser =
Required<User>;

---------------------------------------------------------

Hide Sensitive Data

type SafeUser =
Omit<User,

"password"

>;

---------------------------------------------------------

Permission Map

Record<Role,string[]>

=========================================================
10. COMMON MISTAKES
=========================================================

❌ Thinking Partial is Deep

Wrong.

Only first level.

---------------------------------------------------------

❌ Thinking Readonly freezes
nested objects.

Wrong.

Readonly is shallow.

---------------------------------------------------------

❌ Using Pick when Omit
is simpler.

Sometimes removing one field
is easier than selecting
twenty.

=========================================================
11. BEST PRACTICES
=========================================================

✔ Partial

For PATCH APIs.

✔ Required

For complete objects.

✔ Readonly

For immutable configuration.

✔ Pick

For API responses.

✔ Omit

For hiding sensitive data.

✔ Record

For fixed key-value maps.

=========================================================
12. INTERVIEW DEFINITIONS
=========================================================

PARTIAL

Makes all top-level
properties optional.

---------------------------------------------------------

REQUIRED

Makes all properties required.

---------------------------------------------------------

READONLY

Makes all properties readonly.

---------------------------------------------------------

PICK

Selects specific properties.

---------------------------------------------------------

OMIT

Removes specific properties.

---------------------------------------------------------

RECORD

Creates an object type with
specific keys and value type.

---------------------------------------------------------

MOST IMPORTANT INTERVIEW QUESTION

Which utility type is used
for PATCH APIs?

Answer:

Partial<T>

Because PATCH updates only
the fields supplied by the client.

=========================================================
SUMMARY
=========================================================

Partial<T>

↓

Everything optional

-----------------------------

Required<T>

↓

Everything required

-----------------------------

Readonly<T>

↓

Cannot reassign properties

-----------------------------

Pick<T,K>

↓

Keep selected properties

-----------------------------

Omit<T,K>

↓

Remove selected properties

-----------------------------

Record<K,V>

↓

Fixed keys with one value type

=========================================================
END OF NOTES
=========================================================*/

export{}