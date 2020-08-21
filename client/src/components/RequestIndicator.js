import React from 'react'
import { connect } from 'react-redux'

const Indicator = ({ inFlight }) => {
  return <div>
    { inFlight ? "in flight": "."}
  </div>
}

const mapState = (state) => ({
  inFlight: state.ui.requestInFlight
})
export default connect(mapState)(Indicator)
