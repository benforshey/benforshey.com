import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

  // --theme__color--neutral-dark: hsl(144, 7%, 13%);
  // --theme__color--neutral-light: hsl(65, 43%, 95%);
  // --theme__color--primary: hsl(190, 84%, 24%);
  // --theme__color--secondary: hsl(39, 100%, 63%);
  // --theme__color--tertiary: hsl(152, 37%, 46%);

const Header = styled.header`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  padding: .75em 0;
  position: relative;

  &::before {
    background-image: linear-gradient(to right, hsl(39, 100%, 63%), hsl(152, 37%, 46%));
    content: '';
    height: 6px;
    position: absolute;
      top: 0;
      right: 0;
      left: 0;
  }

  h1 {
    flex: 1 2 100%;
    font-size: 1.333em;
    margin-top: 0;
  }

  nav {
    flex: 2 1 100%;

  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    flex: 1 1 auto;
    padding: 0 .25em;
    text-align: right;
  }

  a {
    text-decoration: underline red;
    text-decoration-skip: ink;
  }
`

class HeaderComponent extends React.Component {
  render (props) {
    return (
      <Header>
        <h1><Link to='/'>Ben Forshey</Link></h1>
        <nav>
          <ul>
            {this.props.links.map(link => <li key={link.href}><Link to={link.href}>{link.name}</Link></li>)}
          </ul>
        </nav>
      </Header>

    )
  }
}

HeaderComponent.propTypes = {
  links: PropTypes.array.isRequired
}

export default HeaderComponent
