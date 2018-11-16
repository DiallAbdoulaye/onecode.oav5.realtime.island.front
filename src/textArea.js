import React, { Component } from 'react';

<Component initialState={{ value: ''}}>
  {({ state, setState }) => (
    <TextInput
      onChange={e => setState({ value: e.target.value })}
      value={state.value}
    />
  )}
</Component>
