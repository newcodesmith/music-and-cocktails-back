function validateDrinkPayload(drink) {
  const hasDrinkTitle =
    typeof drink.drink_title === 'string' && drink.drink_title.trim() !== '';
  const hasDescription =
    typeof drink.drink_description === 'string' &&
    drink.drink_description.trim() !== '';
  const hasIngredients =
    typeof drink.ingredients === 'string' && drink.ingredients.trim() !== '';
  const hasDirection =
    typeof drink.direction === 'string' && drink.direction.trim() !== '';

  if (!hasDrinkTitle || !hasDescription || !hasIngredients || !hasDirection) {
    return {
      valid: false,
      message:
        'drink_title, drink_description, ingredients, and direction are required strings',
    };
  }

  return { valid: true };
}

module.exports = {
  validateDrinkPayload,
};
