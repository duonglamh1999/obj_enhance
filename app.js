function createInstructor (fname,lname){
    return {
        fname, lname
    }
}

let favNum = 42;

const instructor ={
    firstName:'Colt',
    [favNumber]: "that is my favorite!"
}

const instructor2 ={
    firstName:'Colt',
    sayhi(){ return 'Hi'},
    sayBye(){ return 'bye!'}
}

function createAnimal (species,verb,noise){
    return {
        species,
        verb(){
            return noise;
        }
    }
}