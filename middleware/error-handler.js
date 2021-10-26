const errorHandler = (err, req, res, next) => {
  console.log('in handler')
  return res.status(500).json({ msg: 'something went wrong!'})
}

module.exports = errorHandler