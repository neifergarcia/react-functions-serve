import React from 'react'
import { connect } from 'react-redux'

import Helmet from 'react-helmet'

import eneConfigApp from './../config'
import { RoutesMain } from './../routes'

class App extends React.Component {
  constructor(props) {
    super(props);
    const { logged } = props
    console.log(`User is logged: ${logged}`)
  }

  render() {
    return (
      <section>
        <Helmet
          htmlAttributes={{lang: "en"}}
          titleTemplate={`%s | ${eneConfigApp.title} `}
          meta={[
            {name: 'title', content: eneConfigApp.title},
            {name: 'description', content: eneConfigApp.description},            
          ]}
          defaultTitle={eneConfigApp.title}
          link={[
            {rel: 'canonical', href: eneConfigApp.url},
          ]}
        />
        <div>
          <RoutesMain />
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state) => ({
  logged: state.logged
})

export default connect(mapStateToProps, null)(App)