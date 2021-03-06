import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import github from '../images/github.svg'

const Header = styled.header`
align-items: baseline;
grid-column: gutter;
grid-row: header;
display: flex;
justify-content: space-between;
padding: .75em 0;
position: relative;

&::before {
  background-image: linear-gradient(
    to right,
    hsla(152, 37%, 46%, 1),
    hsla(52, 100%, 65%, 1),
    hsla(152, 37%, 46%, 1)
  );
  content: '';
  height: 4px;
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
  align-items: baseline;
  justify-content: flex-end;
  display: flex;
  flex: 1 1 auto;
  padding: 0 .25em;

  img {
    width: 1.25em;
  }
}
`

class HeaderComponent extends React.Component {
  render (props) {
    return (
      <Header>
        <h1><Link to='/'>Ben Forshey</Link></h1>
        <nav>
          <ul>
            {this.props.links.map(link =>
              <li key={link.href}>
                <Link
                  to={link.href}
                >{link.name}</Link>
              </li>
            )}
            <li>
              <a href='https://github.com/benforshey' rel='noopener' target='_blank'>
                <img src={github} alt='github profile of Ben Foshey' />
              </a>
            </li>
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
