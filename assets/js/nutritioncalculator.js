const nutritionData = {
  "raw-vegetable": {
    ampalaya: { protein: 1, carbs: 4, fats: 0.2, calories: 20 },
    talong: { protein: 1, carbs: 6, fats: 0.2, calories: 25 },
    sitaw: { protein: 2, carbs: 7, fats: 0.1, calories: 33 },
    kalabasa: { protein: 1, carbs: 8, fats: 0.2, calories: 30 },
    sesame: { protein: 5, carbs: 23, fats: 49, calories: 573 },
    pechay: { protein: 1.4, carbs: 2.1, fats: 0.2, calories: 13 },
    kangkong: { protein: 2, carbs: 3, fats: 0.2, calories: 19 },
    bokchoy: { protein: 1.5, carbs: 2.2, fats: 0.2, calories: 13 },
    gabi: { protein: 1.5, carbs: 26, fats: 0.1, calories: 112 },
    kamatis: { protein: 0.9, carbs: 3.9, fats: 0.2, calories: 18 },
    repolyo: { protein: 1.3, carbs: 5.8, fats: 0.1, calories: 25 },
    carrots: { protein: 0.9, carbs: 9.6, fats: 0.2, calories: 41 },
    patatas: { protein: 2, carbs: 17, fats: 0.1, calories: 77 },
    mungbean: { protein: 3, carbs: 7, fats: 0.1, calories: 30 },
    sibuyas: { protein: 1.1, carbs: 9.3, fats: 0.1, calories: 40 },
    bawang: { protein: 0.5, carbs: 9, fats: 0.1, calories: 41 },
    sayote: { protein: 0.8, carbs: 4.5, fats: 0.1, calories: 19 },
    labong: { protein: 2.5, carbs: 5.2, fats: 0.3, calories: 27 },
    saluyot: { protein: 3.2, carbs: 5.6, fats: 0.1, calories: 30 },
    kamote: { protein: 2, carbs: 20, fats: 0.1, calories: 86 },
    munggo: { protein: 7, carbs: 19, fats: 0.5, calories: 105 },
    upo: { protein: 0.8, carbs: 3.2, fats: 0.1, calories: 15 },
    kundol: { protein: 0.4, carbs: 4, fats: 0.1, calories: 20 },
    zucchini: { protein: 1.2, carbs: 3.1, fats: 0.3, calories: 17 },
  },
  "cooked-vegetable": {
    ampalaya: { protein: 1.2, carbs: 5, fats: 0.3, calories: 25 },
    talong: { protein: 1.3, carbs: 8, fats: 0.3, calories: 35 },
    sitaw: { protein: 2.5, carbs: 8, fats: 0.2, calories: 40 },
    kalabasa: { protein: 1.2, carbs: 10, fats: 0.3, calories: 40 },
    pechay: { protein: 1.6, carbs: 3, fats: 0.3, calories: 18 },
    kangkong: { protein: 2.3, carbs: 4, fats: 0.3, calories: 25 },
    bokchoy: { protein: 1.8, carbs: 3, fats: 0.3, calories: 18 },
    gabi: { protein: 1.7, carbs: 30, fats: 0.1, calories: 130 },
    kamatis: { protein: 1, carbs: 4.5, fats: 0.3, calories: 22 },
    repolyo: { protein: 1.5, carbs: 6.5, fats: 0.2, calories: 28 },
    carrots: { protein: 1, carbs: 10, fats: 0.2, calories: 45 },
    patatas: { protein: 2.3, carbs: 20, fats: 0.2, calories: 90 },
    sibuyas: { protein: 1.2, carbs: 10, fats: 0.2, calories: 45 },
    bawang: { protein: 0.6, carbs: 9.5, fats: 0.2, calories: 45 },
    sayote: { protein: 1, carbs: 5, fats: 0.2, calories: 22 },
    labong: { protein: 2.8, carbs: 6, fats: 0.3, calories: 35 },
    saluyot: { protein: 3.5, carbs: 6, fats: 0.2, calories: 35 },
    kamote: { protein: 2.5, carbs: 25, fats: 0.2, calories: 110 },
    munggo: { protein: 8, carbs: 22, fats: 0.6, calories: 120 },
    upo: { protein: 1, carbs: 4, fats: 0.2, calories: 20 },
    kundol: { protein: 0.5, carbs: 5, fats: 0.2, calories: 25 },
    zucchini: { protein: 1.5, carbs: 4, fats: 0.4, calories: 21 },
  },
  fruits: {
    apple: { protein: 0.3, carbs: 25, fats: 0.2, calories: 95 },
    banana: { protein: 1.3, carbs: 27, fats: 0.3, calories: 105 },
    orange: { protein: 1.2, carbs: 15, fats: 0.1, calories: 62 },
    mango: { protein: 0.8, carbs: 24.7, fats: 0.6, calories: 99 },
    watermelon: { protein: 0.6, carbs: 8, fats: 0.2, calories: 30 },
    grapes: { protein: 0.6, carbs: 16, fats: 0.2, calories: 62 },
    papaya: { protein: 0.5, carbs: 14, fats: 0.3, calories: 59 },
    pineapple: { protein: 0.9, carbs: 13, fats: 0.1, calories: 50 },
    strawberry: { protein: 0.8, carbs: 7.7, fats: 0.3, calories: 32 },
    avocado: { protein: 2.0, carbs: 8.5, fats: 15, calories: 160 },
  },
  meat: {
    chicken_breast_fried: { protein: 30, carbs: 5, fats: 7, calories: 200 },
    chicken_breast_boiled: { protein: 31, carbs: 0, fats: 3.6, calories: 165 },
    chicken_breast_grilled: { protein: 30, carbs: 0, fats: 4, calories: 170 },
    pork_chop_fried: { protein: 24, carbs: 6, fats: 12, calories: 220 },
    pork_chop_boiled: { protein: 25, carbs: 0, fats: 9, calories: 180 },
    pork_chop_grilled: { protein: 25, carbs: 0, fats: 10, calories: 185 },
    beef_steak_fried: { protein: 26, carbs: 4, fats: 13, calories: 240 },
    beef_steak_boiled: { protein: 27, carbs: 0, fats: 11, calories: 210 },
    beef_steak_grilled: { protein: 27, carbs: 0, fats: 12, calories: 215 },
    ground_turkey_fried: { protein: 27, carbs: 3, fats: 12, calories: 230 },
    ground_turkey_boiled: { protein: 28, carbs: 0, fats: 10, calories: 200 },
    ground_turkey_grilled: { protein: 28, carbs: 0, fats: 11, calories: 205 },
    fish_fillet_fried: { protein: 21, carbs: 6, fats: 7, calories: 180 },
    fish_fillet_boiled: { protein: 22, carbs: 0, fats: 5, calories: 140 },
    fish_fillet_grilled: { protein: 22, carbs: 0, fats: 6, calories: 150 },
    lamb_chop_fried: { protein: 23, carbs: 4, fats: 16, calories: 250 },
    lamb_chop_boiled: { protein: 24, carbs: 0, fats: 14, calories: 220 },
    lamb_chop_grilled: { protein: 24, carbs: 0, fats: 15, calories: 230 },
  },
  RiceA: {
    "white rice": { protein: 2.1, carbs: 23, fats: 0.2, calories: 92 },
    "brown rice": { protein: 2.5, carbs: 23, fats: 0.5, calories: 95 },
    "corn rice": { protein: 2, carbs: 22, fats: 0.3, calories: 88 },
    "cassava rice": { protein: 1.8, carbs: 23, fats: 0.1, calories: 90 },
  },
  RiceB: {
    "fried rice": { protein: 3, carbs: 23, fats: 3, calories: 120 },
    "sticky rice (biko)": { protein: 2.5, carbs: 23, fats: 2.5, calories: 115 },
    "arroz caldo (congee)": {
      protein: 3.2,
      carbs: 23,
      fats: 2.8,
      calories: 118,
    },
    "sinangag (garlic fried rice)": {
      protein: 2.8,
      carbs: 23,
      fats: 3.5,
      calories: 125,
    },
    "egg rice": { protein: 5, carbs: 23, fats: 4, calories: 140 },
  },
  RiceC: {
    quinoa: { protein: 4, carbs: 23, fats: 1.9, calories: 108 },
    "red rice": { protein: 3.5, carbs: 23, fats: 0.5, calories: 100 },
    "black rice": { protein: 4.5, carbs: 23, fats: 0.8, calories: 110 },
    "adlai (Job's tears)": { protein: 4, carbs: 23, fats: 1.2, calories: 105 },
    "puto (rice cake)": { protein: 2, carbs: 25, fats: 0.5, calories: 100 },
  },
  dairy: {
    whole_milk: { protein: 3.2, carbs: 5, fats: 3.3, calories: 61 },
    skim_milk: { protein: 3.4, carbs: 5, fats: 0.1, calories: 35 },
    cheese: { protein: 25, carbs: 1, fats: 33, calories: 402 },
    yogurt: { protein: 10, carbs: 4, fats: 2, calories: 63 },
    butter: { protein: 0.1, carbs: 0, fats: 81, calories: 717 },
    cream: { protein: 2, carbs: 3, fats: 37, calories: 345 },
    sour_cream: { protein: 2.4, carbs: 4.6, fats: 20, calories: 206 },
    mayonnaise: { protein: 1, carbs: 0.6, fats: 75, calories: 680 },
    cream_cheese: { protein: 6, carbs: 3, fats: 34, calories: 350 },
    cottage_cheese: { protein: 11, carbs: 3.4, fats: 4.3, calories: 98 },
  },
};

