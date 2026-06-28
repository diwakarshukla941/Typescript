/*
=========================================================
INHERITANCE
=========================================================

INDEX

1. What is Inheritance?
2. Why Do We Need Inheritance?
3. Parent Class
4. Child Class
5. extends Keyword
6. Constructor Inheritance
7. super Keyword
8. Method Overriding
9. Accessing Parent Methods
10. Multi-Level Inheritance
11. Hierarchical Inheritance
12. Access Modifiers in Inheritance
13. Static Members & Inheritance
14. instanceof
15. Real World Backend Examples
16. Common Mistakes
17. Best Practices
18. Interview Definitions

=========================================================
1. WHAT IS INHERITANCE?
=========================================================

Inheritance is one of the four
pillars of Object-Oriented
Programming (OOP).

It allows one class to inherit
(properties and methods)
from another class.

Instead of writing the same code
again and again,

we write it once

inside a parent class,

and child classes automatically
receive it.

=========================================================
Definition
=========================================================

Inheritance is the process where

one class acquires the properties
and methods of another class.

=========================================================
Terminology
=========================================================

Parent Class

↓

The class whose properties and
methods are inherited.

Also called

✔ Base Class

✔ Super Class

---------------------------------------------------------

Child Class

↓

The class that inherits from
another class.

Also called

✔ Derived Class

✔ Sub Class

=========================================================
Visualization
=========================================================

        Animal
           │
           │
     ---------------
     │             │
     │             │
    Dog           Cat

Dog and Cat

inherit

from

Animal

=========================================================
2. WHY DO WE NEED INHERITANCE?
=========================================================

Suppose we have

Dog

Cat

Lion

Tiger

All of them have

✔ name

✔ age

✔ eat()

✔ sleep()

Without inheritance,

we write the same code
inside every class.

Dog

↓

name

age

eat()

sleep()

----------------------------

Cat

↓

name

age

eat()

sleep()

----------------------------

Lion

↓

name

age

eat()

sleep()

Lots of duplicate code.

=========================================================

With Inheritance

Animal

↓

name

age

eat()

sleep()

----------------------------

Dog

↓

bark()

----------------------------

Cat

↓

meow()

Each child class only contains
its unique behavior.

=========================================================
Benefits
=========================================================

✔ Code Reusability

✔ Less Duplication

✔ Easy Maintenance

✔ Better Code Organization

✔ Easier Extension

=========================================================
3. PARENT CLASS
=========================================================

The Parent Class contains
common functionality shared by
multiple classes.

=========================================================
Example
=========================================================
*/

class Animal {

    name: string;

    constructor(name: string) {

        this.name = name;

    }

    eat() {

        console.log(

            this.name,

            "is eating."

        );

    }

    sleep() {

        console.log(

            this.name,

            "is sleeping."

        );

    }

}

const animal = new Animal("Animal");

animal.eat();

animal.sleep();

/*
Animal contains

✔ name

✔ eat()

✔ sleep()

Every child class can reuse them.

=========================================================
4. CHILD CLASS
=========================================================

A Child Class inherits
everything from the Parent Class.

To create a child class,

TypeScript uses

extends

keyword.

=========================================================
Syntax
=========================================================

class Child extends Parent{

}

=========================================================
5. extends KEYWORD
=========================================================

The

extends

keyword tells TypeScript

"This class should inherit from
another class."

=========================================================
Example
=========================================================
*/

class Dog extends Animal {

    bark() {

        console.log(

            this.name,

            "is barking."

        );

    }

}

const dog = new Dog("Tommy");

dog.eat();

dog.sleep();

dog.bark();

/*
Dog received

✔ name

✔ eat()

✔ sleep()

from Animal

and added

✔ bark()

=========================================================
Visualization
=========================================================

Animal

↓

name

eat()

sleep()

↓

extends

↓

Dog

↓

bark()

=========================================================

Dog now contains

✔ name

✔ eat()

✔ sleep()

✔ bark()

=========================================================
6. CONSTRUCTOR INHERITANCE
=========================================================

When a parent class has a
constructor,

the child class automatically
inherits it.

If the child class does NOT
create its own constructor,

the parent's constructor
is used.

=========================================================
Example
=========================================================
*/

class Vehicle {

    constructor(

        public brand: string

    ) { }

    start() {

        console.log(

            this.brand,

            "started."

        );

    }

}

class Car extends Vehicle {

}

const car = new Car("Toyota");

car.start();

/*
Car has no constructor,

yet

brand

was initialized.

Reason

Parent constructor was used.

=========================================================
7. super KEYWORD
=========================================================

When a child class defines
its own constructor,

it MUST call

super()

before using

this.

=========================================================
Why?
=========================================================

The parent class should
initialize itself first.

Only then can the child
initialize its own members.

=========================================================
Example
=========================================================
*/

