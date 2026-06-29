/*
=========================================================
MAPPED TYPES
=========================================================

INDEX

1. What are Mapped Types?
2. Why Do We Need Mapped Types?
3. Problem Without Mapped Types
4. Basic Mapped Type Syntax
5. keyof with Mapped Types
6. Mapping Properties
7. Readonly Mapped Types
8. Optional Mapped Types
9. Removing readonly (-readonly)
10. Removing Optional (-?)
11. Key Remapping (as)
12. Mapping with Generics
13. Real World Backend Examples
14. Common Mistakes
15. Best Practices
16. Interview Definitions

=========================================================
1. WHAT ARE MAPPED TYPES?
=========================================================

Mapped Types are one of the
most powerful features of
TypeScript.

They allow us to create
new object types by
transforming existing types.

Instead of manually writing
new types,

TypeScript creates them
automatically.

=========================================================
Definition
=========================================================

A Mapped Type iterates over
every property of another type
and produces a new type.

Think of it as

Array.map()

but for object properties.

=========================================================
Visualization
=========================================================

User

↓

id

name

email

↓

Mapped Type

↓

Transforms Every Property

↓

New Type

=========================================================
2. WHY DO WE NEED MAPPED TYPES?
=========================================================

Imagine a User type.

*/

type UserEx={

    id:number;

    name:string;

    email:string;

};

/*
Now suppose we need

Readonly User

Optional User

Nullable User

Required User

Without Mapped Types

we must rewrite

id

name

email

again and again.

=========================================================

Example

type ReadonlyUser={

    readonly id:number;

    readonly name:string;

    readonly email:string;

}

---------------------------------------------------------

Now imagine

100 properties.

This becomes difficult to
maintain.

Mapped Types solve this.

=========================================================
Benefits
=========================================================

✔ No Duplicate Code

✔ Easier Maintenance

✔ Automatic Updates

✔ Better Reusability

✔ Used internally by

Partial

Readonly

Required

Record

Pick

=========================================================
3. PROBLEM WITHOUT MAPPED TYPES
=========================================================

Suppose our type changes.

*/

type ProductEx={

    id:number;

    name:string;

    price:number;

};

/*

Later we add

category:string

Now every manually created type
must also be updated.

↓

High Maintenance

↓

More Bugs

Mapped Types automatically
stay in sync.

=========================================================
4. BASIC MAPPED TYPE SYNTAX
=========================================================

Syntax

type NewType<T>={

    [K in keyof T]:T[K];

}

=========================================================

Breakdown

K

↓

Current Property

---------------------------------------------------------

keyof T

↓

All Keys

---------------------------------------------------------

T[K]

↓

Property Type

=========================================================
Visualization
=========================================================

User

{

id

name

email

}

↓

keyof User

↓

"id"

|

"name"

|

"email"

↓

Loop

↓

K = "id"

↓

K = "name"

↓

K = "email"

↓

Create New Object Type

=========================================================
5. KEYOF WITH MAPPED TYPES
=========================================================

Mapped Types almost always
use

keyof.

=========================================================
Example
=========================================================
*/

type Employee={

    id:number;

    name:string;

    salary:number;

};

type EmployeeCopy={

    [K in keyof Employee]:

    Employee[K];

};

/*
TypeScript does

K

↓

"id"

↓

number

----------------------------

K

↓

"name"

↓

string

----------------------------

K

↓

"salary"

↓

number

=========================================================

Final Type

type EmployeeCopy={

    id:number;

    name:string;

    salary:number;

}

Automatically generated.

=========================================================
6. MAPPING PROPERTIES
=========================================================

We can transform every property.

=========================================================
Example
=========================================================
*/

type ReadonlyEmployee={

    readonly
    [K in keyof Employee]:

    Employee[K];

};

/*
Generated Type

{

readonly id:number;

readonly name:string;

readonly salary:number;

}

=========================================================
Example
=========================================================
*/

const employeeEx:ReadonlyEmployee={

    id:1,

    name:"Diwakar",

    salary:90000

};

// employee.salary = 100000;

/*
❌ Error

Reason

All properties became

readonly

=========================================================
Another Example
=========================================================
*/

type StringEmployee={

    [K in keyof Employee]:

    string;

};

