import React from 'react'
import './styles.css'

const ErrorPage = props => {
  const goBack = e => {
    e.preventDefault()
    props.history.goBack()
  }
  const push = e => {
    e.preventDefault()
    props.history.push('/')
  }
  return (
    <div id='error404'>
      {/* <SVG /> */}
      {/* <img src={require('../../../../assets/images/404error.svg')} alt='' /> */}
      <div className='message-box'>
        <div className='message-text-div'>
          <h1>404</h1>
          <p>Oops! The page you are looking for doesn't exist</p>
        </div>

        <div className='buttons-con'>
          <div className='action-link-wrap'>
            <a onClick={goBack} href='/' className='link-button link-back-button'>Go Back</a>
            <a onClick={push} href='/' className='link-button'>Go to Home Page</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
