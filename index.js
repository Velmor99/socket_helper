const io = require("socket.io")(4040, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
     console.log(socket.id)
     io.emit("welcome")
})