class Person {

    constructor(

        public name: string

    ) { }

}

class Student extends Person {

    constructor(

        name: string,

        public course: string

    ) {

        super(name);

        this.course = course;

    }

}

const student = new Student(

    "Diwakar",

    "Backend Development"

);

console.log(student.name);

console.log(student.course);

/*
Execution Flow

Student Constructor

↓

super(name)

↓

Person Constructor

↓

Parent Initialization Complete

↓

Child Initialization Starts

=========================================================
IMPORTANT RULE
=========================================================

Inside a child constructor,

super()

must be called

BEFORE

using

this

=========================================================
Wrong Example
=========================================================

class Student extends Person{

    constructor(name:string){

        this.name = name;

        super(name);

    }

}

❌ Error

Reason

this

cannot be used before

super()

*/

/*
=========================================================
8. METHOD OVERRIDING
=========================================================

Sometimes a child class wants to
change the implementation of a
method inherited from the parent.

Instead of creating a new method,

it replaces the parent's version.

This is called

Method Overriding.

=========================================================
Definition
=========================================================

Method Overriding means

A child class provides its own
implementation of a method that
already exists in the parent class.

=========================================================
Example
=========================================================
*/

class AnimalExm {

    eat() {

        console.log("Animal is eating.");

    }

}

class DogEx extends AnimalExm {

    override eat() {

        console.log("Dog is eating meat.");

    }

}

const dogex = new DogEx();

dogex.eat();

/*
Output

Dog is eating meat.

---------------------------------------------------------

Notice

Dog replaced

Animal.eat()

with its own implementation.

=========================================================
Why use override?
=========================================================

TypeScript introduced

override

to make overriding safer.

Without it,

typing mistakes can go unnoticed.

=========================================================
Example
=========================================================
*/

class VehicleEx{

    start() {

        console.log("Vehicle Started");

    }

}

class Bike extends VehicleEx {

    override start() {

        console.log("Bike Started");

    }

}

const bike = new Bike();

bike.start();

/*
Benefits of override

✔ Prevents spelling mistakes

✔ Makes code readable

✔ Compiler verifies the parent
method exists

=========================================================
Wrong Example
=========================================================

class Car extends Vehicle{

    override drive(){

    }

}

❌ Error

Reason

Vehicle

does not have

drive()

method.

=========================================================
9. ACCESSING PARENT METHODS
=========================================================

Sometimes we want to execute

Parent Logic

+

Child Logic

Instead of replacing everything.

For that,

we use

super.methodName()

=========================================================
Example
=========================================================
*/

class Employee {

    work() {

        console.log("Employee started working.");

    }

}

class Manager extends Employee {

    override work() {

        super.work();

        console.log("Manager assigned tasks.");

    }

}

const manager = new Manager();

manager.work();

/*
Output

Employee started working.

Manager assigned tasks.

---------------------------------------------------------

Execution

Manager.work()

↓

super.work()

↓

Employee.work()

↓

Back to Manager.work()

↓

Manager Logic Executes

=========================================================
10. MULTI-LEVEL INHERITANCE
=========================================================

A class can inherit from
another child class.

Example

Animal

↓

Dog

↓

Puppy

This is called

Multi-Level Inheritance.

=========================================================
Example
=========================================================
*/

class LivingThing {

    breathe() {

        console.log("Breathing...");

    }

}

class AnimalEx extends LivingThing {

    eat() {

        console.log("Eating...");

    }

}

class Puppy extends AnimalEx {

    play() {

        console.log("Playing...");

    }

}

const puppy = new Puppy();

puppy.breathe();

puppy.eat();

puppy.play();

/*
Visualization

LivingThing

↓

Animal

↓

Puppy

---------------------------------------------------------

Puppy inherits

✔ breathe()

✔ eat()

✔ play()

=========================================================
11. HIERARCHICAL INHERITANCE
=========================================================

One Parent

↓

Many Child Classes

=========================================================
Visualization
=========================================================

            Animal
           /   |   \
          /    |    \
       Dog    Cat   Lion

=========================================================
Example
=========================================================
*/

class AnimalBase {

    walk() {

        console.log("Walking...");

    }

}

class DogAnimal extends AnimalBase {

    bark() {

        console.log("Barking...");

    }

}

class CatAnimal extends AnimalBase {

    meow() {

        console.log("Meowing...");

    }

}

class LionAnimal extends AnimalBase {

    roar() {

        console.log("Roaring...");

    }

}

const dogAnimal = new DogAnimal();

dogAnimal.walk();

dogAnimal.bark();

