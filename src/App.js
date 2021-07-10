import './App.css';
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import { useEffect, useState } from 'react';
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  const [session, setSession] = useState(null);

  useEffect(()=> {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session)=> {
      setSession(session)
    })
  },[])
  return (
    
       <div className="App">
      <h1>PingTo</h1>
      {!session ? <Auth/> : <Account key={session.user.id} session={session}/>}
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/"></Route>
        <Route path="/"></Route>
      </Switch>
    </div>
    
   
  );
}

export default App;
