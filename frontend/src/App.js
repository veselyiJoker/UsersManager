import { Route, Switch } from 'react-router';
import './App.css';
import Error from './components/Error';
import ProfilePage from './components/ProfilePage/ProfilePage';
import ResultPage from './components/ResultPage/ResultPage';
import UsersPage from './components/UsersPage/UsersPage';

const App = () => { 
  return (
      <div className="App">
            <main>
                <Switch>
                    <Route exact path='/' render = {
                        ()=> <UsersPage />
                    }/>

                    <Route path='/ProfilePage/:id' render = {
                        ()=> <ProfilePage />
                    }/>

                    <Route path='/ResultPage' render = {
                        ()=> <ResultPage /> 
                    }/>

                    
                    <Route path='/Error' render = {
                        ()=> <Error /> 
                    }/>

                    <Route path='*' render = {
                        ()=> <Error /> 
                    }/>
                </Switch>
            </main>
      </div>
  );
}

export default App;
