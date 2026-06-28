/*
=========================================================
STATIC MEMBERS
=========================================================

INDEX

1. What are Static Members?
2. Why Do We Need Static Members?
3. Instance Members vs Static Members
4. Static Properties
5. Static Methods
6. Accessing Static Members
7. Static Members Inside Objects
8. Static this Keyword
9. Static Readonly Members
10. Private Static Members
11. Static Initialization Block
12. Utility Classes
13. Static Factory Methods
14. Real World Backend Examples
15. Common Mistakes
16. Best Practices
17. Interview Definitions

=========================================================
1. WHAT ARE STATIC MEMBERS?
=========================================================

Normally every object has its own
copy of properties and methods.

Example

class User{

    name:string;

}

const user1 = new User();

const user2 = new User();

Both objects have their own

name

property.

---------------------------------------------------------

Sometimes we don't want every object
to have its own copy.

Instead,

we want ONE property

or

ONE method

that belongs to the class itself.

These are called

Static Members.

=========================================================
Definition
=========================================================

A Static Member belongs to the class
instead of an object.

It is shared by every object.

=========================================================
Syntax
=========================================================

class ClassName{

    static propertyName = value;

    static methodName(){}

}

Access

ClassName.propertyName

ClassName.methodName()

NOT

object.propertyName

=========================================================
2. WHY DO WE NEED STATIC MEMBERS?
=========================================================

Suppose a company creates
10,000 users.

Without static members

Every object stores

companyName

individually.

Example

User 1

companyName = OpenAI

----------------------------

User 2

companyName = OpenAI

----------------------------

User 3

companyName = OpenAI

...

The same value is stored
thousands of times.

This wastes memory.

Instead,

store it once

inside the class.

=========================================================
Visualization
=========================================================

Without Static

User1

↓

companyName

↓

OpenAI

----------------------------

User2

↓

companyName

↓

OpenAI

----------------------------

User3

↓

companyName

↓

OpenAI

=========================================================

With Static

User Class

↓

companyName

↓

OpenAI

↓

Shared by all objects

=========================================================
3. INSTANCE MEMBERS VS STATIC MEMBERS
=========================================================

Instance Members

✔ Belong to objects

✔ Created every time an object
is created

✔ Accessed using object

Example

user.name

---------------------------------------------------------

Static Members

✔ Belong to class

✔ Only one copy exists

✔ Accessed using class

Example

User.company

=========================================================
4. STATIC PROPERTIES
=========================================================
*/

class User {

    static company = "OpenAI";

    name: string;

    constructor(name: string) {

        this.name = name;

    }

}

const user1 = new User("Diwakar");

const user2 = new User("Rahul");

console.log(User.company);

console.log(user1.name);

console.log(user2.name);

/*

Output

OpenAI

Diwakar

Rahul

---------------------------------------------------------

Notice

company

belongs to

User

NOT

user1

or

user2

=========================================================
Invalid
=========================================================

user1.company

❌ Error

Reason

Static properties belong to
the class,

not the object.

=========================================================
Another Example
=========================================================
*/

class EmployeeExample {

    static company = "Google";

    constructor(

        public name: string

    ) { }

}

const emp1 = new EmployeeExample("A");

const emp2 = new EmployeeExample("B");

console.log(EmployeeExample.company);

/*
Both employees use the same

company

value.

=========================================================
5. STATIC METHODS
=========================================================

Static methods are methods
that belong to the class.

They can be called without
creating an object.

=========================================================
Example
=========================================================
*/

class MathUtil {

    static add(

        a: number,

        b: number

    ) {

        return a + b;

    }

    static subtract(

        a: number,

        b: number

    ) {

        return a - b;

    }

}

console.log(

    MathUtil.add(10, 20)

);

console.log(

    MathUtil.subtract(30, 5)

);

/*
Notice

No object was created.

We directly used

MathUtil.add()

---------------------------------------------------------

This is exactly how

Math

works in JavaScript.

Example

Math.max()

Math.min()

Math.floor()

Math.random()

All of them are

Static Methods.

=========================================================
6. ACCESSING STATIC MEMBERS
=========================================================

Correct

ClassName.property

ClassName.method()

=========================================================
Example
=========================================================
*/

class AppConfig  {

    static appName = "Ticket Booking";

    static version() {

        return "1.0.0";

    }

}

