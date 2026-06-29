/*
=========================================================
GENERIC CLASSES
=========================================================

INDEX

1. What are Generic Classes?
2. Why Do We Need Generic Classes?
3. Generic Class Syntax
4. Creating a Generic Class
5. Generic Properties
6. Generic Methods
7. Multiple Generic Types
8. Generic Constraints
9. Generic Classes with Interfaces
10. Generic Classes with Inheritance
11. Real World Backend Examples
12. Common Mistakes
13. Best Practices
14. Interview Definitions

=========================================================
1. WHAT ARE GENERIC CLASSES?
=========================================================

A Generic Class is a class that
works with different data types
without rewriting the class.

Instead of creating

UserStorage

ProductStorage

OrderStorage

we create

Storage<T>

and use it for everything.

=========================================================
Definition
=========================================================

A Generic Class is a class that
accepts one or more type
parameters.

The actual type is supplied
when an object is created.

=========================================================
Visualization
=========================================================

Storage<T>

↓

T = User

↓

Storage<User>

----------------------------

Storage<T>

↓

T = Product

↓

Storage<Product>

----------------------------

Storage<T>

↓

T = Order

↓

Storage<Order>

=========================================================
2. WHY DO WE NEED GENERIC CLASSES?
=========================================================

Without Generics

class UserStorage{

}

class ProductStorage{

}

class OrderStorage{

}

Three different classes.

Lots of duplicated code.

=========================================================

With Generics

class Storage<T>{

}

Storage<User>

Storage<Product>

Storage<Order>

One class

Multiple data types.

=========================================================
Benefits
=========================================================

✔ Reusable

✔ Type Safe

✔ Less Code

✔ Better Maintenance

✔ Better Scalability

=========================================================
3. GENERIC CLASS SYNTAX
=========================================================

Syntax

class ClassName<T>{

}

---------------------------------------------------------

Multiple Types

class Pair<T,U>{

}

---------------------------------------------------------

Constraint

class Repository<T extends Base>{

}

=========================================================
4. CREATING A GENERIC CLASS
=========================================================
*/

class Storage<T>{

    private item:T;

    constructor(item:T){

        this.item = item;

    }

    getItem():T{

        return this.item;

    }

}

const numberStorage =
new Storage<number>(100);

console.log(

    numberStorage.getItem()

);

const stringStorage =
new Storage<string>("TypeScript");

console.log(

    stringStorage.getItem()

);

/*
Type Inference

Storage<number>

↓

T

↓

number

↓

item

↓

number

↓

getItem()

↓

number

=========================================================
Another Example
=========================================================
*/

const booleanStorage =
new Storage<boolean>(true);

console.log(

    booleanStorage.getItem()

);

/*
Notice

Same class

Different types.

=========================================================
5. GENERIC PROPERTIES
=========================================================

Generic Classes can have
generic properties.

=========================================================
Example
=========================================================
*/

class Box<T>{

    value:T;

    constructor(value:T){

        this.value = value;

    }

}

const numberBox =
new Box<number>(500);

console.log(numberBox.value);

const userBox =
new Box<{

    id:number;

    name:string;

}>({

    id:1,

    name:"Diwakar"

});

console.log(userBox.value);

/*
Visualization

Box<T>

↓

value:T

----------------------------

Box<number>

↓

value:number

----------------------------

Box<User>

↓

value:User

=========================================================
6. GENERIC METHODS
=========================================================

Methods can also use the
generic type.

=========================================================
Example
=========================================================
*/

class DataHolder<T>{

    constructor(

        private data:T

    ){}

    getData():T{

        return this.data;

    }

    setData(data:T){

        this.data = data;

    }

}

const holder =
new DataHolder<string>("Hello");

console.log(

    holder.getData()

);

holder.setData("World");

console.log(

    holder.getData()

);

/*
Type Safety

holder.setData(100)

❌ Error

Reason

Holder accepts

string

only.

=========================================================
7. MULTIPLE GENERIC TYPES
=========================================================

Sometimes one generic
is not enough.

=========================================================
Syntax
=========================================================

class Pair<T,U>{

}

=========================================================
Example
=========================================================
*/

class Pair<T,U>{

    constructor(

        public first:T,

        public second:U

    ){}

}

const pair =
new Pair<string,number>(

    "Age",

    24

);

console.log(pair.first);

console.log(pair.second);

/*
Type Inference

T

↓

string

----------------------------

U

↓

number

=========================================================
8. GENERIC CONSTRAINTS
=========================================================

Sometimes we don't want

T

to be

ANYTHING.

We restrict it.

Keyword

extends

=========================================================
Example
=========================================================
*/

interface HasId{

    id:number;

}

class Repository<T extends HasId>{

    constructor(

        private entity:T

    ){}

    printId(){

        console.log(

            this.entity.id

        );

    }

}

