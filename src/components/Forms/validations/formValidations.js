/* eslint-disable no-useless-escape */
export const name = {
  required: {
    value: true,
    message: 'user name is required',
  },

  minLength: {
    value: 3,
    message: 'user name should have at least 3 characters',
  },

  maxLength: {
    value: 20,
    message: 'user name must have 20 characters maximum',
  },
}

export const password = {
  required: {
    value: true,
    message: 'password is required',
  },

  minLength: {
    value: 8,
    message: 'the password should have at least 8 characters',
  },

  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
    message:
      'password should contain at leasr a capital letter, a number or a special caracter',
  },
}

export const confirmPassword = (watch) => {
  return {
    required: {
      value: true,
      message: 'please confirm your password',
    },

    validate: (value) =>
      value === watch('password') || 'password does not match',
  }
}

export const email = {
  required: {
    value: true,
    message: 'email is required',
  },

  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'invalid email',
  },
}
