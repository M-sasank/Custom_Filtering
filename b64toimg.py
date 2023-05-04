import base64
import cv2

# read the image from the txt file
with open('image.txt', 'rb') as f:
    b64_bytes = f.read()
    # decoding the image
    buffer = base64.b64decode(b64_bytes)
    # saving the image to a file (for testing)
    with open('b64toimg.png', 'wb') as f:
        f.write(buffer)