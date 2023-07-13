import './index.css'
import {Component} from 'react'

class CommentItem extends Component {
  render() {
    const {item, onClickLike, onClickDelete} = this.props
    const {id, name, comment, profileBg, isLiked} = item
    const userProfile = name[0]
    const profile = `${profileBg} profile`
    const likeToggle = () => {
      onClickLike(id)
    }

    const onClickDeleteBtn = () => {
      onClickDelete(id)
    }

    const likeImg = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    const likeStyle = isLiked ? 'liked button-style' : 'button-style'

    return (
      <li className="comment-item-container">
        <div className="comment-details">
          <h1 className={profile}>{userProfile}</h1>
          <h1 className="name">{name}</h1>
          <p className="time">less than a minute ago</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="comment-response-container">
          <div className="like-container">
            <img className="like-img" src={likeImg} alt="like" />
            <button onClick={likeToggle} type="button" className={likeStyle}>
              Like
            </button>
          </div>
          <button className="delete-btn" type="button" data-testid="delete">
            <img
              onClick={onClickDeleteBtn}
              className="delete-btn-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default CommentItem
