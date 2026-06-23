/*
=========================================================
OBJECT TYPES IN TYPESCRIPT
=========================================================

INDEX

1. What are Object Types?
2. Basic Object Type
3. Required Properties
4. Optional Properties (?)
5. Readonly Properties
6. Index Signatures
7. Record Utility Type
8. Partial Utility Type
9. Record + Partial
10. Real World Examples
11. Interview Definitions

=========================================================
1. WHAT ARE OBJECT TYPES?
=========================================================

Definition:

Object Types define the shape
of an object.

They specify:

✔ Property Names

✔ Property Types

✔ Required Properties

✔ Optional Properties

Example:

type User = {
  id: string;
  name: string;
}

=========================================================
2. BASIC OBJECT TYPE
=========================================================
*/

type User = {
  id: string;
  name: string;
};

/*
Meaning:

Object must contain:

✔ id

✔ name

Both are required.
*/

const userBasic: User = {
  id: "u1",
  name: "Diwakar"
};

/*
=========================================================
3. REQUIRED PROPERTIES
=========================================================

By default every property
is required.
=========================================================
*/

type Employee = {
  id: string;
  name: string;
};

const employee: Employee = {
  id: "e1",
  name: "Rahul"
};

/*
Invalid:

const employee: Employee = {
  id: "e1"
}

Error:

Property 'name' is missing.
*/

/*
=========================================================
4. OPTIONAL PROPERTIES (?)
=========================================================
*/

type UserWithEmail = {
  id: string;
  name: string;
  email?: string;
};

/*
email? means:

Property may exist

OR

Property may not exist

---------------------------------------------------------

Equivalent idea:

email:
string | undefined

BUT

not exactly the same.

email? means property
can be completely absent.
*/

const user1: UserWithEmail = {
  id: "u1",
  name: "Diwakar"
};

const user2: UserWithEmail = {
  id: "u2",
  name: "Bhaskar",
  email: "bhaskar@gmail.com"
};

/*
Both are valid.
*/

/*
=========================================================
OPTIONAL VS REQUIRED
=========================================================

Required:

email: string

Must exist.

---------------------------------------------------------

Optional:

email?: string

May exist.
May be omitted.
*/

/*
=========================================================
5. READONLY PROPERTIES
=========================================================
*/

type UserRecord = {
  id: string;
  name: string;
  readonly createdAt: Date;
};

const userRecord: UserRecord = {
  id: "u1",
  name: "Diwakar",
  createdAt: new Date()
};

/*
Not Allowed:

userRecord.createdAt =
new Date();

Error:

Cannot assign because
it is readonly.
*/

/*
Readonly means:

Can read

Cannot reassign
*/

/*
=========================================================
6. INDEX SIGNATURES
=========================================================
*/

/*
Used when object keys
are dynamic or unknown.
*/

type ScoreMap = {
  [key: string]: number;
};

/*
Meaning:

Any string key

Value must be number
*/

const scores: ScoreMap = {
  math: 95,
  science: 88,
  english: 91
};

/*
Valid:

{
  anything: 10,
  anotherKey: 20
}

As long as values
are numbers.
*/

/*
Invalid:

{
  math: "95"
}

Value must be number.
*/

/*
=========================================================
7. RECORD UTILITY TYPE
=========================================================
*/

/*
Record<KeyType, ValueType>

Creates an object type.
*/

type Count =
Record<
  "Likes" |
  "Views" |
  "Shares",
  number
>;

/*
Equivalent to:

{
  Likes:number;
  Views:number;
  Shares:number;
}
*/

const count1: Count = {
  Likes: 5,
  Views: 100,
  Shares: 20
};

/*
All keys required.
*/

/*
Invalid:

const count1: Count = {
  Likes:5,
  Views:100
}

Missing Shares.
*/

/*
=========================================================
INDEX SIGNATURE VS RECORD
=========================================================

Index Signature

{
  [key:string]:number
}

Keys unknown.

---------------------------------------------------------

Record

Record<
  "Likes" |
  "Views",
  number
>

Keys known beforehand.

=========================================================
8. PARTIAL UTILITY TYPE
=========================================================
*/

/*
Partial<T>

Makes all properties optional.
*/

type Stats =
Record<
  "Likes" |
  "Views" |
  "Shares",
  number
>;

type PartialStats =
Partial<Stats>;

/*
Equivalent:

{
  Likes?:number;
  Views?:number;
  Shares?:number;
}
*/

const stats1:
PartialStats = {};

const stats2:
PartialStats = {
  Likes: 10
};

const stats3:
PartialStats = {
  Likes: 10,
  Views: 20,
  Shares: 30
};

/*
All valid.
*/

/*
=========================================================
9. RECORD + PARTIAL
=========================================================
*/

/*
Likes and Views required.

Shares optional.
*/

type Counts =
Record<
  "Likes" |
  "Views",
  number
>
&
Partial<
  Record<
    "Shares",
    number
  >
>;

const c1: Counts = {
  Likes: 5,
  Views: 5
};

const c2: Counts = {
  Likes: 5,
  Views: 5,
  Shares: 10
};

/*
Both valid.
*/

/*
Expansion:

{
  Likes:number;
  Views:number;
  Shares?:number;
}
*/

/*
=========================================================
10. REAL WORLD EXAMPLES
=========================================================
*/

/*
User Profile
*/

type Profile = {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
};

/*
API Response Counts
*/

type Analytics =
Record<
  "Views" |
  "Likes" |
  "Comments",
  number
>;

/*
Dynamic Settings
*/

type Settings = {
  [key: string]: string;
};

/*
=========================================================
11. INTERVIEW DEFINITIONS
=========================================================

OBJECT TYPE

Defines the structure
of an object.

---------------------------------------------------------

OPTIONAL PROPERTY

email?: string

Property may be absent.

---------------------------------------------------------

READONLY PROPERTY

readonly createdAt: Date

Can read.

Cannot reassign.

---------------------------------------------------------

INDEX SIGNATURE

[key:string]:number

Allows dynamic keys.

---------------------------------------------------------

RECORD

Record<Key, Value>

Creates an object type
with fixed keys.

---------------------------------------------------------

PARTIAL

Partial<T>

Makes all properties
optional.

---------------------------------------------------------

RECORD VS INDEX SIGNATURE

Record

Known keys.

---------------------------------------------------------

Index Signature

Unknown keys.

=========================================================
END OF NOTES
=========================================================
*/

export {};