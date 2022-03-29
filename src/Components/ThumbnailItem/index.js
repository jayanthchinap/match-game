import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, checkSelectedImage} = props
  const {thumbnailUrl, imageUrl} = thumbnailDetails
  const onClickThumbnail = () => {
    checkSelectedImage(imageUrl)
  }

  return (
    <li className="thumbnail-container">
      <button
        className="thumbnail-button"
        onClick={onClickThumbnail}
        type="button"
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
