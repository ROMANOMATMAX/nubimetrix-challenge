export const getRecipes = async () => {
  return fetch(import.meta.env.VITE_APP_API_BASE_URL)
    .then(res => res.json())
    .then( recipes => {
      console.log(recipes);
      return recipes;
  })
};