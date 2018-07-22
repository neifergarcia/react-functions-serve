import React from 'react'
import { connect } from 'react-redux'

import Helmet from 'react-helmet'

class View extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Home"
          meta={[
            {name: 'title', content: 'Home'},
            {name: 'description', content: 'Page Home'}
          ]}
        />        
        <section>
          <h2>This is Page Home</h2>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, null)(View)