const repository =
new Repository({

    id:1,

    name:"Diwakar"

});

repository.printId();

/*
Notice

Every object

MUST

contain

id

=========================================================
Wrong Example
=========================================================

new Repository({

    name:"Diwakar"

})

❌ Error

Reason

id

is missing.


*/

/*
=========================================================
9. GENERIC CLASSES WITH INTERFACES
=========================================================

Generic Classes often work
together with Generic Interfaces.

This creates highly reusable
and type-safe code.

=========================================================
Example
=========================================================
*/

interface RepositoryEx<T>{

    save(item:T):void;

    find():T;

}

class UserRepository
implements RepositoryEx<string>{

    private user = "Diwakar";

    save(user:string){

        this.user = user;

    }

    find(){

        return this.user;

    }

}

const userRepository =
new UserRepository();

userRepository.save("Rahul");

console.log(

    userRepository.find()

);

/*
Notice

T

↓

string

Therefore

save()

↓

string

find()

↓

string

=========================================================
Another Example
=========================================================
*/

interface Cache<T>{

    set(value:T):void;

    get():T;

}

class MemoryCache<T>
implements Cache<T>{

    constructor(

        private value:T

    ){}

    set(value:T){

        this.value = value;

    }

    get(){

        return this.value;

    }

}

const cache =
new MemoryCache<number>(10);

console.log(

    cache.get()

);

cache.set(20);

console.log(

    cache.get()

);

/*
Visualization

Cache<T>

↓

MemoryCache<T>

↓

T = number

↓

set(number)

↓

get()

↓

number

=========================================================
10. GENERIC CLASSES WITH INHERITANCE
=========================================================

Generic Classes can also
inherit from other
Generic Classes.

=========================================================
Example
=========================================================
*/

class BaseRepository<T>{

    constructor(

        protected data:T

    ){}

    getData(){

        return this.data;

    }

}

class UserRepositoryEx
extends BaseRepository<{

    id:number;

    name:string;

}>{

}

const userRepo =
new UserRepositoryEx({

    id:1,

    name:"Diwakar"

});

console.log(

    userRepo.getData()

);

/*
Type Flow

BaseRepository<T>

↓

T

↓

User Object

↓

getData()

↓

User Object

=========================================================
Another Example
=========================================================
*/

class Animal<T>{

    constructor(

        protected value:T

    ){}

}

class Dog
extends Animal<string>{

    print(){

        console.log(this.value);

    }

}

const dog = new Dog("Tommy");

dog.print();

/*
=========================================================
11. REAL WORLD BACKEND EXAMPLES
=========================================================

Example 1

API Response

=========================================================
*/

class ApiResponse<T>{

    constructor(

        public success:boolean,

        public data:T

    ){}

}

const response =
new ApiResponse(

    true,

    {

        id:1,

        name:"Diwakar"

    }

);

console.log(response);

/*
Useful for

Users

Products

Orders

Payments

=========================================================
Example 2

Repository Pattern

=========================================================
*/

interface BaseEntity{

    id:number;

}

class MongoRepository<T extends BaseEntity>{

    save(item:T){

        console.log(

            "Saved",

            item.id

        );

    }

}

const mongoRepository =
new MongoRepository<{

    id:number;

    name:string;

}>();

mongoRepository.save({

    id:1,

    name:"Diwakar"

});

/*
=========================================================
Example 3

Queue
=========================================================
*/

class Queue<T>{

    private items:T[]=[];

    enqueue(item:T){

        this.items.push(item);

    }

    dequeue(){

        return this.items.shift();

    }

}

const queue =
new Queue<number>();

queue.enqueue(10);

queue.enqueue(20);

console.log(

    queue.dequeue()

);

console.log(

    queue.dequeue()

);

/*
=========================================================
Example 4

Stack
=========================================================
*/

class Stack<T>{

    private items:T[]=[];

    push(item:T){

        this.items.push(item);

    }

    pop(){

        return this.items.pop();

    }

}

const stack =
new Stack<string>();

stack.push("A");

stack.push("B");

console.log(

    stack.pop()

);

console.log(

    stack.pop()

);

/*
=========================================================
12. COMMON MISTAKES
=========================================================

Mistake 1

Using

any

instead of Generics.

Wrong

class Storage{

    item:any;

}

Reason

Type Safety Lost.

---------------------------------------------------------
Correct
---------------------------------------------------------

class Storage<T>{

    item:T;

}

=========================================================

Mistake 2

Using the wrong type.

Example

const storage =
new Storage<number>(100);

storage.setData("Hello");

❌ Error

Reason

Expected

number

Received

string

=========================================================

Mistake 3

Forgetting Generic Constraints.

Wrong

class Repository<T>{

    print(){

        console.log(this.data.id);

    }

}

❌ Error

Reason

T

may not contain

id

---------------------------------------------------------
Correct

T extends HasId

=========================================================

Mistake 4

Using different types.

Example

const pair =
new Pair<number,string>(

    10,

    20

);

❌ Error

Reason

Expected

string

Received

number

*/

