const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function calculaMedia(alunos,media) {
    let aprovados = [];

    for(let i = 0;i<alunos.length;i++){
        let {nome,nota} = alunos[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    
}