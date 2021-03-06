
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Events from './Components/Events/Events';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import AllCourses from './Components/AllCourses/AllCourses';
import Footer from './Components/Footer/Footer';
import About from './Components/AboutUS/About';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path='/home'>
      <Home></Home>
        </Route>
        <Route exact path='/'>
      <Home></Home>
        </Route>
        <Route  exact path="/header">
      <Header></Header>
        </Route>
        <Route exact path="/courses">
          <Header></Header>
        <AllCourses></AllCourses>
        <Footer></Footer>
        </Route>
       
        <Route exact  path='/events'>
        <Header></Header>
          <Events></Events>
          <Footer></Footer>
        </Route>
        <Route exact path="/about">
          <Header></Header>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route exact path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
