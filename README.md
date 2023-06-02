# OpenAI Image Generator
This project utilizes OpenAI's powerful image generation capabilities through their API. The API key and port number are extracted from a .env file. The project consists of a frontend created using HTML, CSS, and JavaScript, and a backend implemented in JavaScript.

## Prerequisites
OpenAI API Key: Obtain an API key from OpenAI to access the image generation functionality.
Node.js: Install Node.js to run the backend server.
'''Installation
Clone the repository:

shell
Copy code
git clone https://github.com/your-username/openai-image-generator.git
cd openai-image-generator'''

''''Install the dependencies:

shell
Copy code
npm install '''
Create a .env file in the project root directory and add the following environment variables:

'''shell
Copy code
API_KEY=your_openai_api_key
PORT=your_port_number'''
Usage
Start the backend server:

'''shell
Copy code
npm run dev'''

Access the frontend:
Open your web browser and navigate to http://localhost:your_port_number (replace your_port_number with the port number you specified in the .env file).

Use the web interface to interact with the OpenAI image generator.

## Project Structure
public/ : Contains the frontend HTML, CSS, and JavaScript files.
src/ : Contains the backend JavaScript files.
src/server.js : Entry point for the backend server.
.env : Environment variable configuration file.

