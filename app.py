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

    # sending the image back
    with open('temp.png', 'rb') as f:
        b64_bytes = f.read()
        return jsonify({'image': base64.b64encode(b64_bytes).decode('utf-8')})

@app.route('/frequency1', methods=['POST'])
def frequency1():
    # get the image from the request
    data = request.get_json()

    image = data['image']

    # decode the image from b64
    image = base64.b64decode(image)

    # saving the image to a file (for processing)
    with open('temp.png', 'wb') as f:
        f.write(image)

    # read the image
    img = cv2.imread('temp.png')

    # convert the image to grayscale
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # saving the image to a file
    cv2.imwrite('temp.png', img)


    # generating the fourier spectrum of the image
    f = np.fft.fft2(img)
    fshift = np.fft.fftshift(f)

    # taking magnitude spectrum
    magnitude_spectrum = 20*np.log(np.abs(fshift))


    # saving the image to a file (for testing)
    cv2.imwrite('temp.png', magnitude_spectrum)

    # read the image
    img = cv2.imread('temp.png')


    # sending the image back to the client
    with open('temp.png', 'rb') as f:
        b64_bytes = f.read()
        return jsonify({'image': base64.b64encode(b64_bytes).decode('utf-8')})

@app.route('/frequency2', methods=['POST'])
def frequency2():
    # getting the radius and center from the request
    data = request.get_json()

    radius = data['radius']
    center = data['center']
    inverse = data['inverse']


    # getting the image from the request
    image = data['image']

    # decode the image from b64
    image = base64.b64decode(image)

    # saving the image to a file (for processing)
    with open('temp2.png', 'wb') as f:
        f.write(image)

    # read the image
    img = cv2.imread('temp2.png')

    # convert the image to grayscale
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # since the image is the fourier spectrum, we use the radius and center to generate a mask in the image and set the other values to 0
    rows, cols = img.shape
    crow, ccol = center
    mask = np.zeros((rows, cols), np.uint8)
    mask = cv2.circle(mask, (ccol, crow), radius, 1, -1)
    if inverse == "True":
        mask = 1 - mask


    # generating the fourier spectrum of the image
    f = np.fft.fft2(img)
    fshift = np.fft.fftshift(f)

    # applying the mask to the generated fourier spectrum
    fshift = fshift * mask

    # taking magnitude spectrum
    magnitude_spectrum = 20*np.log(np.abs(fshift))

    # saving the image to a file (for testing)
    cv2.imwrite('temp2.png', magnitude_spectrum)

    # # performing inverse fourier transform to get the image back
    img_back = np.fft.ifftshift(fshift)
    img_back = np.fft.ifft2(img_back)
    img_back = np.abs(img_back)


    # saving the image to a file (for testing)
    cv2.imwrite('temp3.png', img_back)

    # sending the image back to the client
    with open('temp3.png', 'rb') as f:
        b64_bytes = f.read()
        return jsonify({'image': base64.b64encode(b64_bytes).decode('utf-8')})


if __name__ == '__main__':
    app.run()
