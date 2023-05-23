const express = require("express")

const app = express()

const port = process.env.PORT || 5000

const router = require("./routes")

app.use(router)

app.listen(port, () => {
  console.log("Server listening on http://localhost:%s", port)
})
