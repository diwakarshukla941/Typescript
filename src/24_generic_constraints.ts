
// <T> -> constraints this T so only certain shapes are allowed
// <T extends X> 
// key constraints -> <K extends keyof T> -> K must be a key of T 
// if you don't give a constraints T can be anything
// eg. suppose i am using .length now for string and for the array this will work but for the number it won't work as number does not work with .length property 


function len4<T extends { length: number }>(xn4: T): number {
return xn4
}