# Local Chat Application

This is a simple local chat application built using Node.js, Express, and Socket.io. It allows users to join a chat room and send messages to each other in real-time.

## Features

- Real-time messaging using Socket.io
- Basic profanity filtering
- Logs messages to a file
- Responsive UI with basic styling

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/local-chat-app.git
    cd local-chat-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application

1. Start the server:
    ```bash
    node app.js
    ```

2. Open your browser and navigate to:
    ```
    http://<your-ip-address>:3000
    ```

## Project Structure

- `app.js`: Main server file
- `public/`: Contains static files (HTML, CSS)
- `log.txt`: Log file for chat messages

## Dependencies

- express
- socket.io
- @2toad/profanity

## License

This project is licensed under the MIT License.