import { useEffect, useState } from "react"
import supabase from "./supabase";
import App from "../App";
import SessionContext from "./sessionContext";

function Main() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const {data: { subscription }} = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSession(null)
        } else if (session) {
          setSession(session)
        }
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <SessionContext.Provider value={session}>
      <App />
    </SessionContext.Provider>
  )
}

export default Main;