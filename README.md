### Filtering Options

- Dropdown for car brands (makes.json)
- Dropdown for hourly rental prices (with a step of $10)
- Input fields for defining mileage range

## Favorites Page

This page displays advertisements that the user has added to their favorites. It preserves the user's actions even after refreshing the page.

## Technical Specifications

- The project uses React for building the user interface.
- React Router is employed for navigation with the following routes:
  - `/`: Home page
  - `/catalog`: Catalog page
  - `/favorites`: Favorites page
- Advertisements are fetched from a personal backend created using the Mockapi service.

### Advert Resource (Mockapi)

The `adverts` resource has the following fields:

- id
- year
- make
- model
- type
- img
- description
- fuelConsumption
- engineSize
- accessories
- functionalities
- rentalPrice
- rentalCompany
- address
- rentalConditions
- mileage

### Additional Features

- Pagination: Each catalog page displays 12 advertisements, with the ability to load more.
- Favorites: Users can add/remove advertisements to/from their favorites, and the state persists after page refresh.
- Filtering: Users can filter advertisements by car brand, hourly rental price, and mileage range.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

Feel free to explore and enhance the application as needed. Happy coding!
