from flask import Flask, send_from_directory, request, jsonify
import os

app = Flask(__name__, static_folder='dist')  # Point to your build directory

# Path to your Beancount file
FILE_PATH = '/Users/yihsiu/Dropbox/beancount/journal/2024.bean'

# Serve the static files (PWA)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_pwa(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        # Serve existing files
        return send_from_directory(app.static_folder, path)
    else:
        # Serve index.html for React Router to handle routing
        return send_from_directory(app.static_folder, 'index.html')

# API endpoint
@app.route('/api', methods=['POST'])
def append_to_file():
    data = request.get_data(as_text=True)
    if not data:
        return jsonify({'status': 'error', 'message': 'No data received'}), 400

    try:
        os.makedirs(os.path.dirname(FILE_PATH), exist_ok=True)
        with open(FILE_PATH, 'a') as f:
            f.write(data + '\n')
        return jsonify({'status': 'success', 'message': 'Data appended to file'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    # Run the app on all network interfaces so it's accessible from your phone
    app.run(host='0.0.0.0', port=9009)
