import React from 'react'
import {  Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import CartSummary from './CartSummary'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" >
                <Container>
                <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                    
                    <Menu.Menu position='right'>
                        <CartSummary/>
                        <SignedOut/>
                        <SignedIn />
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
