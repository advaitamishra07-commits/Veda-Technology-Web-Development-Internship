# Currency Converter

A responsive web-based Currency Converter that allows users to convert amounts between different currencies using live exchange rates from a public API.

## Features

- Dynamic currency selection
- Amount input
- Currency conversion
- Currency swap button
- Live exchange rates
- Loading indicator
- Error handling
- Input validation
- Exchange-rate caching
- Responsive design
- Results rounded to 2 decimal places

## Technologies Used

- HTML5
- CSS3
- JavaScriptMove-Item "$HOME\Documents\CurrencyConverter" "$HOME\Documents\Veda-Technology-Web-Development-Internship"
- Fetch API
- Frankfurter Exchange Rate API

## API Used

Frankfurter API

https://api.frankfurter.dev/v2

## Project Structure

```text
CurrencyConverter/
│
├── index.html
├── style.css
├── script.js
└── README.md

## How It Works
The application fetches available currencies from the public API.
Currency options are populated dynamically.
Exchange-rate data is fetched using the Fetch API.
Exchange-rate data is cached and reused for subsequent conversions.
The selected amount and currencies are used to calculate the converted amount.
The result is displayed with two decimal places.

## Error Handling
The application handles:

Empty amount
Invalid amount
API request errors
Unavailable exchange rates
Internet connection problems
How to Run
Download or clone the project.
Open index.html in a web browser.
Enter the amount.
Select the From and To currencies.
Click Convert.
Responsive Design

The application works on both desktop and mobile screen sizes.


## Author

Currency Converter Web Development Internship Project
