import { Route, Switch } from 'react-router';
import './App.css';
import Error from './components/Error';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import ResultPageContainer from './components/ResultPage/ResultPageContainer';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';

const App = () => { 
  return (
      <div className="App">
            <main>
                <Switch>
                    <Route exact path='/' render = {
                        ()=> <UsersPageContainer />
                    }/>

                    <Route path='/ProfilePage/:id' render = {
                        ()=> <ProfilePageContainer />
                    }/>

                    <Route path='/ResultPage' render = {
                        ()=> <ResultPageContainer /> 
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
