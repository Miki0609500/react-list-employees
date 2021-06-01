import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
  <ContentLoader
    className='card'
    speed={2}
    width={400}
    height={50}
    viewBox="0 0 500 130"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="59" cy="67" r="60" /> 
    <rect x="125" y="33" rx="0" ry="0" width="180" height="25" /> 
    <rect x="125" y="85" rx="0" ry="0" width="150" height="19" />
  </ContentLoader>
)

export default LoadingBlock