/*
Result

{

id:string;

name:string;

salary:string;

}

Notice

Original types

↓

Ignored

Every property became

string

=========================================================
7. READONLY MAPPED TYPES
=========================================================

Mapped Types can add

readonly

to every property.

=========================================================
Syntax
=========================================================

type ReadonlyType<T>={

    readonly

    [K in keyof T]:

    T[K];

}

=========================================================
Example
=========================================================
*/

type UserReadonly={

    readonly

    [K in keyof User]:

    User[K];

};

const readonlyUser:UserReadonly={

    id:1,

    name:"Diwakar",

    // email:"abc@gmail.com"

};

// readonlyUser.name = "Rahul";

/*
❌ Error

Reason

Every property became
readonly.

=========================================================
Comparison
=========================================================

Before

{

id:number;

name:string;

}

↓

After

{

readonly id:number;

readonly name:string;

}

=========================================================
8. OPTIONAL MAPPED TYPES
=========================================================

Mapped Types can also make
every property optional.

=========================================================
Syntax
=========================================================

type Optional<T>={

    [K in keyof T]?:

    T[K];

}

=========================================================
Example
=========================================================
*/

type OptionalUser={

    [K in keyof User]?:

    User[K];

};

const user1:OptionalUser={

};

const user2:OptionalUser={

    name:"Diwakar"

};

const user3:OptionalUser={

    // email:"abc@gmail.com"

};

/*
Generated Type

{

id?:number;

name?:string;

email?:string;

}

Notice

Every property became

optional


*/

/*
=========================================================
9. REMOVING readonly (-readonly)
=========================================================

Sometimes we receive a type where
every property is

readonly

but we want to make all of them
mutable again.

Mapped Types allow us to remove
modifiers using

-

operator.

=========================================================
Syntax
=========================================================

type Mutable<T>={

    -readonly

    [K in keyof T]:

    T[K];

}

=========================================================
Example
=========================================================
*/

type ReadonlyUser={

    readonly id:number;

    readonly name:string;

    readonly email:string;

};

type MutableUser={

    -readonly

    [K in keyof ReadonlyUser]:

    ReadonlyUser[K];

};

const mutableUser:MutableUser={

    id:1,

    name:"Diwakar",

    email:"abc@gmail.com"

};

mutableUser.name="Rahul";

console.log(mutableUser);

/*
Notice

Before

↓

readonly id

readonly name

readonly email

---------------------------------------------------------

After

↓

id

name

email

All properties become writable.

=========================================================
10. REMOVING OPTIONAL (-?)
=========================================================

We can also remove

?

from every property.

=========================================================
Syntax
=========================================================

type RequiredType<T>={

    [K in keyof T]-?:

    T[K];

}

=========================================================
Example
=========================================================
*/

type OptionalEmployee={

    id?:number;

    name?:string;

    salary?:number;

};

type RequiredEmployee={

    [K in keyof OptionalEmployee]-?:

    OptionalEmployee[K];

};

const employee:RequiredEmployee={

    id:1,

    name:"Diwakar",

    salary:90000

};

/*
Wrong

const employee2:RequiredEmployee={

    id:1

}

❌ Error

Reason

Every property became required.

=========================================================
Visualization
=========================================================

Before

↓

id?

name?

salary?

---------------------------------------------------------

After

↓

id

name

salary

=========================================================
11. KEY REMAPPING (as)
=========================================================

TypeScript 4.1 introduced

Key Remapping.

It allows us to rename keys
while creating a new type.

=========================================================
Syntax
=========================================================

type NewType<T>={

    [K in keyof T as NewKey]:

    T[K];

}

=========================================================
Example
=========================================================
*/

type User={

    id:number;

    name:string;

};

type PrefixedUser={

    [K in keyof User
    as `user_${K}`]:

    User[K];

};

/*
Generated Type

{

user_id:number;

user_name:string;

}

=========================================================
Visualization
=========================================================

id

↓

user_id

---------------------------------------------------------

name

↓

user_name

=========================================================
Another Example
=========================================================
*/

type ApiFields={

    firstName:string;

    lastName:string;

};