console.log(

    AppConfig.appName

);

console.log(

    AppConfig.version()

);

/*
Wrong

const config = new AppConfig();

config.appName

❌ Error

config.version()

❌ Error

Reason

Static members belong
to the class,

not objects.

=========================================================
Why?
=========================================================

Imagine a library.

Instance Members

↓

Each student gets
their own notebook.

---------------------------------------------------------

Static Members

↓

The library has one rule book.

Every student reads
the same rule book.

No copies are created.

Static members behave
exactly like the rule book.

=========================================================
7. STATIC MEMBERS INSIDE OBJECTS
=========================================================
*/

class Counter {

    static totalUsers = 0;

    constructor() {

        Counter.totalUsers++;

    }

}

new Counter();

new Counter();

new Counter();

console.log(

    Counter.totalUsers

);

/*
Output

3

---------------------------------------------------------

How?

Initially

0

↓

Object 1

1

↓

Object 2

2

↓

Object 3

3

Only ONE variable exists.

Every object updates
the same variable.
*/

/*
=========================================================
8. STATIC this KEYWORD
=========================================================

Inside a static method,

this

refers to the class itself,

NOT an object.

=========================================================
Example
=========================================================
*/

class Company {

    static companyName = "OpenAI";

    static printCompany() {

        console.log(this.companyName);

    }

}

Company.printCompany();

/*
Output

OpenAI

---------------------------------------------------------

What does

this

refer to?

↓

Company

Therefore

this.companyName

↓

Company.companyName

=========================================================
Comparison
=========================================================

Inside Instance Method

this

↓

Current Object

---------------------------------------------------------

Inside Static Method

this

↓

Current Class

=========================================================
Example
=========================================================
*/

class Student {

    static school = "ABC School";

    name: string;

    constructor(name: string) {

        this.name = name;

    }

    printStudent() {

        console.log(this.name);

    }

    static printSchool() {

        console.log(this.school);
    }

}

const student = new Student("Diwakar");

student.printStudent();

Student.printSchool();

/*
=========================================================
IMPORTANT RULE
=========================================================

A static method CANNOT directly
access instance members.

Reason

Instance members belong to objects.

Static methods belong to the class.

=========================================================
Wrong Example
=========================================================
*/

class UserExample {

    name = "Diwakar";

    static print() {

        // console.log(this.name);

    }

}

/*
Why Error?

There is no object.

Therefore

name

does not exist.

=========================================================
Correct Way
=========================================================
*/

class UserCorrect {

    name = "Diwakar";

    static print(user: UserCorrect) {

        console.log(user.name);

    }

}

const u = new UserCorrect();

UserCorrect.print(u);

/*
=========================================================
9. STATIC READONLY MEMBERS
=========================================================

Sometimes a static value should
never change.

For that,

we use

static readonly

=========================================================
Syntax
=========================================================

static readonly property = value;

=========================================================
Example
=========================================================
*/

class App {

    static readonly APP_NAME = "Metro Ticket";

    static readonly VERSION = "1.0.0";

}

console.log(App.APP_NAME);

console.log(App.VERSION);

/*

App.APP_NAME = "Bus App";

❌ Error

Reason

readonly properties cannot
be modified.

=========================================================
Real Examples
=========================================================

✔ API Version

✔ Application Name

✔ Environment Name

✔ Default Timeout

✔ Database Name

=========================================================
10. PRIVATE STATIC MEMBERS
=========================================================

Sometimes we need a value that

✔ belongs to the class

✔ should not be accessed outside

We use

private static

=========================================================
Example
=========================================================
*/

class Database {

    private static connectionCount = 0;

    static connect() {

        Database.connectionCount++;

        console.log("Connected");

    }

    static getConnectionCount() {

        return Database.connectionCount;

    }

}

Database.connect();

Database.connect();

Database.connect();

console.log(

    Database.getConnectionCount()

);

/*

Output

Connected

Connected

Connected

3

---------------------------------------------------------

Invalid

Database.connectionCount

❌ Error

Reason

connectionCount

is private.

=========================================================
11. STATIC INITIALIZATION BLOCK
=========================================================

ES2022 introduced

Static Initialization Blocks.

These blocks execute

ONLY ONCE

when the class is loaded.

Syntax

static{

}

=========================================================
Example
=========================================================
*/

class Config {

    static appName: string;

    static version: string;

