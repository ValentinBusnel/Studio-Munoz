import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import { Project1 } from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { CoverArt, PackshotParfum } from './Portfolio/Portfolio'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/project-1' component={Project1} />
      <Route exact path='/coverart' component={CoverArt} />
      <Route exact path='/packshotparfum' component={PackshotParfum} />
      <Route exact path='/About' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
