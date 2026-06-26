
type userN7 = {
    id: string,
    name: string,
    email?: string //T['email']
}

function getUserPropN7<T, K extends keyof T>(objN7:T, keyN7:K):T[K]{
    return objN7[keyN7];
}

const UserN7:userN7 = {
    id:'u1',
    name:'Diwakar',
    email:'shukladiwakar@941gmail.com'
}

const idv7 = getUserPropN7(UserN7, 'name');


console.log(idv7);


function setUserPropN7<T, K extends keyof T>(objN7:T, keyN7:K, newValN7:T[K]):void{
    objN7[keyN7] = newValN7
}

setUserPropN7(UserN7, 'name', 'Bhaskar');
console.log(getUserPropN7(UserN7, 'name'));
