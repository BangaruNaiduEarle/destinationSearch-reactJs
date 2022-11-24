// Write your code here
import './index.css'

const DestinationItem = props => {
  const {listItems} = props
  const {imgUrl, name, id} = listItems
  console.log(id)
  return (
    <li className="list-item">
      <img src={imgUrl} alt={name} className="image-ele" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
