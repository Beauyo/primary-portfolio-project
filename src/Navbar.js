import React from 'react'
import { Menu, } from 'semantic-ui-react'

const Navbar = () => (
    <Menu color='green inverted'>
        <Menu.Item>
            Primary Protfolio Project
        </Menu.Item>
        <Menu.Item>
            Item 1
        </Menu.Item>
        <Menu.Item>
            Item 2
        </Menu.Item>
        <Menu.Item>
            Item 3
        </Menu.Item>
        <Menu.Menu position='right'>
            login
        </Menu.Menu>
        <Menu.Item>
            Register
        </Menu.Item>
    </Menu>
)

export default Navbar