    static {

        Config.appName = "Ticket Booking";

        Config.version = "2.0.0";

        console.log("Static Block Executed");

    }

}

console.log(Config.appName);

console.log(Config.version);

/*
Output

Static Block Executed

Ticket Booking

2.0.0

---------------------------------------------------------

Notice

The block executes only once,

no matter how many objects
are created.

=========================================================
Execution Order
=========================================================

Class Loaded

↓

Static Properties Created

↓

Static Block Executes

↓

Objects Can Be Created

=========================================================
12. UTILITY CLASSES
=========================================================

A Utility Class is a class that
contains only static methods.

Objects are never created.

=========================================================
Example
=========================================================
*/

class StringUtil {

    static capitalize(value: string) {

        return value.charAt(0).toUpperCase() +
            value.slice(1);

    }

    static reverse(value: string) {

        return value
            .split("")
            .reverse()
            .join("");

    }

}

console.log(

    StringUtil.capitalize("diwakar")

);

console.log(

    StringUtil.reverse("TypeScript")

);

/*
Why?

No state is stored.

No object required.

Everything is reusable.

=========================================================
13. STATIC FACTORY METHODS
=========================================================

Factory Methods create
objects for us.

Instead of calling

new

everywhere,

we expose a static method.

=========================================================
Example
=========================================================
*/

class Employee {

    constructor(

        public id: number,

        public name: string

    ) { }

    static createAdmin() {

        return new Employee(

            1,

            "Administrator"

        );

    }

    static createGuest() {

        return new Employee(

            0,

            "Guest"

        );

    }

}

const admin = Employee.createAdmin();

const guest = Employee.createGuest();

console.log(admin);

console.log(guest);

/*
Benefits

✔ Cleaner API

✔ Centralized Object Creation

✔ Easier Validation

✔ Common Design Pattern

=========================================================
14. REAL WORLD BACKEND EXAMPLES
=========================================================

Example 1

Application Configuration
=========================================================
*/

class Environment {

    static readonly PORT = 3000;

    static readonly DB_NAME = "metro";

    static readonly JWT_SECRET = "secret";

}

console.log(Environment.PORT);

/*
Instead of creating

new Environment()

we directly access

Environment.PORT

---------------------------------------------------------

Example 2

Database Connection Counter
=========================================================
*/

class ConnectionPool {

    static totalConnections = 0;

    static connect() {

        ConnectionPool.totalConnections++;

    }

}

ConnectionPool.connect();

ConnectionPool.connect();

console.log(

    ConnectionPool.totalConnections

);

/*
Useful for

✔ Monitoring

✔ Analytics

✔ Logging

=========================================================
*/

