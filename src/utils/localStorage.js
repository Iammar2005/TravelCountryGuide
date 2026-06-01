export const getFavorites = () => {
    return JSON.parse(localStorage.getItem("favorites")) || []
  }
  
  export const saveFavorites = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }
  
  export const getWishlist = () => {
    return JSON.parse(localStorage.getItem("wishlist")) || []
  }
  
  export const saveWishlist = (wishlist) => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }