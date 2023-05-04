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

    # # convert the image to grayscale
    # img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # seperating the image into channels
    b, g, r = cv2.split(img)


    # generating the fourier spectrum of the image for all the channels seperately
    f1 = np.fft.fft2(b)
    fshift1 = np.fft.fftshift(f1)

    f2 = np.fft.fft2(g)
    fshift2 = np.fft.fftshift(f2)

    f3 = np.fft.fft2(r)
    fshift3 = np.fft.fftshift(f3)

    # taking magnitude spectrum for all the channels seperately
    magnitude_spectrum1 = 20*np.log(np.abs(fshift1))
    magnitude_spectrum2 = 20*np.log(np.abs(fshift2))
    magnitude_spectrum3 = 20*np.log(np.abs(fshift3))

    # merging the channels back
    magnitude_spectrum = cv2.merge((magnitude_spectrum1, magnitude_spectrum2, magnitude_spectrum3))

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

    # # convert the image to grayscale
    # img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # seperating the image into channels
    b, g, r = cv2.split(img)



    # since the image is the fourier spectrum, we use the radius and center to generate a mask in the image and set the other values to 0
    rows, cols, colours= img.shape
    crow, ccol = center
    mask = np.zeros((rows, cols), np.uint8)
    mask = cv2.circle(mask, (ccol, crow), radius, 1, -1)
    # stacking the mask to the number of channels
    mask = np.dstack((mask, mask, mask))

    if inverse == "True":
        mask = 1 - mask

    # generating the fourier spectrum of the image for all the channels seperately
    f1 = np.fft.fft2(b)
    fshift1 = np.fft.fftshift(f1)

    f2 = np.fft.fft2(g)
    fshift2 = np.fft.fftshift(f2)

    f3 = np.fft.fft2(r)
    fshift3 = np.fft.fftshift(f3)

    # applying the mask to the generated fourier spectrum
    fshift1 = fshift1 * mask[:,:,0]
    fshift2 = fshift2 * mask[:,:,1]
    fshift3 = fshift3 * mask[:,:,2]


    # taking magnitude spectrum for all the channels seperately
    magnitude_spectrum1 = 20*np.log(np.abs(fshift1))
    magnitude_spectrum2 = 20*np.log(np.abs(fshift2))
    magnitude_spectrum3 = 20*np.log(np.abs(fshift3))

    # merging the channels back
    magnitude_spectrum = cv2.merge((magnitude_spectrum1, magnitude_spectrum2, magnitude_spectrum3))

    # saving the image to a file (for testing)
    cv2.imwrite('temp2.png', magnitude_spectrum)

    # # performing inverse fourier transform for all the channels seperately
    f_ishift1 = np.fft.ifftshift(fshift1)
    img_back1 = np.fft.ifft2(f_ishift1)
    img_back1 = np.abs(img_back1)

    f_ishift2 = np.fft.ifftshift(fshift2)
    img_back2 = np.fft.ifft2(f_ishift2)
    img_back2 = np.abs(img_back2)

    f_ishift3 = np.fft.ifftshift(fshift3)
    img_back3 = np.fft.ifft2(f_ishift3)
    img_back3 = np.abs(img_back3)

    # merging the channels back
    img_back = cv2.merge((img_back1, img_back2, img_back3))


    # saving the image to a file (for testing)
    cv2.imwrite('temp3.png', img_back)

    # sending the image back to the client
    with open('temp3.png', 'rb') as f:
        b64_bytes = f.read()
        return jsonify({'image': base64.b64encode(b64_bytes).decode('utf-8')})


if __name__ == '__main__':
    app.run()
