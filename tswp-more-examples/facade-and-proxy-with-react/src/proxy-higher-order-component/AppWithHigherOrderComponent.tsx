import { LogIn } from './components/LogIn'
import { UserData } from './components/UserData'
import { CurrentUserProvider } from './context/UserContext'
import { withAuth } from './hoc/withAuth'

const WithAuthUserData = withAuth(UserData)

export function AppWithHigherOrderComponent () {

	return (
		<CurrentUserProvider>
			<header className="hero is-primary mb-5">
				<div className="hero-body">
					<p className="title">
						<code>1.1</code> [Proxy] Higher Order Component
					</p>
				</div>
			</header>
			<main className="container">
				<LogIn />
				<WithAuthUserData />
			</main>
		</CurrentUserProvider>
	)
}
