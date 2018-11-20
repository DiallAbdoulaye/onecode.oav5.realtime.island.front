import React from 'react'
import { Button, TextInput } from 'evergreen-ui'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="Alpha">
    <h1>Games</h1>
    <TextInput name="text-input-name" placeholder="Nickname" required/>
    <Button appearance="primary">
      <Link to='/games'>Start!</Link>
    </Button>
  </div>
);

export default Home;
