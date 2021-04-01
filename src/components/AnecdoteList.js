import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  const voteClicked = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    const notification = `you voted '${anecdote.content}'`
    dispatch(setNotification(notification))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
    <div key={anecdote.key}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => voteClicked(anecdote)}>vote</button>
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