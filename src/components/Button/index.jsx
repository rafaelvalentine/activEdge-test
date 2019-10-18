import React from 'react'
import { Logo } from '../Picture'
import Spinner from '../Tools/Spinner'
import * as ButtonStyle from './styles'

const PrimaryButton = ({ primaryContent, primaryClicked, loading, ...props }) => {
  return (
    <ButtonStyle.GreenButtonAlt disabled={loading} onClick={primaryClicked} {...props}>
      { loading ? <Spinner /> : primaryContent}
    </ButtonStyle.GreenButtonAlt>
  )
}


export default Button
