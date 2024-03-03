# TESTE FRONT-END CODEROCKR
### Projeto: https://github.com/Coderockr/frontend-test

### Para rodar a aplicação:

```
npm install
npm run build
npm run preview
```

## Observações:

#### O projeto foi construido por Vite, Framework React+TypeScript, achei que era melhor pelas paginações, tipagem e as interações.

#### Na primeira página os posts eu não consigui renderizar eles de forma da estrutura requirida. Então resolvi fazer a página estática, porém o Infinite Scroll Page funciona e assim vai "renderizando", repeitindo os items.

## Foi usado:

### Paginação --> React Router (react-router-dom):
#### Importante para navegação das páginas também, o componente Header está com os links para ir ás páginas Contato ```/contact``` e NewPost(Extra) ```/newpost```. <br> Para ver o SinglePost ```/post/:id``` page basta clicar em um dos posts na página principal ```/```. <br> E o post que aparecerá será o que foi clicado.

### Estilização e Resposividade --> TailwindCSS:
#### Menu Hamburguer. <br>Foi criado alguns layer components em ```index.css```<br> Importei a fonte do figma pelo GoogleFonts. Mais informações no ```tailwind.config.js``` 

