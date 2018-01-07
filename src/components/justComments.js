import React from 'react'
import Helmet from 'react-helmet'

const Comments = () => (
  <React.Fragment>
    {/* <Helmet>
      <script async src='https://just-comments.com/w.js' />
    </Helmet> */}
    <div
      className='just-comments'
      data-locale='en_US'
      data-allowguests='true'
      data-apikey='9f6c1563-7766-492c-81db-09dd5ad572b3'
    />
    <script async src='https://just-comments.com/w.js' />
    <script src='https://www.google.com/recaptcha/api.js?onload=jcOnRecaptchaLoad&render=explicit' async defer />
  </React.Fragment>
)

export default Comments
