'use strict';

const serverOutput = document.getElementById('server-message');
const clientInput = document.getElementById('user-message');
const sendButton = document.getElementById('send');

let isOnConnect = false;

// const socketURL = 'wss://server.onrender.com';
const socketURL = 'ws://localhost:9000';

let socket = new WebSocket(socketURL);

// ВАШ КОД