/*
=========================================================
13. BEST PRACTICES
=========================================================

✔ Prefer meaningful generic names.

Example

T

↓

Type

---------------------------------------------------------

User

↓

User Type

---------------------------------------------------------

Response

↓

API Response

---------------------------------------------------------

Entity

↓

Database Entity

=========================================================

✔ Use Generic Constraints
whenever specific properties
are required.

Example

T extends HasId

instead of

T

This prevents runtime errors.

=========================================================

✔ Avoid using

any

Generics preserve type
information.

Wrong

class Storage{

    value:any;

}

---------------------------------------------------------

Correct

class Storage<T>{

    value:T;

}

=========================================================

✔ Keep Generic Classes
reusable.

Instead of

UserRepository

ProductRepository

OrderRepository

Create

Repository<T>

=========================================================

✔ Use descriptive names.

Good

Repository<T>

ApiResponse<T>

Cache<T>

Queue<T>

---------------------------------------------------------

Avoid

A

B

C

unless the meaning is obvious.

=========================================================

✔ Use multiple generics only
when required.

Good

Pair<T,U>

---------------------------------------------------------

Avoid

Pair<T,U,V,W,X>

unless every generic
is actually needed.

=========================================================

✔ Let TypeScript infer types
whenever possible.

Example

const response =
new ApiResponse(

    true,

    {

        id:1,

        name:"Diwakar"

    }

);

TypeScript automatically
infers

T

↓

{

id:number;

name:string;

}

=========================================================

✔ Combine Generic Classes
with Interfaces.

Example

Repository<T>

Cache<T>

Response<T>

This creates reusable
enterprise-level code.

=========================================================
14. INTERVIEW DEFINITIONS
=========================================================

What is a Generic Class?

Answer

A Generic Class is a class
that can work with different
data types while preserving
type safety.

---------------------------------------------------------

Why do we use Generic Classes?

Answer

To avoid duplicate code
and create reusable,
type-safe classes.

---------------------------------------------------------

How do we declare a
Generic Class?

Answer

class Storage<T>{

}

---------------------------------------------------------

Can a Generic Class have
multiple type parameters?

Answer

Yes.

Example

class Pair<T,U>{

}

---------------------------------------------------------

Can Generic Classes have
methods?

Answer

Yes.

Both methods and properties
can use generic types.

---------------------------------------------------------

Can Generic Classes
extend other Generic Classes?

Answer

Yes.

Example

class UserRepository

extends Repository<User>{

}

---------------------------------------------------------

What is a Generic Constraint?

Answer

A Generic Constraint limits
which types can be used.

Example

T extends HasId

=========================================================
REAL WORLD SCENARIOS
=========================================================

API Response

↓

ApiResponse<User>

---------------------------------------------------------

Mongo Repository

↓

Repository<User>

---------------------------------------------------------

Redis Cache

↓

Cache<string>

---------------------------------------------------------

RabbitMQ Queue

↓

Queue<Job>

---------------------------------------------------------

Stack

↓

Stack<number>

---------------------------------------------------------

Notification Service

↓

Notification<Email>

---------------------------------------------------------

Shopping Cart

↓

Cart<Product>

---------------------------------------------------------

Pagination

↓

PaginatedResponse<User>

=========================================================
TYPE FLOW
=========================================================

Storage<T>

↓

T = User

↓

Storage<User>

↓

item

↓

User

↓

getItem()

↓

User

=========================================================

Repository<T extends HasId>

↓

T

↓

User

↓

id

↓

Accessible

=========================================================

ApiResponse<T>

↓

T

↓

Order

↓

data

↓

Order

=========================================================
ANALOGY
=========================================================

Imagine a warehouse.

The warehouse can store

Books

Phones

Laptops

Clothes

Furniture

The warehouse itself
never changes.

Only the type of item
inside changes.

Warehouse<T>

↓

Warehouse<Book>

---------------------------------------------------------

Warehouse<T>

↓

Warehouse<Phone>

---------------------------------------------------------

Warehouse<T>

↓

Warehouse<Laptop>

The warehouse is reusable,

only

T

changes.

Generic Classes work
exactly the same way.

=========================================================
SUMMARY
=========================================================

✔ Generic Classes are reusable.

✔ They preserve type safety.

✔ They reduce duplicate code.

✔ They work with any data type.

✔ Generic properties use T.

✔ Generic methods use T.

✔ Multiple generic types
are supported.

✔ Constraints use

extends

to restrict types.

✔ Generic Classes are widely
used in

Repositories

API Responses

Queues

Stacks

Caches

DTOs

Enterprise Applications

=========================================================
END OF NOTES
=========================================================
*/

export {};