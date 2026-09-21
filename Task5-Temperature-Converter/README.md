# Temperature Converter

A responsive temperature converter web application built using HTML5, CSS3, and JavaScript.

## Project Overview

This project converts temperatures between:

- Celsius
- Fahrenheit
- Kelvin

The conversion happens instantly as the user enters a value.

## Features

- Convert Celsius to Fahrenheit and Kelvin
- Convert Fahrenheit to Celsius and Kelvin
- Convert Kelvin to Celsius and Fahrenheit
- Live conversion using the input event
- Input validation
- Absolute-zero validation
- Clear All button
- Responsive modern interface
- Rounded conversion results to two decimal places

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Conversion Formulas

### Celsius to Fahrenheit

F = (C × 9/5) + 32

### Celsius to Kelvin

K = C + 273.15

### Fahrenheit to Celsius

C = (F - 32) × 5/9

### Kelvin to Celsius

C = K - 273.15

## Validation

The application prevents invalid temperature values.

- Celsius cannot be below -273.15°C.
- Kelvin cannot be below 0 K.
- Invalid numeric input is handled with an error message.

## How It Works

The application uses JavaScript `input` events to detect changes in the input fields.

When the user enters a temperature, the corresponding conversion functions calculate the other temperature values and update the interface immediately.

## Project Structure

Task5-Temperature-Converter/
│
├── index.html
├── style.css
├── script.js
└── README.md

## How to Run
Download or clone the project.
Open the project folder.
Open index.html in a web browser.
Enter a temperature in any field.
The other temperature values will be calculated automatically.


## Learning Outcomes

Through this project, I practiced:

HTML form inputs
CSS responsive design
JavaScript functions
DOM manipulation
Input events
Number validation
Temperature conversion formula
