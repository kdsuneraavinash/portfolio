from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DIRECTORY = "src/app/json"

@app.route('/')
def serve_folder():
    return send_from_directory(DIRECTORY, 'index.html')

@app.route('/<path:filename>')
def serve_file(filename):
    return send_from_directory(DIRECTORY, filename)

if __name__ == '__main__':
    app.run(port=8000)