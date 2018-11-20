

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
