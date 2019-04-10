import React from 'react'
import { Field, reduxForm } from 'redux-form'

let addListForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
        <Field name="title" component="input"  />
        <button type="submit">Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'add'
})(addListForm)
