const defaultNote = 'Wellcome to Anecdotes!'

export const setNotification = (note) => {
  return {
    type: 'SET_NOTE',
    data: {
      note: note
    }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTE'
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