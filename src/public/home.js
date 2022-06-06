const socket = io.connect()
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
  `)

socket.on('products-list', (products) => {
  renderProducts(products)
})

function renderProducts (products) {
  const html = template({ products })
  document.getElementById('tbody-products').innerHTML = html
}

function addProductForm () {
  const productObj = {
    name: document.getElementById('name').value,
    price: document.getElementById('price').value,
    thumbnail: document.getElementById('thumbnail').value
  }
  socket.emit('new-product', productObj)
  return false
}
// ****************************** MESSAGE CENTER ****************************
function addMessage () {
  const messageObj = {
    email: document.getElementById('email').value,
    message: document.getElementById('textarea-message').value,
    date: new Date().toLocaleString()
  }
  document.getElementById('textarea-message').value = ''
  socket.emit('new-message', messageObj)
  return false
}
const templateMessage = Handlebars.compile(`
    {{#if messages}}
        {{#each messages}}
            <div class="message-container">
                <span class="message-email">{{email}}</span>
                <span class="message-date">{{date}}</span>
                <p class="message-text">{{message}}</p>
            </div>
        {{/each}}
        {{else}}
            <p>No messages found</p>
    {{/if}}                     
    `)
function renderMessages (messages) {
  const html = templateMessage({ messages })
  document.getElementById('messages-view-container').innerHTML = html
}

socket.on('messages-list', (messages) => {
  renderMessages(messages)
})
