const socket = io.connect();
// ****************************** LIST PRODUCTS ****************************
const template = Handlebars.compile(`
  {{#if products}}
    {{#each products}}
        <tr>
            <td>{{{name}}}</td>
            <td>$ {{{price}}}</td>
            <td><img src="{{thumbnail}}" alt="{{name}}" width="30px"></td>
        </tr>    
    {{/each}}
    {{else}} 
        <td colspan='3'> Not products found </td>
  {{/if}}  
  `);

socket.on('products-list', (products) => {
  renderProducts(products);
});

function renderProducts(products) {
  const html = template({ products });
  document.getElementById('tbody-products').innerHTML = html;
}

function addProductForm() {
  const productObj = {
    name: document.getElementById('name').value,
    price: document.getElementById('price').value,
    thumbnail: document.getElementById('thumbnail').value,
  };
  socket.emit('new-product', productObj);
  return false;
}