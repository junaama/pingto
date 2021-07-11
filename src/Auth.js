import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)

  const handleLogin = async (props) => {
    try {
      setLoading(true)
      const {user, session, error} = await supabase.auth.signIn({
        provider: props.provider
    })
      if (error) throw error
      alert(`Redirecting to ${props.provider}`);
      console.log("user: ", user);
      console.log("session: ", session)
    } finally {
      setLoading(false)
    }
  }

  const signInButton = (props) => {
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">Sign in via Facebook</p>
        <div>
        
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(props)
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Sign in via Facebook</span>}
          </button>
        </div>
      </div>
    </div>
  }

  return (
    <>
    {signInButton({"provider": "facebook"})}
    {signInButton({"provider": "twitter"})}
    </>
  )
}