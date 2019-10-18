import React, { Fragment } from 'react'
import * as Com from './styles'

/**
 *  Name component to Display Name and profile of Admin and toggle dropdown
 */
export const Name = ({ name, alt, icon, clicked, children, imageClassName, ...props }) => {
  // const Label = marginBot ? Form.NoMLabel : Form.Label
  return (
    <Fragment>
      <Com.NameContainer onClick={clicked}>
        <Com.PairSpace>
          {/* <Form.Input name={name} {...props} /> */}
          <Com.NameSpan>{ name || 'John kransinsky' }</Com.NameSpan>
          <Com.IMG src={icon} alt={alt} {...props} />
        </Com.PairSpace>

      </Com.NameContainer>
      {children}
    </Fragment>
  )
}
