const { Server } = require("socket.io");

let io;

const initializeSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        socket.emit("socket:ready", {
            message: "Websocket connection established."
        })
    });

    return io;
}

const emitTaskCreated = (task) => {
    if(!io) return;
    io.emit("task:created", {
        message: "Task created.",
        data: { task }
    });
}

const emitTaskUpdated = (task) => {
    if(!io) return;
    io.emit("task:updated", {
        message: "Task updated.",
        data: { task }
    });
}

const emitTaskDeleted = (task) => {
    if(!io) return;
    io.emit("task:deleted", {
        message: "Task deleted.",
        data: { task }
    });
}

module.exports = { initializeSocket, emitTaskCreated, emitTaskUpdated, emitTaskDeleted };