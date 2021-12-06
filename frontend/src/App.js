import { Route, Switch } from 'react-router';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import ResultPageContainer from './components/ResultPage/ResultPageContainer';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';

const App = () => { 
  return (
    <Provider store={store}>
        <div className="App">
            <main>
                <BrowserRouter>
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
                </BrowserRouter>
            </main>
        </div>
    </Provider>
  );
}

export default App;