let selectedIngredients = [];

document.getElementById("add-category-btn").addEventListener("click", () => {
  const categorySelect = document.getElementById("categories");
  const selectedCategories = Array.from(categorySelect.selectedOptions).map(
    (option) => option.value
  );

  if (selectedCategories.length === 0) {
    alert("Please select at least one category.");
    return;
  }

  // Show the ingredients container
  const ingredientsContainer = document.getElementById("ingredients-container");
  ingredientsContainer.classList.remove("hidden");

  // Populate ingredients options for all selected categories
  const ingredientsOptions = document.getElementById("ingredients-options");
  ingredientsOptions.innerHTML = ""; // Clear previously displayed options

  selectedCategories.forEach((category) => {
    if (nutritionData[category]) {
      const ingredientNames = Object.keys(nutritionData[category]);

      ingredientNames.forEach((ingredient) => {
        if (
          !ingredientsOptions.querySelector(`[data-ingredient="${ingredient}"]`)
        ) {
          const ingredientDiv = document.createElement("div");
          ingredientDiv.classList.add("ingredient-option");
          ingredientDiv.setAttribute("data-ingredient", ingredient);

          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = ingredient;

          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(ingredient));

          ingredientDiv.appendChild(label);
          ingredientsOptions.appendChild(ingredientDiv);

          checkbox.addEventListener("change", (event) => {
            if (event.target.checked) {
              selectedIngredients.push(ingredient);
            } else {
              selectedIngredients = selectedIngredients.filter(
                (item) => item !== ingredient
              );
            }
            updateResults();
          });
        }
      });
    }
  });
});

