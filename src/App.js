import React from 'react';
import './style.css';

import Search from './Search';

export default function App() {
  return (
    <div className="ui grid container center aligned">
      <div className="column eight wide">
        <Search />
      </div>
    </div>
  );
}
