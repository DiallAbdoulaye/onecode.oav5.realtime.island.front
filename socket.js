import io from 'socket.io-client'
const socket = io('http://localhost')

//le nickname sera la valeur récupérer dans le textearea

socket.on('join', (nickname) => {
  console.log(`${nickname} has joined the channel`)
  socket.nickname = nickname

  socket.emit('hello', 'Welcome the my page of games!')
})
