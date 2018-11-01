import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

class Account extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: true,
      showSaveButton: false,
      messsage: '',
      ...props
    }
    this._updatedInputElements = []
  }

  /**
   * toggle edit form
   * @private
   **/
  _toggleEdit = event => {
    event.preventDefault()
    const newState = { disabled: !this.state.disabled, message: '' }
    if (this.state.showSaveButton) {
      newState.showSaveButton = false
    }
    this.setState(newState)
  }

  /**
   * cancel edit form
   * @private
   **/
  _onCancel = event => {
    event.preventDefault()
    // reset state
    const newState = {
      disabled: true,
      showSaveButton: false,
    }
    this._updatedInputElements.forEach(input => {
      input.value = this.props[input.name]
      newState[input.name] = this.props[input.name]
    })
    this._updatedInputElements = []
    this.setState(newState)
  }

  /**
   * save new input values
   * @private
   **/
  _save = event => {
    event.preventDefault()
    Object.keys(this.state).forEach(key => {
      if (key !== 'disabled' && key !== 'children' && key !== 'showSaveButton') {
        localStorage.setItem(key, this.state[key])
      }
    })
    const { firstName, lastName, company, role, createdAt } = this.state
    this.props.onUpdate({
      firstName,
      lastName,
      company,
      role,
      createdAt
    })
    this.setState({ disabled: true, showSaveButton: false, message: 'Successfully updated your account.' })
  }

  /**
   * show save button when form is changed
   * @private
   **/
  _onBlur = event => {
    if (this.state[event.currentTarget.name] !== event.currentTarget.value.trim()) {
      const newState = { showSaveButton: true }
      newState[event.currentTarget.name] = event.currentTarget.value
      this.setState(newState)
    }

    this._updatedInputElements.push(event.currentTarget)
  }

  render() {
    const { disabled, firstName, lastName, email, phoneNumber, company, role, createdAt, message, showSaveButton, children } = this.state

    return(
      <div className="account">
        <h1>My Account</h1>
        <form className="account__form" onSubmit={this._save}>
          <label className="account__field">
            First Name
            <input
              required
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="firstName"
              type="text"
              defaultValue={firstName}
            />
          </label>

          <label className="account__field">
            Last Name
            <input
              required
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="lastName"
              type="text"
              defaultValue={lastName}
            />
          </label>

          <label className="account__field">
            Email
            <input
              required
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="email"
              type="text"
              defaultValue={email}
            />
          </label>

          <label className="account__field">
            Phone Number
            <input
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="phoneNumber"
              type="text"
              defaultValue={phoneNumber}
            />
          </label>

          <label className="account__field">
            Company
            <input
              required
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="company"
              type="text"
              defaultValue={company}
            />
          </label>

          <label className="account__field">
            Role
            <input
              required
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="role"
              type="text"
              defaultValue={role}
            />
          </label>

          <label className="account__field">
            Created At
            <input
              required
              className="account__input"
              onBlur={this._onBlur}
              disabled={disabled}
              name="createdAt"
              type="date"
              defaultValue={createdAt}
            />
          </label>

          {children}

          <div className="account__buttons">
            {!showSaveButton && disabled && <Button disabled={!disabled} onClick={this._toggleEdit} text="Update user data" />}
            {!disabled && <Button onClick={this._onCancel} text="Cancel" />}
            {showSaveButton && <Button disabled={disabled} type="submit" value="Submit" text="Save" />}
          </div>
          {message && <p className="account__message">{message}</p>}
        </form>
      </div>
    )
  }
}

Account.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default Account;
