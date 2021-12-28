import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import WorkPage from './components/WorkPage'
import MySkillPage from './components/MySkillPage'
function App() {
  return <div>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/work" component={WorkPage}/>
        <Route exact path="/skill" component={MySkillPage}/>
      </Switch>
    </ThemeProvider>
    
    </div>
    
}

export default App

