export default () => {
  const review = {
    id: 1,
    userId: 1,
    recipeId: 1,
    modifiedRecipe: ''
  };
  const userReviews = {
    1: {
      id: 1,
      userId: 1,
      recipeId: 1,
      modifiedRecipe: ''
    },
    2: {
      id: 2,
      userId: 1,
      recipeId: 2,
      modifiedRecipe: ''
    },
    3: {
      id: 3,
      userId: 2,
      recipeId: 1,
      modifiedRecipe: ''
    }
  };
  return {
    review,
    userReviews
  };
};