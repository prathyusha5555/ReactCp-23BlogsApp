import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`blogs/${id}`} className="link-item">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="item-image" />
          <div className="item-details">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-details">
              <img src={avatarUrl} alt={`avtar${id}`} className="avtar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
