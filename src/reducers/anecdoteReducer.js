import anecdoteService from '../services/anecdotes'

const compareVotes = (a1, a2) => a2.votes - a1.votes

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
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
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const changedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
      return state.map(a => a.id === id ? changedAnecdote : a).sort(compareVotes)
    case 'NEW_ANECDOTE':
      return [ ...state, action.data ].sort(compareVotes)
    case 'INITIALIZE':
      return action.data
    default:
      return state.sort(compareVotes)
  }
}

export default reducer