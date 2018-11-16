import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, TextInput } from 'evergreen-ui'
import './index.css'

ReactDOM.render(
  <div className="Alpha">
      <Component initialState={{ value: ''}}>
      {({ state, setState }) => (
        <TextInput
          onChange={e => setState({ value: e.target.value })}
          value={state.value}
        />
      )}
    </Component>
    <TextInput name="text-input-name" placeholder="Text input placeholder..."/>
    <Button appearance="primary">Start!</Button>
  </div>,
  document.getElementById('root')
)
