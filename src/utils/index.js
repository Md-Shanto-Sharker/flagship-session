export const getFavorites =()=>{
    const favorites = localStorage.getItem('favorites');
    if(favorites) return JSON.parse(favorites);
    return []
}

export const addFavorite = phone =>{
    const favorites = getFavorites()
    const isExits = favorites.find(p=>p.id===phone.id)
    if(isExits) return console.log('object');
    favorites.push(phone)
      localStorage.setItem('favorites',JSON.stringify(favorites))
}