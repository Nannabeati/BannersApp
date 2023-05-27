// Write your code here.
import './index.js'
const BannerCardItem = props => {
  const {bannerElements} = props
  const {headerText, className, description} = bannerElements
  const cardContainer = `card-container ${className}`
  return {
    <li className="cardContainer">
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <div>
        <button className="button">"Show More"</button>
      </div>
    </li>
  }
}
