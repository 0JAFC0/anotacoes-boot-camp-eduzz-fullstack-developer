Introduçao ao git e github

Hashs do git:

- Sha1 - secure hash algorithm e um algoritmo que encripta informaçao
- e uma forma de se representar um arquivo a grosso modo.

Objetos fundamentais:

- Blobs - 

![](file:///home/ja/Imagens/Screenshot_20220228_175053.png)

os arquivos ficam guardados dentro desses arquivos chamados blobs.

onde eles tem sua estrutura dessa forma:

​	Blob \0 Ola Mundo

- Tree - elas armazem objetos Blobs. a arvore ela guarda o nome desses arquivos(objetos/Blobs). se caso um Blob mude alguma coisa de dentro, seu SHA vai mudar como o da arvore tb.

  Tree \0 Blob sa4d7s text.txt

![Screenshot_20220228_180013](/home/ja/Imagens/Screenshot_20220228_180013.png)



- Commit - um significado para a tree onde vai conter varias informaçoes inclusive a tree. se alterar o SHA da Blo o SHA da tree ira ser alterado. um objeto commit ele vai sempre referenciar um objeto parente.

![](file:///home/ja/Imagens/Screenshot_20220228_183944.png)

![](file:///home/ja/Imagens/Screenshot_20220228_184402.png)

- ele e um sistema distribuido seguro pq ele representa o estado final do meu codigo. 



Chaves SSH: uma forma de se estabelecer uma conexao segura entre a uma maquina e meu computador.

- como gerar a chave? ssh-keygen -t ed25519 -c email@gmail.com
- depois ele vai perguntar onde vai ser o local que essa chave vai morar e se vai querer alguma senha.



Comandos Git

- git init : para iniciar o repositorio git.
- git add : comando para adicionar arquivo para commit.
- git commit : comando para comitar.
- o github ele utiliza do markdown para mostrar informaçoes.
- markdown e uma forma mais humana de se escrever html.

Tracked ou Untracked

![](file:///home/ja/Imagens/Screenshot_20220228_190917.png)

- Untracked: arquivos que ainda nao foram rastreados.
- Tracked: arquivos que estao sendo rastreados:
  - unmodified: e um arquivo que ainda nao foi modificado ainda.
  - modiefied: arquivo que teve sua chave SHA modificada.
  - staged: e onde fica os arquivos onde estao se preparando para serem commitados. e quando os arquivos estao preparados para serem comitados.



Repositorio:

- ![](file:///home/ja/Imagens/Screenshot_20220228_191658.png)

- ![](file:///home/ja/Imagens/Screenshot_20220228_191658.png)

  