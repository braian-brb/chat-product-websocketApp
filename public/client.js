//CLIENTE

// ****************************** LISTA DE PRODUCTOS ****************************
const socket = io.connect();

socket.on("container", (products) => {
  console.log(products);
});
//const template2 = Handlebars.compile('main.hbs'); //leyendo desde otro archivo

Handlebars.registerHelper("isEmpity", function (products) {
  if (products.length === 0) {
    return "<tr> <td colspan='3'> Not products found </td> </tr>";
  }
});

const template = Handlebars.compile(`
<div class="container-sm" id="div-tabla-products">
<table class="table" id = "table-desafio">
<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Foto</th>
    </tr>
</thead>
<tbody>
{{#isEmpity products}}
{{/isEmpity}}
    {{#each products}}
        <tr>
            <td>{{{name}}}</td>
            <td>$ {{{price}}}</td>
            <td><img src="{{thumbnail}}" alt="{{name}}" width="30px"></td>
        </tr>
    {{/each}}
       
</tbody>
</table> </div>`);

socket.on("container", (data) => {
  render(data);
});

function render(data) {
  const html = template({
    products: data,
  });
  document.getElementById("view-container").innerHTML = html;
}

function addProductForm(e) {
  const productObj = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    thumbnail: document.getElementById("thumbnail").value,
  };
  socket.emit("new-product", productObj);
  return false;
}

// ****************************** CENTRO DE MENSAJES ********************************

function addMessage(e) {
  const messageObj = {
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    date: new Date().toLocaleString(),
  };
  document.getElementById("message").value = "";
  socket.emit("new-message", messageObj);
  return false;
}

socket.on("messages", function (messagesDB) {
  tender(messagesDB);
});

function tender(messagesDB) {
  console.log(messagesDB);

  const html = messagesDB
    .map((elem) => {
      return `<div>
            <strong style="color:blue;">${elem.email}</strong>
            <em style="color:brown">[ ${elem.date} ]</em>:
            <i style="color:green", >${elem.message}</i> </div>`;
    })
    .join(" ");
  document.getElementById("messages").innerHTML = html;
}
