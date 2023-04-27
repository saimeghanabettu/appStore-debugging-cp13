import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="appItem-list-container">
      <img src={imageUrl} alt={appName} className="app-item-image" />
      <p className="app-text">{appName}</p>
    </li>
  )
}
export default AppItem
