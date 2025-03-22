# Image Showcase

### Name : JANARTHANAN K
### Reg. No: 212223040072
### Date : 22-03-2025

## AIM:

Design and implement an interactive image gallery using JavaScript, HTML, and CSS. 

## ALGORITHM:

### Step:1
Display multiple images in a horizontal scrollable layout.
### Step:2
Each image must have a caption that appears when hovered over.
### Step:3
Include Next and Previous buttons to navigate through the images.
### Step:4
Use JavaScript to enhance interactivity (e.g., smooth sliding animations, hover effects).
### Step:5
Style the gallery using CSS for a visually appealing and responsive design.
### Step:6
Include a footer at the bottom of the page with the text "Learner's Name and Register Number".
### Step:7
Your solution should include well-structured HTML, CSS, and JavaScript code, ensuring smooth user experience and navigation.


## PROGRAM:

page.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Image Showcase</h1><br><br>
    <div class="gallery-container">
        <div class="gallery" id="gallery">
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(lblue).jpeg" alt="Image 1">
                <div class="caption">Caption 1 - Blue</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(lpink).jpg" alt="Image 2">
                <div class="caption">Caption 2 - Light Pink</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(white).jpg" alt="Image 3">
                <div class="caption">Caption 3 - White</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(Dred).jpeg" alt="Image 4">
                <div class="caption">Caption 4 - Dark Red</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(yellow).jpeg" alt="Image 5">
                <div class="caption">Caption 5 - Yellow</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(pink).jpg" alt="Image 6">
                <div class="caption">Caption 6 - Pink</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(red).jpeg" alt="Image 7">
                <div class="caption">Caption 7 - Red</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(sandal).jpeg" alt="Image 8">
                <div class="caption">Caption 8 - Sandal</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(violet).jpg" alt="Image 9">
                <div class="caption">Caption 9 - Violet</div>
            </div>
            <div class="image-container">
                <img src="C:\Users\admin\Image_Showcase\images\Rose(black).jpeg" alt="Image 10">
                <div class="caption">Caption 10 - Black</div>
            </div>
        </div>
    </div><br><br><br>
    <div class="controls">
        <button onclick="scrollGallery(-500)">Previous</button>
        <button onclick="scrollGallery(500)">Next</button>
    </div><br><br><br><br><br><br>
    <div class="footer">
        <p>&copy; 2025 Janarthanan K 212223040072. All rights reserved.</p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

style.css
```
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: rgb(34, 232, 176);
}
.gallery-container {
    position: relative;
    width: 80%;
    margin: auto;
    overflow: hidden;
}
.gallery {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 10px;
    white-space: nowrap;
}
.gallery img {
    width: 250px;
    height: 250px;
    margin: 10px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
    position: relative;
}
.gallery img:hover {
    transform: scale(1.1);
}
.caption {
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    width: 300px;
    text-align: center;
    padding: 5px;
    bottom: 10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
}
.image-container {
    position: relative;
    display: inline-block;
}
.image-container:hover .caption {
    opacity: 1;
}
.controls {
    margin-top: 20px;
}
.controls button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    font-size: 16px;
}
.controls button:hover {
    background-color: #0056b3;
}
.footer {
    margin-top: 20px;
    padding: 10px;
    background: #333;
    color: white;
}
```

script.js
```
function scrollGallery(direction) {
    document.getElementById('gallery').scrollBy({
        left: direction,
        behavior: 'smooth'
    });
}
```

## OUTPUT:

![alt text](<images/Screenshot (4).png>)

## RESULT:

The program for creating Interactive Image Gallery using HTML,CSS and Javascript is executed successfully.
