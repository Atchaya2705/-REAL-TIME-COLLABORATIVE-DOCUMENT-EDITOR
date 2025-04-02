# -REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: Atchaya K

*INTERN ID*: CT04WF04

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

## Real-Time Collaborative Document Editor  

This real-time document editor allows multiple users to edit a document simultaneously with live updates. Built with React.js for a dynamic frontend, Node.js and Express.js for the backend, MongoDB for data storage, and WebSockets using Socket.io, this project ensures seamless real-time collaboration. The application is designed to handle multiple users editing the same document in real-time without conflicts, ensuring smooth synchronization of changes across all connected clients.  

Users can create or join a document by specifying a document ID. When a user joins a document, the current content is retrieved from the database and displayed in the text editor. Any changes made are instantly reflected to all users connected to the same document. The backend manages document storage in MongoDB and facilitates WebSocket connections for real-time updates.  

To set up the project, first, install all dependencies. For the backend, install Express, Socket.io, Mongoose, and dotenv by running `npm install express socket.io mongoose cors dotenv`. Configure the MongoDB connection by creating a `.env` file in the backend folder with `MONGO_URI=mongodb://localhost:27017/collabDB` and `PORT=5000`. The backend server listens for WebSocket events to broadcast document changes. Run the backend using `npm start`.  

For the frontend, install dependencies with `npm install socket.io-client`. The React component handles WebSocket communication, ensuring changes are synchronized. When a user types, the content updates across all clients instantly. Run the frontend using `npm start`.  

To use the editor, open `http://localhost:3000` in the browser and start typing. Another user joining the same document ID will see real-time updates. This allows collaborative document editing similar to Google Docs.  

This project is a foundation for a more advanced editor. Future improvements include user authentication, multiple document support, and rich-text formatting with Quill.js.   

## OUTPUT

