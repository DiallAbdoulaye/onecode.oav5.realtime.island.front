import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, TextInput } from 'evergreen-ui'
import MyRoute from './routes';
import './index.css'
import io from 'socket.io-client';

import openSocket from 'socket.io-client';
const socket = io.connect('http://ef2fc1e8.ngrok.io');
socket.on('connection', function(message) {
        alert('Le serveur a un message pour vous : ' + message);
    })
socket.emit('message', 'can u hear me ?');

function TextInputComponent(){
      return (
        <Component initialState={{ value: ''}}>
          {({ state, setState }) => (
            <TextInput
              onChange={e => setState({ value: e.target.value })}
              value={state.value}
            />
          )}
        </Component>
      )
}

ReactDOM.render(
  <MyRoute />,
  document.getElementById('root')
)
