import { useContext } from 'react'
import UserContext from '../context/UserContext'

export function LogIn() {

    const {logIn, logOut, isAuth} = useContext(UserContext)

    return <section>
        {
            isAuth ?
                <button className="button is-danger" onClick={() => logOut()}>Log Out</button>
            :
                <button className="button is-success" onClick={() => logIn('Krystyna')}>Log in User</button>
        }

    </section>
}
