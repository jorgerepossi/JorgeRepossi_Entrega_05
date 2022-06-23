
# Sistemas de templates

En este TP preferí trabajar con [ejs](https://ejs.co/) porque parece más sencillo y no tiene problemas de identaciones como lo tiene [pug](https://pugjs.org/api/getting-started.html) etc y me pareció más práctico. Por otro lado [handlebars](https://handlebarsjs.com/) no me pareció mal pero como dije antes prefiero trabajar con EJS


### 🛠 Skills
Javascript, HTML, CSS...


#### Uso EJS / server

```javascript
const express = require( 'express' )

app.set( 'view engine', 'ejs' )
app.set( 'views', 'src/views' )

```
#### Uso EJS / client 

```
<div id="products">
    <% if(all.length> 0){
        for (const product of all) {
        %>
        <div class="product">
          <div class="product__image">
            <img src="<%=product.thumbnail%>" alt="<%=product.title%>" />
          </div>
          <div class="product__title">
            <h3>
              <%=product.title%>
            </h3>
          </div>
          <div class="product__price">
            <p>
              <%=product.price%>
            </p>
          </div>
        </div>
        <%}%>
    </div>
    <% } else { %>
      <div class='message'>
        <h2>Not found  products</h2>
      </div>

      <% } %>

```



#### Uso Pug / server

```javascript
const express = require( 'express' )

app.set('views', 'src/views')
app.set('view engine', 'pug')
```

#### Uso Pug / client 

```
html(lang='es')
  head
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    meta(name='theme-color', content='#000000')
    meta(name='description', content='Aplicación de ejemplo para el curso de Nodejs - Pug')
    meta(name='author', content='@jorepossi')
    link(rel="preconnect" href="https://fonts.googleapis.com")
    link(rel="preconnect" href="https://fonts.gstatic.com" crossorigin)
    link(href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet")
    link(href='/css/app.css' rel='stylesheet')

    title Pug
  body
    include templates/products
```


#### Uso handlebars / server 

```
const express = require('express')
const exphbs = require('express-handlebars').engine

app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'index.hbs',
  })
)

// definimos las vistas
app.set('view engine', '.hbs')
app.set('views', 'src/views')

```

#### Uso handlebars / client

```
views/layouts/index.hbs
<body>
  <div class='main'>
    
      {{{body}}}
    
  </div>
</body>


views/products.hbs

{{#if all}}
<div id="products">
  {{#each all}}
  <div class="product">
    <div class="product__image">
      <img src="{{ this.thumbnail }}" alt="${{ this.title }}" />
    </div>
    <div class="product__title">
      <h3>{{ this.title }}</h3>
    </div>
    <div class="product__price">
      <p>{{ this.price }}</p>
    </div>
  </div>
  {{/each}}
</div>
{{else}}
<div class='message'>
  <h2>Not products found</h2>
</div>
{{/if}}

````



[![](https://img.shields.io/badge/LinkedIn-jorge-repossi)](https://www.linkedin.com/in/jorgerepossi/)
[![](https://img.shields.io/badge/Behance-Verbo-Studio)](https://www.behance.net/verbostudio)
[![](https://img.shields.io/badge/Gmail-jorgerepossi1980%40gmail.com-red)](mailto:jorgerepossi1980010@gmail.com)


### Author

- [@jorgerepossi](https://github.com/jorgerepossi)

