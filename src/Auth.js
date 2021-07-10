import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      const {user, session, error} = await supabase.auth.signIn({
        provider: 'facebook'
    })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }


  return (
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
              handleLogin()
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Sign in via Facebook</span>}
          </button>
        </div>
      </div>
    </div>
  )
}