class CustomError extends Error {
  constructor(status, message) {
    super(message)
  }


}

const createCustomError = (message) => new CustomError(message);