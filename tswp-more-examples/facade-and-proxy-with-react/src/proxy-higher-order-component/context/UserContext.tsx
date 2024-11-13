import React, { ReactNode, useState } from 'react'

const UserContext = React.createContext({name: '', isAuth: false, logIn: (name: string) => {}, logOut: () => {}});

export function CurrentUserProvider({children}: {children: ReactNode}) {
	const [name, setName] = useState('')
	const [isAuth, setAuth] = useState(false)

	const logIn = (name: string) => {
		setName(name)
		setAuth(true)
	}

	const logOut = () => {
		setName('')
		setAuth(false)
	}

	return (
		<UserContext.Provider value={{name, isAuth, logIn, logOut}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContext
