Funções:

Tipos de funções:

- estrutura: definição comum de uma função.

  ![](https://i.imgur.com/R8xMWAG.png)

  ![](https://i.imgur.com/nz8iRsy.png)

  

- Funções anonimas: função que representam expressões

  ![](https://i.imgur.com/52xhp83.png)

  

- Funções autoinvocavel:

​		![](https://i.imgur.com/BMotF9z.png)

![](https://i.imgur.com/gJnyRJi.png)

- Funções callbacks:

  ![](https://i.imgur.com/oUK4J5l.png)

Parametros de funções:

- Valores padrões:

  ![](https://i.imgur.com/eVjNSh0.png)

- argumentos:

  ![](https://i.imgur.com/mK037KT.png)

  

- This: referencia de contexto para qual você esta.

  ![](https://i.imgur.com/MLMsAPo.png)

  o que é? seu valor pode mudar de acordo com o lugar no codigo onde foi chamado.

  ![](https://i.imgur.com/o4WYYjz.png)

  se passarmos um this um evento onclick o objeto retornado sera o elemento botao. ![](https://i.imgur.com/fCiaGEg.png)

  

- call: manipulando valor this.

  se chamar o objeto pessoa. o nome vai ser Miguel.

  ![](https://i.imgur.com/BiXKTxr.png)

  da mesma forma se chamarmos o atributo nome de animal o resultado vai ser Murphy.

  ![](https://i.imgur.com/x5fDG3b.png)

- apply: é possivel passar parametros para essa função dentro de um array.

  ![](https://i.imgur.com/QxrFr9K.png)

- bind: clona a estrutura da função onde é chamada e aplica o valor do bojeto passado como parametro.

  ![](https://i.imgur.com/41N2rMI.png)

array functions: 

- não faz hoisting
- this sempre sera o objeto global. metodos para modificar seu valor não irão funcionar;
- não existe o objeto "arguments";
- o construtor(ex: new meu Objeto()) tambem não pode ser utilizado.

