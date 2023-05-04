import base64
from flask import Flask, request, jsonify, make_response
import numpy as np
import cv2

app = Flask(__name__)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/spatial', methods=['POST'])
def convolve():
    # get the image and kernel from the request
    data = request.get_json()

    kernel = data['kernel']
    image = data['image']

    # decode the image from b64
    image = base64.b64decode(image)

    # saving the image to a file (for processing)
    with open('temp.png', 'wb') as f:
        f.write(image)

    # read the image
    img = cv2.imread('temp.png')

    # convert the kernel to a numpy array
    kernel = np.array(kernel)

    # convolve the image
    img = cv2.filter2D(img, -1, kernel)

    # saving the image to a file (for testing)
    cv2.imwrite('temp.png', img)

    # converting the image to base 64
    with open('temp.png', 'rb') as f:
        b64_bytes = f.read()
        return jsonify({'image': base64.b64encode(b64_bytes).decode('utf-8')})

if __name__ == '__main__':
    app.run()
