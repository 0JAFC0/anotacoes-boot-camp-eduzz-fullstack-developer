// in 
something in somethingItems

// arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicomoro");
0 in arvores; // retorna false
3 in arvores; // retorna false
6 in arvores; // retorna false
"cedro" in arvores;
"length" in arvores;

// Objetos predefinidos
"PI" in Math; // retorne true
var minhaString = new String("coral");
"length" in minhaString; //retorne true

// Objetos personificados
var meuCarro = {marca:"Honda",modelo:"Accord",ano:1998};
"marca" in meuCarro; // retorna true
"modelo" in meuCarro; // retorne true


objeto instanceof tipoObjeto

var dia = new Date(2018,12,17);
if(dia instanceof Date){
    //code here
}