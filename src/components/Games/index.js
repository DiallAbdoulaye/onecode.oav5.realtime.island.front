import React from 'react';
import { Button, TextInput } from 'evergreen-ui'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="Alpha">
    <nav className='App-nav'>
          <Link to='/'>Home</Link> &nbsp; &nbsp;
          <Link to='/magic'>Magic</Link> &nbsp; &nbsp;
          <Link to='/quick'>Quick</Link> &nbsp; &nbsp;
          <Link to='/fast'>Fast</Link>
    </nav>
  </div>
);

export default Home;
