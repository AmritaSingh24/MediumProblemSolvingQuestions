// Array of Full Names

let names = [
         {firstname: 'Bruce', lastname: 'Wayne'},
         {firstname: 'Clark', lastname: 'kent'}
        ];

function fullNames (names){
    return names.map(name => `${name.firstname} ${name.lastname}`)
}

console.log(fullNames(names));