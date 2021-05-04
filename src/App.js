import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import { Project1 } from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { CoverArt, PackshotParfum, PackshotlightLogo, PersonalPosters, BookTraces, Monstrum, Venezuela, Passages, ArgonjiCapitales, CoverArtforVenezuelanDJMrJoy } from './Portfolio/Portfolio'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/project-1' component={Project1} />
      <Route exact path='/coverart' component={CoverArt} />
      <Route exact path='/CoverArtforVenezuelanDJMrJoy' component={CoverArtforVenezuelanDJMrJoy} />
      <Route exact path='/packshotparfum' component={PackshotParfum} />
      <Route exact path='/packshotlightLogo' component={PackshotlightLogo} />
      <Route exact path='/PersonalPosters' component={PersonalPosters} />
      <Route exact path='/Booktraces' component={BookTraces} />
      <Route exact path='/Monstrum' component={Monstrum} />
      <Route exact path='/Venezuela' component={Venezuela} />
      <Route exact path='/Passages' component={Passages} />
      <Route exact path='/ArgonjiCapitales' component={ArgonjiCapitales} />
      <Route exact path='/About' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App
