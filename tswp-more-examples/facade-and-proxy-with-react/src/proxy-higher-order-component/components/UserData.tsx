import { useContext } from 'react'
import UserContext from '../context/UserContext'

export function UserData() {

    const user = useContext(UserContext)

    return <section className="mt-3 title is-4">
            UserName is: {user.name}
    </section>
}
