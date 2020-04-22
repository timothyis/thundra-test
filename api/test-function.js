module.exports = (req, res) => {
    console.log('hello!')
    res.json(process.env)
}