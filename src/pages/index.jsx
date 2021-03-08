import React from 'react'

import SketchWrapper from '../components/sketchWrapper'
import sketch from '../scripts/sketches/fissures'

const IndexPage = () => {
  return (
      <div className="layout-container">
          <div className="page-container">
              <SketchWrapper sketch={sketch}/>
          </div>
      </div>
  )
}

export default IndexPage
