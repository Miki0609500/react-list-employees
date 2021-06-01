import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={50}
    viewBox="0 0 400 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="17" y="14" rx="0" ry="0" width="140" height="29" />
  </ContentLoader>
)

export default LoadingBlock