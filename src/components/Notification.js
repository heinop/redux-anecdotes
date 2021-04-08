import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification.message)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const invisible = {
    display: 'none'
  }
  return (
    <div style={notification !== '' ? style : invisible}>
      {notification}
    </div>
  )
}

export default Notification