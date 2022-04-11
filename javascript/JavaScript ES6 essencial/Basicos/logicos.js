exp1 && exp2

var a1 = true && true; // t && t retorna true
var a2 = true && false; // t && f retorna false
var a3 = false && true; // f && t retorna false
var a4 = false && (3==4); // f && t retorna false
var a5 = "gato" && "cão"; // t && t retorna cão
var a6 = false && "gato"; // f && t retorna false
var a7 = "gato" && false; // t && f retorna false

// OU logico {||}
exp1 || exp2

var a1 = true || true;
var a2 = false || true;
var a3 = true || false;
var a4 = false || 3==4;
var a5 = "gato" || "cão";
var a6 = false || "cão";
var a2 = "gato" || false;

// Not logic (!)
!exp1

var n1 = !true; // retorna false
var n2 = !false; // retorna true
var n3 = !"gato"; // retorna false

// true