const catAnimal = new CatAnimal();

catAnimal.walk();

catAnimal.meow();

const lionAnimal = new LionAnimal();

lionAnimal.walk();

lionAnimal.roar();

/*
Notice

walk()

exists only once,

inside

AnimalBase,

yet all child classes
can use it.

=========================================================
12. ACCESS MODIFIERS IN INHERITANCE
=========================================================

Access modifiers determine
which members are inherited
and where they can be accessed.

=========================================================
public
=========================================================

✔ Parent

✔ Child

✔ Outside

=========================================================
Example
=========================================================
*/

class PersonExample {

    public name = "Diwakar";

}

class Developer extends PersonExample {

    print() {

        console.log(this.name);

    }

}

const developer = new Developer();

developer.print();

console.log(developer.name);

/*
=========================================================
protected
=========================================================

✔ Parent

✔ Child

❌ Outside

=========================================================
Example
=========================================================
*/

class EmployeeBase {

    protected salary = 90000;

}

class SoftwareEngineer extends EmployeeBase {

    printSalary() {

        console.log(this.salary);

    }

}

const engineer = new SoftwareEngineer();

engineer.printSalary();

// engineer.salary

/*
❌ Error

Reason

protected members are
accessible only inside

Parent

and

Child

=========================================================
private
=========================================================

✔ Parent

❌ Child

❌ Outside

=========================================================
Example
=========================================================
*/

class BankAccount {

    private balance = 5000;

}

class SavingsAccount extends BankAccount {

    show() {

        // console.log(this.balance);

    }

}

/*
Even child classes cannot
access

private

members.

*/

/*
=========================================================
13. STATIC MEMBERS & INHERITANCE
=========================================================

Static members also participate
in inheritance.

A child class inherits static
properties and static methods
from its parent.

Remember

Static members belong to the class,

NOT the object.

=========================================================
Example
=========================================================
*/

class Company{

    static companyName = "OpenAI";

    static printCompany(){

        console.log(

            Company.companyName

        );

    }

}

class EmployeeExample extends Company{

}

console.log(EmployeeExample.companyName);

EmployeeExample.printCompany();

/*
Output

OpenAI

OpenAI

---------------------------------------------------------

Notice

Employee

never declared

companyName

or

printCompany()

yet it can use both because
they were inherited.

=========================================================
Static Method Overriding
=========================================================
*/

class Shape{

    static describe(){

        console.log("Generic Shape");

    }

}

class Circle extends Shape{

    static override describe(){

        console.log("Circle Shape");

    }

}

Shape.describe();

Circle.describe();

/*
Output

Generic Shape

Circle Shape

=========================================================
Important Rule
=========================================================

Static members

↓

Access using Class Name

NOT

Object

Example

Circle.describe()

✔

---------------------------------------------------------

const circle = new Circle();

circle.describe();

❌ Error

=========================================================
14. instanceof OPERATOR
=========================================================

Sometimes we need to check

whether an object belongs to
a particular class.

TypeScript (and JavaScript)
provides

instanceof

=========================================================
Syntax
=========================================================

object instanceof ClassName

Returns

true

or

false

=========================================================
Example
=========================================================
*/

class AnimalExample {

}

class DogExample  extends AnimalExample {

}

const DogObject = new DogExample ();

console.log(

    DogObject instanceof DogExample 

);

console.log(

    DogObject instanceof AnimalExample 

);

/*
Output

true

true

---------------------------------------------------------

Reason

Dog

inherits

Animal.

=========================================================
Another Example
=========================================================
*/

class VehicleExample{

}

class BikeExample extends VehicleExample{

}

class CarExample extends VehicleExample{

}

const bikeExample = new BikeExample();

console.log(

    bikeExample instanceof Bike

);

console.log(

    bikeExample instanceof VehicleExample

);

console.log(

    bikeExample instanceof CarExample

);

/*
Output

true

true

false

=========================================================
Why use instanceof?
=========================================================

Very common when

✔ Type Narrowing

✔ Error Handling

✔ API Responses

✔ Parsing Unknown Objects

=========================================================
Backend Example
=========================================================
*/

class ApiError extends Error{

}

class ValidationError extends ApiError{

}

const error = new ValidationError();

if(error instanceof ApiError){

    console.log(

        "API Error"

    );

}

/*
=========================================================
15. REAL WORLD BACKEND EXAMPLES
=========================================================

Example 1

Express Controller

=========================================================
*/

class BaseController{

    sendSuccess(){

        console.log(

            "Success Response"

        );

    }

    sendError(){

        console.log(

            "Error Response"

        );

    }

}

class UserController extends BaseController{

