# Desafio | Front-end BemPaggo

Esse projeto foi desenvolvido para o teste aplicado pelo time da BemPaggo referente à vaga de Front-end Junior

## Conceito

Inicialmente foi apresentado um layout de um formulário de compra de etiquetas, porém, estava livre a edição de funcionalidade e usabilidade do mesmo. Resolvi então modificar alguns aspectos do design do layout e a forma de como ele é preenchido. Pontos que mudaram:

- A escolhe dos adesivos eram feitas todas juntas, acredito que esse modo não é o melhor em questão de UX, então, deixei aberto para o usuário selecionar os adesivos de maneira individual, pois, dessa forma ele poderia escolher melhor as quantidades e adesivos desejados.

- Resolvi apresentar imagens de cada adesivo, isso traz uma experiência de usuário melhor, sabendo o que ele está escolhendo. As imagens são ficticias e foram retiradas da web.

- Para os dados desses adesivos eu usei um 'JSON' fictício, simbolizando um retorno de uma API, que em um mundo real, é o que provavelmente ia acontecer. Dessa forma, possibilidando ser adicionado mais adesivos sem nenhum esforço, apenas informando mais dados nesse 'JSON'. Segue um exemplo:

```
{
    "title": "Adesivo React",
    "description": "Sticker em Vinil, impresso em alta resolução. Ideal para notebooks e computadores.",
    "specifications": [
        "Impermeável e proteção UV",
        "Impresso em alta resolução",
        "Ótima durabilidade",
    ],
    "image_url": 'https://www.stickersdevs.com.br/wp-content/uploads/2022/01/react-adesivo-sticker-600x600.png'
    },
```

- Implementei a questão de responsividade, no layout só mostrava a versão desktop, então, pensei em um layout para mobile e adaptei.

## Proposta e Design Desenvolvido
## Tecnologias usadas:

- HTML
- CSS
- ReactJS:
ContextAPI
UseState


## Como executar

Para executar o projeto é simples, basta instalar as dependências e rodar o app na sua máquina local, não sabe como? Basta seguir o passo-a-passo:
1. npm install
2. npm start


