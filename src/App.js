import { Container, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Resume from './components/Resume';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
 <Container>
   <Grid container>
      <Grid item xs ={12} sm={12} md ={4} lg={3} style={{backgroundColor:'blue'}}>
          <Profile/>
      </Grid>
         
      <Grid item xs style={{backgroundColor:'red'}}>
        <Header/>
        <Router>
          <Switch>

        <Route path='/portfolio'>
        <Portfolio/>
        </Route>
        <Route path='/'>

        <Resume/>  
{/* default page */}
        </Route>
          </Switch>
        </Router>
        <Footer/>
      </Grid>
   </Grid>
 </Container>
  );
}

export default App;
