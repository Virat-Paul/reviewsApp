import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onClickLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const reviewObj = reviewsList[count]
    const {username, imgUrl, companyName, description} = reviewObj
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} className="profile-photo" alt={username} />
          <div className="arrows-name-container">
            <button className="arrow-button" type="button" testid="leftArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow-image"
                onClick={this.onClickLeftArrow}
              />
            </button>
            <p className="name">{username}</p>
            <button className="arrow-button" type="button" testid="rightArrow">
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow-image"
                onClick={this.onClickRightArrow}
              />
            </button>
          </div>
          <p className="sub-paragraph">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
