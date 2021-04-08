import anecdoteService from '../services/anecdotes'

const compareVotes = (a1, a2) => a2.votes - a1.votes

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const anecdoteToUpdate = { ...anecdote, votes: anecdote.votes + 1 }
    const updatedAnecdote = await anecdoteService.update(anecdoteToUpdate)
    dispatch ({
      type: 'UPDATE_ANECDOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const data = await anecdoteService.createNew(content)
    dispatch ({
      type: 'NEW_ANECDOTE',
      data
    })
  } 
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const data = await anecdoteService.getAll()
    dispatch ({
      type: 'INITIALIZE',
      data
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'UPDATE_ANECDOTE':
      return state.map(a => a.id === action.data.id ? action.data : a).sort(compareVotes)
    case 'NEW_ANECDOTE':
      return [ ...state, action.data ].sort(compareVotes)
    case 'INITIALIZE':
      return action.data.sort(compareVotes)
    default:
      return state.sort(compareVotes)
  }
}

export default reducer