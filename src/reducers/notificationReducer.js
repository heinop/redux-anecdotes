const defaultNote = 'Wellcome to Anecdotes!'

const setNotification = (note) => {
  return {
    type: 'SET_NOTE',
    data: {
      note: note
    }
  }
}

const removeNotification = () => {
  return {
    type: 'REMOVE_NOTE'
  }
}

export const showNotification = (content, time = 5000) => {
  return async dispatch => {
    dispatch(setNotification(content))
    setTimeout(() => dispatch(removeNotification()), time)
  }
}

const notificationRouter = (state = defaultNote, action) => {
  console.log('new Action:', action)

  switch (action.type) {
    case 'SET_NOTE':
      return action.data.note
    case 'REMOVE_NOTE':
      return ''
    default:
      return state
  }
}

export default notificationRouter