type UpperCaseKeys={

    [K in keyof ApiFields
    as Uppercase<string & K>]:

    ApiFields[K];

};

/*
Generated Type

{

FIRSTNAME:string;

LASTNAME:string;

}

Notice

Uppercase<>

is another utility type that
transforms strings.

=========================================================
12. MAPPING WITH GENERICS
=========================================================

Mapped Types become extremely
powerful when combined with
Generics.

=========================================================
Example
=========================================================
*/

type Nullable<T>={

    [K in keyof T]:

    T[K] | null;

};

type Product={

    id:number;

    name:string;

    price:number;

};

type NullableProduct=
Nullable<Product>;

const product:NullableProduct={

    id:1,

    name:null,

    price:500

};

/*
Generated Type

{

id:number | null;

name:string | null;

price:number | null;

}

=========================================================
Another Example
=========================================================
*/

type BooleanFields<T>={

    [K in keyof T]:

    boolean;

};

type UserPermissions=
BooleanFields<User>;

const permissions:UserPermissions={

    id:true,

    name:false

};

/*
Notice

Every property became

boolean

=========================================================
13. REAL WORLD BACKEND EXAMPLES
=========================================================

Example 1

Update DTO

=========================================================
*/

type UserEntity={

    id:number;

    name:string;

    email:string;

};

type UpdateUserDto={

    [K in keyof UserEntity]?:

    UserEntity[K];

};

const updateUser:UpdateUserDto={

    email:"new@gmail.com"

};

/*
Useful in

PATCH

APIs

because only changed fields
need to be sent.

=========================================================
Example 2

Database Response

=========================================================
*/

type NullableDatabase<T>={

    [K in keyof T]:

    T[K] | null;

};

type DbUser=
NullableDatabase<UserEntity>;

const dbUser:DbUser={

    id:1,

    name:null,

    email:"abc@gmail.com"

};

/*
Useful when

database columns

allow

NULL

=========================================================
Example 3

Permission System

=========================================================
*/

type Permissions<T>={

    [K in keyof T]:

    boolean;

};

type UserPermissionsMap=
Permissions<UserEntity>;

const userPermissions:
UserPermissionsMap={

    id:true,

    name:true,

    email:false

};

/*
Every field now stores

permission

instead of actual value.

*/

/*
=========================================================
14. COMMON MISTAKES
=========================================================

Mistake 1

Forgetting

keyof

=========================================================

Wrong

type Copy<T>={

    [K in T]:T[K];

}

❌ Error

Reason

Mapped Types iterate over

keys,

not objects.

---------------------------------------------------------
Correct
---------------------------------------------------------
*/

type Copy<T>={

    [K in keyof T]:T[K];

};

/*
=========================================================
Mistake 2

Using

string

instead of

T[K]

=========================================================

Wrong

type Copy<T>={

    [K in keyof T]:string;

}

Reason

Every property becomes

string

even if the original
type was different.

---------------------------------------------------------
Correct
---------------------------------------------------------
*/

type CopyCorrect<T>={

    [K in keyof T]:T[K];

};

