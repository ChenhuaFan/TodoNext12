import { signIn, signOut, useSession } from "next-auth/react";

function Login(params) {

    const { data: session } = useSession();

    return (<div>
        {session && session.user ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}
    </div>)
}

export default Login;