
const getAdmin = (map) => {
    let lista = [];

    for([nome,tipo] of map){
        if(tipo === "Admin"){
            lista.push(nome);
        }
    }

    return lista;
}

const userRoles = new Map();
userRoles.set('luiz', 'Admin');
userRoles.set('fernando','Usuario');
userRoles.set('rafael','tecnico');
userRoles.set('bator','Usuario');

console.log(getAdmin(userRoles));