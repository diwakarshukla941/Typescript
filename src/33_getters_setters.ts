/*
=========================================================
GETTERS & SETTERS IN TYPESCRIPT
=========================================================

INDEX
1. What are Getters and Setters?
2. Why do We Need Them?
3. Getter Syntax
4. Setter Syntax
5. Complete Temperature Example
6. How Getters Work
7. How Setters Work
8. Backing Fields
9. Computed Properties
10. Validation
11. Getter vs Normal Method
12. Setter vs Normal Method
13. Read-only and Write-only Properties
14. Real World Backend Examples
15. Common Mistakes
16. Best Practices
17. Interview Definitions
18. Summary

=========================================================
1. WHAT ARE GETTERS & SETTERS?
=========================================================
A getter is a special method executed automatically when a property is READ.
A setter is a special method executed automatically when a property is ASSIGNED.
They provide controlled access to internal state.

=========================================================
2. WHY DO WE NEED THEM?
=========================================================
Without setters anyone can assign invalid values.
Without getters callers may need explicit methods.
They improve encapsulation, validation and API design.

=========================================================
3. GETTER SYNTAX
=========================================================
Syntax:
get property(){...}
Access with object.property (not object.property()).

=========================================================
4. SETTER SYNTAX
=========================================================
Syntax:
set property(value){...}
Assign with object.property = value.

5. COMPLETE EXAMPLE
=========================================================
*/
class Temperature {

    #c = 0;

    constructor(celsius: number) {
        this.#c = celsius;
    }

    get celsius(): number {
        return this.#c;
    }

    set celsius(value: number) {
        if (Number.isNaN(value)) {
            throw new Error("Temperature must be a valid number.");
        }
        this.#c = value;
    }

    get fahrenheit(): number {
        return (this.#c * 9) / 5 + 32;
    }

    set fahrenheit(value: number) {
        this.#c = ((value - 32) * 5) / 9;
    }
}

const temp = new Temperature(25);

console.log(temp.celsius);
console.log(temp.fahrenheit);

temp.fahrenheit = 212;

console.log(temp.celsius);
console.log(temp.fahrenheit);

/*
=========================================================
6. HOW GETTERS WORK
=========================================================

When you write:

temp.celsius

TypeScript automatically calls

get celsius()

You never write:

temp.celsius()

=========================================================
7. HOW SETTERS WORK
=========================================================

When you write:

temp.celsius = 40

TypeScript automatically calls

set celsius(40)

=========================================================
8. BACKING FIELDS
=========================================================

The actual value is stored inside

#c

This is called a Backing Field.

The public API exposes

celsius

while the implementation details
remain hidden.

=========================================================
9. COMPUTED PROPERTIES
=========================================================

Notice that there is NO field called

fahrenheit

Every time it is read, the getter
calculates it from celsius.

This is called a Computed Property.

Visual

#c
 ↓
Getter
 ↓
Formula
 ↓
fahrenheit

=========================================================
10. VALIDATION
=========================================================

The setter validates every update.

Examples in real projects:

✔ Age cannot be negative

✔ Price cannot be negative

✔ Email format

✔ Password rules

=========================================================
11. GETTER vs NORMAL METHOD
=========================================================

Getter

user.fullName

Method

user.getFullName()

Use getters when something behaves
like data.

=========================================================
12. SETTER vs NORMAL METHOD
=========================================================

Setter

user.age = 20

Method

user.setAge(20)

Setters provide property-like syntax
while still allowing validation.

=========================================================
13. READ-ONLY & WRITE-ONLY
=========================================================

Read-only property

Only getter

Write-only property

Only setter

Although write-only properties are
rare in production code.

=========================================================
14. REAL WORLD BACKEND EXAMPLES
=========================================================

User
↓

Getter → fullName

Invoice
↓

Getter → totalAmount

Product
↓

Setter → validate price

Password
↓

Setter → hash password

=========================================================
15. COMMON MISTAKES
=========================================================

❌ Calling getter like a function

user.name()

✔ Correct

user.name

----------------------------

❌ Calling setter like a function

user.name("John")

✔ Correct

user.name = "John"

----------------------------

❌ Heavy database queries in getters.

Keep getters lightweight.

=========================================================
16. BEST PRACTICES
=========================================================

✔ Use getters for computed values.

✔ Use setters for validation.

✔ Keep getters free of side effects.

✔ Hide implementation details.

✔ Expose a clean public API.

=========================================================
17. INTERVIEW DEFINITIONS
=========================================================

Getter
→ Executes automatically when reading.

Setter
→ Executes automatically when assigning.

Computed Property
→ Calculated instead of stored.

Backing Field
→ Private field used internally.

Encapsulation
→ Hide internal state while exposing
controlled access.

=========================================================
18. SUMMARY
=========================================================

Getter
 ↓
Read

Setter
 ↓
Write

Backing Field
 ↓
Stores actual value

Computed Property
 ↓
Calculated every access

Validation
 ↓
Setter

=========================================================
END OF NOTES
=========================================================
*/

export {};
