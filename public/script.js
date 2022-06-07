let socket = io()
let input = document.querySelector('input')
let form = document.querySelector('form')
let messages = document.querySelector('ul')

form.addEventListener('submit', submitMessage)

function submitMessage(event){
    event.preventDefault()
    
    if (input.value) {
      socket.emit('message', input.value)
      input.value = ''
    }
  }
  
  socket.on('message', message => {
    messages.appendChild(Object.assign(document.createElement('ul'), { textContent: message }))
    messages.scrollTop = messages.scrollHeight
  })