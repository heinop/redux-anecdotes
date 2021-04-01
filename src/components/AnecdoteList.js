import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  return (
    <div key={anecdote.key}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
      </div>
    </div> 
  )
}

const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => state.anecdotes)

  return (
    <div>
      { anecdotes.map(anecdote =>
        <Anecdote anecdote={anecdote} />
      )}
    </div>
  )
}

export default AnecdoteList