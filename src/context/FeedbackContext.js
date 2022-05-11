import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Binh luan 1',
      rating: 2
    },
    {
      id: 2,
      text: 'Binh luan 2',
      rating: 5
    },
    {
      id: 3,
      text: 'Binh luan 3',
      rating: 1
    }
  ])
  
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  
  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
  }
  
  // Delte feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  // Update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item ))
  }
  
  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  
  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback
    }}>
      { children }
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext