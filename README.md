# Custom_Filtering

Custom Image Filtering In Spatial And Frequency Domain

## Parameters Required For The API Calls
### Spatial Domain Filtering
API call:- localhost:5000/spatial

Inputs Required In JSON
- "image" in base64 format
- "kernel" as 2d array

Output:- filtered "image" in base64 format in a JSON

### Frequency Domain Filtering 1
API call:- localhost:5000/frequency1

Inputs Required In JSON
- "image" in base64 format

Output:- Fourier Spectrum of the "image" in base64 format in a JSON

### Frequency Domain Filtering 2
API call:- localhost:5000/frequency2

Inputs Required In JSON
- "image" in base64 format
- "radius" as an integer
- "center" as a list of two integers
- "inverse" as a boolean (True or False)

Output:- Filtered "image" in base64 format in a JSON and the selected fourier spectrum image("spectrum")


