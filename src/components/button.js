import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: linear-gradient(hsl(152, 37%, 46%), hsl(148, 37%, 46%));
  border-radius: 2px;
  border: none;
  box-shadow: 2px 3px 2px 0 hsla(270, 2%, 25%, .3);
  color: #ffffff;
  cursor: pointer;
  font-family: 'Source Sans Pro', 'Arial', sans-serif;
  font-weight: 600;
  font-size: inherit;
  line-height: 1;
  padding: .5em .75em;
  position: relative;
  transition: background .2s ease-out, box-shadow .2s ease-out, transform .2s ease-out;

  &:hover {
    box-shadow: 3px 4px 3px 1px hsla(270, 2%, 25%, .3);
    transform: translateY(-1px);
  }

  &:focus {
    background: linear-gradient(hsl(148, 37%, 46%), hsl(143, 37%, 46%));
    box-shadow: 3px 4px 3px 1px hsla(270, 2%, 25%, .3);
    transform: translateY(-1px);
    outline: none;
  }

  &:active {
    box-shadow: 0 1px 0 0 hsla(270, 2%, 25%, .3);
    background: linear-gradient(hsl(148, 37%, 46%), hsl(143, 37%, 46%));
  }
`

const Button = ({ text, ...rest }) => <StyledButton {...rest}>{text}</StyledButton>

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
