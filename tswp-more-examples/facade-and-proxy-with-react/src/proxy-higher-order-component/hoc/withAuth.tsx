import { ComponentType, useContext } from 'react'
import UserContext from '../context/UserContext'

// Proxy renderowania komponentów w zależności od tego, czy użytkownik jest zalogowany

// UWAGA: to jedynie przykład obrazujący wzorzec,
// teraz, zrobienie logiki autoryzacyjnej może się opierać o bardziej nowoczesne podejście z "hook'ami"
// czyli bez użycia Higher Order Component'u
export function withAuth(WrappedComponent: ComponentType) {

    const ComponentWithAuth = (props: any) => {

        const {isAuth} = useContext(UserContext)

        return <>
            {
                isAuth ?
                    <WrappedComponent {...props} />
                    :
                    <div className="notification is-warning my-3"> You need to log in to see this resource... </div>
            }
        </>
    };

    // Ładna reprezentacja nazwy nowego komponentu dla DevTools:
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    ComponentWithAuth.displayName = `withAuth(${displayName})`

    return ComponentWithAuth;
}