/*
=========================================================
Mistake 3

Using Mapped Types
on primitive types.
=========================================================

Wrong

type Test=Readonly<number>;

❌ Not Useful

Reason

Mapped Types work with

object properties,

not primitive values.

---------------------------------------------------------
Correct
---------------------------------------------------------

type User={

    id:number;

    name:string;

}

type ReadonlyUser=
Readonly<User>;

=========================================================
Mistake 4

Forgetting

Generic Constraints

=========================================================

Wrong

type Values<T>={

    [K in keyof T]:

    T[K];

}

This works,

but if

T

is not an object,

it becomes meaningless.

---------------------------------------------------------
Better

type Values<T extends object>={

    [K in keyof T]:

    T[K];

}

=========================================================
Mistake 5

Confusing

Mapped Types

with

Index Signatures

=========================================================

Index Signature

{

[key:string]:number;

}

↓

Unknown Keys

=========================================================

Mapped Type

{

[K in keyof User]:

User[K];

}

↓

Known Keys

=========================================================
Visualization
=========================================================

Index Signature

↓

Any Key

↓

age

salary

city

anything...

---------------------------------------------------------

Mapped Type

↓

Only Existing Keys

↓

id

name

email

=========================================================
Mistake 6

Thinking Mapped Types
modify the original type.
=========================================================

Wrong

type User={

    id:number;

    name:string;

}

type ReadonlyUser={

    readonly

    [K in keyof User]:

    User[K];

}

User

does NOT become readonly.

Only

ReadonlyUser

is readonly.

=========================================================
15. BEST PRACTICES
=========================================================

✔ Use Mapped Types whenever
multiple object properties
need the same transformation.

---------------------------------------------------------

✔ Combine Mapped Types
with Generics.

Example

type Nullable<T>={

    [K in keyof T]:

    T[K] | null;

}

---------------------------------------------------------

✔ Prefer Utility Types
when they already exist.

Instead of

type Optional<T>={

    [K in keyof T]?:

    T[K];

}

Use

Partial<T>

---------------------------------------------------------

Instead of

type ReadonlyType<T>={

    readonly

    [K in keyof T]:

    T[K];

}

Use

Readonly<T>

---------------------------------------------------------

✔ Use Key Remapping
to create API-specific DTOs.

Example

user_id

user_name

user_email

---------------------------------------------------------

✔ Keep transformations simple.

Each Mapped Type should perform
one transformation.

Examples

Readonly

Optional

Nullable

Boolean

Required

=========================================================
16. INTERVIEW DEFINITIONS
=========================================================

What is a Mapped Type?

Answer

A Mapped Type creates a new
object type by transforming
every property of another type.

---------------------------------------------------------

Which keyword is commonly used?

Answer

keyof

---------------------------------------------------------

Why are Mapped Types useful?

Answer

They reduce duplicate code
and automatically stay in sync
with the original type.

---------------------------------------------------------

What does

[K in keyof T]

mean?

Answer

For every key

K

inside

T,

create a property
with the same key.

---------------------------------------------------------

What does

T[K]

mean?

Answer

The type of property

K

inside

T.

---------------------------------------------------------

Can Mapped Types
rename keys?

Answer

Yes.

Using

as

Example

type Prefix<T>={

    [K in keyof T
    as `user_${K}`]:

    T[K];

}

---------------------------------------------------------

Which built-in Utility Types
are based on Mapped Types?

Answer

✔ Partial

✔ Required

✔ Readonly

✔ Pick

✔ Record

✔ Omit
(Omit internally combines
Mapped Types with Exclude)

=========================================================
REAL WORLD SCENARIOS
=========================================================

Backend DTO

↓

UpdateUserDto

↓

Every property optional

---------------------------------------------------------

API Response

↓

Readonly<User>

↓

Prevent accidental mutation

---------------------------------------------------------

Permission System

↓

Permissions<User>

↓

Every field becomes boolean

---------------------------------------------------------

Database Layer

↓

Nullable<User>

↓

Columns can store NULL

---------------------------------------------------------

Form Validation

↓

Errors<User>

↓

Every field maps to
an error message.

=========================================================
VISUAL SUMMARY
=========================================================

Original Type

{

id:number;

name:string;

email:string;

}

↓

Mapped Type

[K in keyof User]

↓

Loop

↓

id

↓

name

↓

email

↓

Transformation

↓

readonly

optional

nullable

boolean

required

↓

New Type

=========================================================
ANALOGY
=========================================================

Imagine a printing machine.

Original Document

↓

Employee ID

Employee Name

Employee Email

---------------------------------------------------------

The machine can produce

↓

A laminated copy

(Readonly)

---------------------------------------------------------

A draft copy

(Optional)

---------------------------------------------------------

A translated copy

(String)

---------------------------------------------------------

A permission sheet

(Boolean)

The original document
never changes.

Only the generated copy changes.

Mapped Types work exactly
the same way.

=========================================================
SUMMARY
=========================================================

✔ Mapped Types transform
existing object types.

✔ They iterate using

keyof.

✔

T[K]

preserves the original
property type.

✔ They reduce duplicate code.

✔ They power built-in Utility Types.

✔ They work perfectly with
Generics.

✔ Key Remapping allows
renaming properties.

✔ They are heavily used
in enterprise TypeScript
applications.

=========================================================
END OF NOTES
=========================================================
*/

export {};