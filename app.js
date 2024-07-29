const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const fs = require("node:fs");
const profanity = require("@2toad/profanity").profanity;

function getIPAddress() {
	var interfaces = require("os").networkInterfaces();
	for (var devName in interfaces) {
		var iface = interfaces[devName];

		for (var i = 0; i < iface.length; i++) {
			var alias = iface[i];
			if (
				alias.family === "IPv4" &&
				alias.address !== "127.0.0.1" &&
				!alias.internal
			)
				return alias.address;
		}
	}
	return "0.0.0.0";
}

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "public\\index.html"));
});

app.get("/style.css", (req, res) => {
	res.sendFile(join(__dirname, "public\\style.css"));
});

io.on("connection", (socket) => {
    
	// console.log("a user connected");
	// socket.on("disconnect", () => {
	// 	console.log("user disconnected");
	// });

	socket.on("Chat Says:", (msg) => {
		try {
			fs.appendFileSync("log.txt", `${new Date()} ${msg} \n`);
		} catch (err) {
			console.error(err);
		}

		msg = profanity.censor(msg);

		io.emit("Chat Says:", msg);
	});

	socket.on("Join", (msg) => {
		try {
			fs.appendFileSync("log.txt", `${new Date()} ${msg} \n`);
		} catch (err) {
			console.error(err);
		}
		msg = profanity.censor(msg);
		io.emit("Chat Says:", msg);
	});
});

const ip = getIPAddress();

server.listen(3000, ip, () => {
	console.log(`server running at http://${ip}:3000`);
});