    getUsers(){

        this.sendSuccess();

        console.log(

            "Returning Users"

        );

    }

}

const controller = new UserController();

controller.getUsers();

/*
Instead of writing

sendSuccess()

and

sendError()

inside every controller,

we inherit them.

=========================================================
Example 2

Repository Pattern
=========================================================
*/

class BaseRepository{

    save(){

        console.log("Saving...");

    }

    delete(){

        console.log("Deleting...");

    }

}

class UserRepository extends BaseRepository{

    findUser(){

        console.log(

            "Finding User"

        );

    }

}

const repository = new UserRepository();

repository.save();

repository.delete();

repository.findUser();

/*
Large applications often have

ProductRepository

OrderRepository

PaymentRepository

CustomerRepository

All inherit from

BaseRepository.

=========================================================
Example 3

Authentication
=========================================================
*/

class AuthMiddleware{

    authenticate(){

        console.log(

            "Authenticating User"

        );

    }

}

class AdminMiddleware
extends AuthMiddleware{

    authorize(){

        console.log(

            "Checking Admin Permission"

        );

    }

}

const middleware =
new AdminMiddleware();

middleware.authenticate();

middleware.authorize();

/*
Benefits

✔ Reuse

✔ Cleaner Code

✔ Easier Maintenance

=========================================================
16. COMMON MISTAKES
=========================================================

Mistake 1

Forgetting

extends

class Dog{

}

Dog does NOT inherit anything.

---------------------------------------------------------

Correct

class Dog extends Animal{

}

=========================================================

Mistake 2

Using

this

before

super()

=========================================================

class Student extends Person{

    constructor(){

        this.name = "ABC";

        super("ABC");

    }

}

❌ Error

---------------------------------------------------------

Correct

constructor(){

    super("ABC");

}

=========================================================

Mistake 3

Trying to access

private

members.

Example

class Parent{

    private age = 20;

}

class Child extends Parent{

    print(){

        // console.log(this.age);

    }

}

❌ Error

Reason

private

members are NOT inherited.

=========================================================

Mistake 4

Forgetting

override

when overriding methods.

Although optional in some
TypeScript configurations,

using

override

makes your code safer.

=========================================================

Mistake 5

Trying Multiple Inheritance

Example

class A{

}

class B{

}

class C extends A,B{

}

❌ Invalid

TypeScript supports

Single Inheritance

only.

A class can extend

ONE

class.

=========================================================
17. BEST PRACTICES
=========================================================

✔ Put common logic inside
the parent class.

---------------------------------------------------------

✔ Keep child classes focused
only on specialized behavior.

---------------------------------------------------------

✔ Prefer composition when
inheritance becomes too deep.

---------------------------------------------------------

✔ Use

override

when replacing parent methods.

---------------------------------------------------------

✔ Keep parent classes generic.

---------------------------------------------------------

✔ Use inheritance only when

"IS-A"

relationship exists.

Example

Dog

IS A

Animal

✔ Correct

---------------------------------------------------------

Car

IS A

Engine

❌ Wrong

Car

HAS AN

Engine

Use composition instead.

=========================================================
18. INTERVIEW DEFINITIONS
=========================================================

What is Inheritance?

Answer

Inheritance is an OOP concept
where one class acquires the
properties and methods of
another class.

---------------------------------------------------------

Which keyword is used?

Answer

extends

---------------------------------------------------------

Why do we use

super()

?

Answer

To call the parent constructor
or parent methods.

---------------------------------------------------------

Can TypeScript support
multiple inheritance?

Answer

No.

A class can extend only
one parent class.

---------------------------------------------------------

Difference between

extends

and

implements

extends

↓

Inherits implementation
and properties.

---------------------------------------------------------

implements

↓

Only promises to follow
a structure.

No implementation is inherited.

=========================================================
ANALOGY
=========================================================

Imagine a family.

Parent

↓

House

Car

Furniture

Rules

---------------------------------------------------------

Child

inherits

↓

House

Furniture

Family Name

and can also have

↓

Own Bike

Own Laptop

Own Skills

The child receives everything
from the parent,

but can also add new things
or modify existing behavior.

Inheritance in TypeScript works
exactly the same way.

=========================================================
SUMMARY
=========================================================

✔ Inheritance promotes code reuse.

✔ Child classes inherit parent
properties and methods.

✔ Use

extends

to inherit.

✔ Use

super()

to call the parent constructor
or methods.

✔ Use

override

when replacing methods.

✔ TypeScript supports only
Single Inheritance.

✔ Static members are inherited.

✔ instanceof checks inheritance
relationships at runtime.

✔ Use inheritance only for
true "IS-A" relationships.

=========================================================
END OF NOTES
=========================================================
*/

export {};