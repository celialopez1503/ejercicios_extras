
//metodo function
const clientesnopre = users.filter(function(nousers){
    return nousers.premium ===false
}); 
console.log(clientesnopre);

//Sin método function

const clientesnopreno = users.filter(cliente => cliente.premium == false)
console.log(clientesnopreno);  

//Array clientes premium

const clientesPrem = users.filter(function(premiumsi){
    return premiumsi.premium ===true
});
console.log(clientesPrem);