/*
=========================================================
15. COMMON MISTAKES
=========================================================

Mistake 1

Trying to access a static member
using an object.

Example

class User{

   static company = "OpenAI";

}

const user = new User();

user.company;

❌ Error

---------------------------------------------------------

Correct

User.company

=========================================================

Mistake 2

Trying to access an instance
property inside a static method.

Example

class Employee{

   name = "Diwakar";

   static print(){

       console.log(this.name);

   }

}

❌ Error

Reason

this

inside a static method

↓

Class

NOT

Object

Therefore,

instance properties
cannot be accessed directly.

---------------------------------------------------------

Correct

class Employee{

   name = "Diwakar";

   static print(employee:Employee){

       console.log(employee.name);

   }

}

=========================================================

Mistake 3

Trying to access a static property
using

this

inside an instance method.

Example

class App{

   static version = "1.0";

   print(){

       // console.log(this.version);

   }

}

❌ Error

Reason

this

inside an instance method

↓

Current Object

version

belongs to

Class

---------------------------------------------------------

Correct

class App{

   static version = "1.0";

   print(){

       console.log(App.version);

   }

}

=========================================================

Mistake 4

Thinking every object has its own
copy of a static property.

Example

class Counter{

   static count = 0;

}

Every object shares

ONE

count variable.

Objects do NOT get separate copies.

=========================================================

Mistake 5

Trying to override static members
using objects.

Example

class User{

   static company = "Google";

}

const user = new User();

// user.company = "Microsoft";

❌ Invalid

Reason

Static members belong to
the class.

=========================================================

Mistake 6

Creating objects for utility classes.

Example

class MathUtil{

   static add(a:number,b:number){

       return a+b;

   }

}

Wrong

const math = new MathUtil();

math.add(10,20);

❌ Error

---------------------------------------------------------

Correct

MathUtil.add(10,20);

=========================================================

Mistake 7

Using static when every object
needs its own value.

Wrong

class Employee{

   static salary = 50000;

}

Now every employee shares
the same salary.

Usually

salary

should be an

instance property.

=========================================================
16. BEST PRACTICES
=========================================================

✔ Use static for values shared by
every object.

Examples

Application Name

Company Name

Tax Percentage

Configuration

API Version

JWT Expiry

---------------------------------------------------------

✔ Use static methods for helper
functions.

Examples

Math

Date

String Utilities

Validators

Converters

Formatters

---------------------------------------------------------

✔ Use static readonly for constants.

Example

class Config{

   static readonly PORT = 3000;

}

---------------------------------------------------------

✔ Keep utility classes stateless.

A utility class should usually
contain only static methods.

---------------------------------------------------------

✔ Prefer Factory Methods when
object creation logic becomes
complex.

Example

User.createAdmin()

User.createGuest()

instead of repeatedly calling

new User(...)

---------------------------------------------------------

✔ Do not overuse static.

Ask yourself

"Is this value shared by every object?"

If

YES

↓

Use static.

If

NO

↓

Use an instance property.

---------------------------------------------------------

✔ Keep business data inside
objects.

Keep application-wide settings
inside static members.

=========================================================
17. INTERVIEW DEFINITIONS
=========================================================

What is a Static Member?

Answer

A Static Member is a property
or method that belongs to the
class itself rather than its
instances.

---------------------------------------------------------

What is a Static Property?

Answer

A property shared by all
instances of a class.

Only one copy exists.

---------------------------------------------------------

What is a Static Method?

Answer

A method that belongs to the
class and can be called without
creating an object.

---------------------------------------------------------

Can a static method access
instance properties?

Answer

No.

A static method belongs to the
class,

while instance properties belong
to objects.

A static method must receive an
object if it needs instance data.

---------------------------------------------------------

Can an instance method access
static members?

Answer

Yes.

By using the class name.

Example

class App{

   static version = "2.0";

   print(){

       console.log(App.version);

   }

}

---------------------------------------------------------

What is

static readonly

?

Answer

A constant that belongs to the
class and cannot be modified.

---------------------------------------------------------

When should we use static?

Answer

Whenever data or behavior is
common to every object.

Examples

✔ Configurations

✔ Constants

✔ Utility Methods

✔ Factory Methods

✔ Counters

✔ Shared Cache

✔ Singleton Helpers

=========================================================
STATIC VS INSTANCE
=========================================================

Instance Member

↓

Belongs to Object

↓

Every object has its own copy

↓

Access

object.property

=========================================================

Static Member

↓

Belongs to Class

↓

Only one copy exists

↓

Access

Class.property

=========================================================
REAL WORLD EXAMPLES
=========================================================

JavaScript Examples

Math.max()

Math.min()

Math.floor()

Math.random()

Date.now()

Number.isInteger()

Object.keys()

Object.values()

Array.isArray()

Notice

All of these are called directly
using the class/object constructor,

not by creating an instance.

=========================================================
ANALOGY
=========================================================

Imagine a school.

Every student has

✔ Name

✔ Roll Number

✔ Marks

These belong to each student.

↓

Instance Members

---------------------------------------------------------

The school itself has

✔ School Name

✔ Principal

✔ Address

✔ Rules

Every student shares these.

↓

Static Members

---------------------------------------------------------

Student

↓

Name

Roll Number

Marks

(Individual)

=========================================================

School

↓

School Name

Principal

Rules

(Shared)

=========================================================

Think of it like this:

Instance Members

↓

"Belong to ME"

---------------------------------------------------------

Static Members

↓

"Belong to ALL OF US"

=========================================================
SUMMARY
=========================================================

✔ Static Members belong to the class.

✔ Instance Members belong to objects.

✔ Access static members using
the class name.

✔ Static methods do not require
an object.

✔ Static methods cannot directly
access instance members.

✔ Use static readonly for constants.

✔ Utility classes usually contain
only static methods.

✔ Factory methods are commonly
implemented as static methods.

✔ Static Initialization Blocks
run only once when the class is
loaded.

=========================================================
END OF NOTES
=========================================================
*/

export { };