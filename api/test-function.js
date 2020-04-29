module.exports = (req, res) => {
    console.log('hello!')
    console.error('wow')
    res.json({hello: "hello!")
}
