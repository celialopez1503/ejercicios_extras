'use strict'
//pinta una frase por cada usuario que es premium: 

const users = [
    {username: 'ppc90', age: 30, premium: true},
    {username: 'ana', age: 35, premium: false},
    {username: 'matilda', age: 21, premium: true},
    {username: 'paco80', age: 22, premium: true},
    {username: 'juana8', age: 52, premium: true},
    {username: 'alonso23', age: 40, premium: false},
    {username: 'ines777', age: 20, premium: false},
   ]; 




const clientesnopreno = users.filter(cliente => cliente.premium == false)
console.log(clientesnopreno);  

for (let elementos of clientesnopreno) {
    console.log('el usuario ' + elementos.username + ' tiene ' + elementos.age +' años')
}; 

const clientes_pre = users.filter(cliente => cliente.premium === true)
console.log(clientes_pre); 

for (let elementos of clientes_pre) {
    console.log( 'el usuario ' + elementos.username + 'tiene ' + elementos.age + ' años')
}; 









