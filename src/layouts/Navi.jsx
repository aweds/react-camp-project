import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import CartSummary from './CartSummary'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const { cartItems } = useSelector(state => state.cart)
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
                        {cartItems.length > 0 && <CartSummary />}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
