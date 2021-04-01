const defaultNote = 'Wellcome to Anecdotes!'

export const setNote = (note) => {
  return {
    type: 'SET_NOTE',
    data: {
      note: note
    }
  }
}

const notificationRouter = (state = defaultNote, action) => {
  console.log('new Action:', action)

  switch (action.type) {
    case 'SET_NOTE':
      return action.data.note
    default:
      return state
  }
}

export default notificationRouter