function addTag(ingredient) {
  const tagContainer = document.getElementById("tags-container");
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = ingredient;

  const removeButton = document.createElement("button");
  removeButton.textContent = "x";
  removeButton.onclick = () => {
    tag.remove();
    selectedIngredients = selectedIngredients.filter(
      (item) => item !== ingredient
    );
    updateResults();
  };

  tag.appendChild(removeButton);
  tagContainer.appendChild(tag);
}

function updateResults() {
  let totals = { protein: 0, carbs: 0, fats: 0, calories: 0 };

  selectedIngredients.forEach((ingredient) => {
    for (const category in nutritionData) {
      if (nutritionData[category][ingredient]) {
        const { protein, carbs, fats, calories } =
          nutritionData[category][ingredient];
        totals.protein += protein;
        totals.carbs += carbs;
        totals.fats += fats;
        totals.calories += calories;
      }
    }
  });

  document.getElementById("protein").textContent = totals.protein.toFixed(2);
  document.getElementById("carbs").textContent = totals.carbs.toFixed(2);
  document.getElementById("fats").textContent = totals.fats.toFixed(2);
  document.getElementById("calories").textContent = totals.calories.toFixed(2);

  const tagsContainer = document.getElementById("tags-container");
  tagsContainer.innerHTML = "";
  selectedIngredients.forEach((ingredient) => {
    addTag(ingredient);
  });
}
