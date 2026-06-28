/*
=========================================================
ACCESS MODIFIERS - PUBLIC & PRIVATE
=========================================================

INDEX

1. What are Access Modifiers?
2. Why Do We Need Them?
3. public (Default)
4. private
5. ECMAScript Private (#)
6. Example - Bank Account
7. Why Not Make Everything Public?
8. Real World Backend Examples
9. Common Mistakes
10. Best Practices
11. Interview Definitions
12. Summary

=========================================================
1. WHAT ARE ACCESS MODIFIERS?
=========================================================

Definition:

Access Modifiers control where
properties and methods can be
accessed.

Think of them as access rules.

They decide

✔ Who can read data

✔ Who can modify data

✔ Who cannot access data

=========================================================
2. WHY DO WE NEED THEM?
=========================================================

Imagine a bank account.

Anyone should be able to know
the owner's name.

But should everyone be able to
change the account balance?

Of course not.

Instead

Bank Account

↓

Owner Name

↓

Public

----------------------------

Balance

↓

Private

Only the class should decide
how money is deposited or
withdrawn.

This is called

ENCAPSULATION

One of the four pillars of OOP.

=========================================================
3. public
=========================================================

Definition:

public means the member can be
accessed from anywhere.

public is the DEFAULT modifier.

Example

*/

class DemoPublic {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

}

const demo = new DemoPublic("Diwakar");

console.log(demo.name);

/*
Even if we remove

public

the behavior remains the same.

Example

class User{

    name:string;

}

is exactly equivalent to

class User{

    public name:string;

}

=========================================================
4. private
=========================================================

Definition:

private means the member can
ONLY be accessed inside
the class.

Outside code cannot access it.

Example

*/

class BankAccount {

    public owner: string;

    private balance: number = 0;

    #otp = 2222;

    constructor(owner: string) {
        this.owner = owner;
    }

    deposit(amount: number) {

        if (amount < 0) {

            throw new Error(
                "Amount must be positive"
            );

        }

        this.balance += amount;

    }

    withdraw(amount: number) {

        if (amount > this.balance) {

            throw new Error(
                "Insufficient Balance"
            );

        }

        this.balance -= amount;

    }

    getBalance() {

        return this.balance;

    }

    verifyOtp(code: number) {

        return this.#otp === code;

    }

}

const account =
new BankAccount("Diwakar");

account.deposit(5000);

console.log(
    account.getBalance()
);

// account.balance;

/*
Error

Property

balance

is private.

=========================================================
5. ECMASCRIPT PRIVATE (#)
=========================================================

There are TWO kinds of private.

---------------------------------------------------------
TypeScript private
---------------------------------------------------------

private balance:number;

Only TypeScript checks this.

After compilation,
JavaScript can still access it
through special techniques.

---------------------------------------------------------
JavaScript private
---------------------------------------------------------

#otp = 2222;

This is REAL JavaScript private.

It is enforced at runtime.

Even JavaScript code cannot
access it.

*/

console.log(
    account.verifyOtp(2222)
);

// account.#otp;

/*
Syntax Error

Cannot access.

=========================================================
VISUAL
=========================================================

Outside Code

↓

Owner

✔

Balance

❌

OTP

❌

↓

Inside Class

↓

Owner

✔

Balance

✔

OTP

✔

=========================================================
6. WHY NOT MAKE EVERYTHING PUBLIC?
=========================================================

Imagine this

*/

class BadBank {

    public balance = 5000;

}

const bad =
new BadBank();

bad.balance =
-1000000;

/*
Invalid state.

Anybody can modify it.

Instead

private balance

+

deposit()

+

withdraw()

protects the object.

=========================================================
7. REAL WORLD BACKEND EXAMPLES
=========================================================

User

Public

↓

Name

Email

------------------------------------

Private

↓

Password Hash

OTP

JWT Secret

Refresh Token

------------------------------------

Bank Account

Public

↓

Owner

------------------------------------

Private

↓

Balance

PIN

Transaction Keys

=========================================================
8. COMMON MISTAKES
=========================================================

❌ Making everything public.

Use private whenever external
code should not modify data.

------------------------------------

❌ Returning private fields
without validation.

Bad

return this.balance;

Sometimes validation or
authorization is needed.

------------------------------------

❌ Using private for everything.

Some properties should remain
public.

Choose carefully.

=========================================================
9. BEST PRACTICES
=========================================================

✔ Keep sensitive data private.

✔ Expose controlled methods.

Example

deposit()

withdraw()

getBalance()

instead of exposing

balance.

✔ Validate before updating data.

✔ Use encapsulation.

=========================================================
10. INTERVIEW DEFINITIONS
=========================================================

Access Modifier

Controls where a member can
be accessed.

------------------------------------

public

Accessible everywhere.

Default modifier.

------------------------------------

private

Accessible only inside
the class.

------------------------------------

ECMAScript Private

#field

Runtime enforced private field.

------------------------------------

Encapsulation

Hiding internal implementation
and exposing only what is needed.

=========================================================
MOST COMMON INTERVIEW QUESTIONS
=========================================================

Q.

Difference between

public

and

private?

Answer

public

↓

Accessible everywhere.

private

↓

Accessible only inside
the class.

---------------------------------------------------------

Q.

Why use private?

Answer

To protect object state
from accidental or
unauthorized modification.

---------------------------------------------------------

Q.

Difference between

private

and

#private?

Answer

private

↓

TypeScript feature.

Compile-time restriction.

----------------------------

#private

↓

JavaScript feature.

Runtime restriction.

=========================================================
SUMMARY
=========================================================

public

↓

Accessible everywhere

------------------------------------

private

↓

Accessible only inside class

------------------------------------

#private

↓

Runtime private

------------------------------------

Encapsulation

↓

Protect internal data

------------------------------------

Good Design

↓

Expose methods

Hide implementation

=========================================================
END OF NOTES
=========================================================
*/

export {};