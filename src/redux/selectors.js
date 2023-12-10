export const selectIsLoading = (state) => state.cars.isLoading;
export const selectFavorites = (state) => state.favorites.list;
export const selectCars = (state) => state.cars.items;
export const selectMake = (state) => state.filter.make;
export const selectPrice = (state) => state.filter.price;
