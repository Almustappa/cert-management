import React from 'react'
import Header from './Header'
import Footer from './Footer'

const BasicLayout = ({ children }) => {
  return (
    <div>
        <div>
            <Header />
        </div>

        <div>
            { children }
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default BasicLayout