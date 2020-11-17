// Events ignore errors. Should be handled by index.js
const createRoom = (io, socket, rooms, user) => {
	const room = rooms.createRoom();
	rooms.addUserToRoom(room, user);
	socket.join(room.name);
	return room;
};

const joinRoom = (io, socket, rooms, user, name) => {
	const room = rooms.findRoomByName(name);
	rooms.addUserToRoom(room, user);
	socket.join(room.name);
	return room;
};

const leaveRoom = (io, socket, rooms, user, room) => {
	socket.leave(room.name);
	rooms.removeUserFromRoom(room, user);
};

module.exports = {
	createRoom,
	joinRoom,
	leaveRoom,
};