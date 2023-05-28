from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DIRECTORY = "src/app/json"

@app.route('/<path:filename>')
def serve_file(filename):
    return send_from_directory(DIRECTORY, filename)

if __name__ == '__main__':
    app.run(port=7654)