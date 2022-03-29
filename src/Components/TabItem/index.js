import './index.css'

const TabItem = props => {
  const {details, isActive, changeActiveTab} = props
  const {tabId, displayText} = details
  const tabClassName = isActive ? 'tab-name active-tab' : 'tab-name'
  const onClickTab = () => {
    changeActiveTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" className={tabClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
