const app = require('express')()
const cors = require('cors')
const PORT = process.env.PORT || 8080

let count = 0

app.use(cors())

const latency = (req, res, next) => {
  setTimeout(next, 500)
}

app.get('/', latency, (req, res, next) => {
  return res.json({ count })
})

app.post('/increment', latency, (req, res, next) => {
  count += 1
  return res.json({ count })
  // res.status(500).send()
})

app.post('/decrement', latency, (req, res, next) => {
  count -= 1
  return res.json({ count })
})

app.listen(PORT, (e) => {
  if (e) throw e
  console.log('listening on port', PORT)
})
