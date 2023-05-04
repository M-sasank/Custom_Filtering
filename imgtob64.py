import base64
import cv2

# read the image
img = cv2.imread('Lena.png')

# encode the image
_, buffer = cv2.imencode('.png', img)

# convert to base64
b64_bytes = base64.b64encode(buffer)

# saving the image to a file
with open('image.txt', 'wb') as f:
    f.write(b64_bytes)