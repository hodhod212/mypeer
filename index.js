Object.defineProperty(exports, "__esModule", { value: true });
var peer_1 = require("peer");
(0, peer_1.PeerServer)({ port: 9001, path: "/" });

module.exports = app;
