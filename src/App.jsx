import React, { useState } from 'react';

import './App.scss';

import Contacts from './components/Contacts'
import Filters from './components/Filters'
import Topbar from './components/Topbar'

const App = () => {

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('name')

  return (
    <React.Fragment>
      <Topbar />

      <Filters search={setSearch} sort={sort} setSort={setSort} />

      <Contacts search={search} sort={sort} />
    </React.Fragment>
  )
}

export default App;