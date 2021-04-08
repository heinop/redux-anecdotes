const defaultNote = { 
  message:'Wellcome to Anecdotes!',
  id: null
}

const setNotification = (message, id) => {
  return {
    type: 'SET_NOTE',
    data: {
      message,
      id
    }
  }
}

const removeNotification = () => {
  return {
    type: 'REMOVE_NOTE'
  }
}

export const showNotification = (message, time = 5000) => {
  return async dispatch => {
    let timeoutId = setTimeout(() => dispatch(removeNotification()), time)
    dispatch(setNotification(message, timeoutId))
  }
}

const notificationRouter = (state = defaultNote, action) => {
  console.log('new Action:', action)

  switch (action.type) {
    case 'SET_NOTE':
      if (state.id) {
        clearTimeout(state.id)
      }
      return action.data
    case 'REMOVE_NOTE':
      return {
        message: '',
        id: null
      }
    default:
      return state
  }
}

export default notificationRouter