import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import CartSummary from './CartSummary'
import { useNavigate } from 'react-router'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useNavigate()
    // çıkış yapma durumunu ayarlar
    function handleSignOut() {
        setIsAuthenticated(false)
        history("/") // v6 daki kullanımı push kullanılmıyor eski versiyondaki gibi
    }

    function handleSignIn() { 
        setIsAuthenticated(true)
      }

    return (
        <div>
            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut}/>
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
