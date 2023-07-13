import './index.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onClickAddComment = () => {
    const {name, comment} = this.state
    const randomBackground = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const profileBg = initialContainerBackgroundClassNames[randomBackground]
    const newComment = {
      id: uuidV4(),
      name,
      comment,
      profileBg,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeNameInput = e => {
    this.setState({name: e.target.value})
  }

  onChangeCommentInput = e => {
    this.setState({comment: e.target.value})
  }

  onClickLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onClickDelete = id => {
    const {commentsList} = this.state
    const filterCommentsList = commentsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({commentsList: filterCommentsList})
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="main-container">
        <div className="container">
          <div className="elements-container">
            <div className="input-container">
              <h1 className="heading">Comments</h1>
              <p>Say something about 4.0 Technologies</p>
              <form>
                <input
                  className="name-input"
                  onChange={this.onChangeNameInput}
                  type="text"
                  placeholder="Your name"
                  value={name}
                />
                <textarea
                  rows="6"
                  className="comment-input"
                  onChange={this.onChangeCommentInput}
                  placeholder="Your Comment"
                  value={comment}
                >
                  {comment}
                </textarea>
              </form>

              <button
                className="add-comment-btn"
                onClick={this.onClickAddComment}
                type="button"
              >
                Add Comment
              </button>
            </div>
            <img
              className="add-comment-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <div className="comments-main-container">
            <div className="comments-count-container">
              <p className="comments-count">{count}</p>
              <p>Comments</p>
            </div>
            <ul className="comments-container">
              {commentsList.map(eachItem => (
                <CommentItem
                  key={eachItem.id}
                  item={eachItem}
                  onClickLike={this.onClickLike}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
