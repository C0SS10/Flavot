import "@/styles/RecipeMessage.css";
import recipesData from "@/utils/recipes.json";

interface Recipe {
  name: string;
  meal: string;
  restrictions: string;
  time: string;
  cuisine: string;
  type: string;
  complexity: string;
  instructions: string;
  link: string;
  image: string;
}

interface RecipeMessageProps {
  userInputs: string[];
}

interface RecipesData {
  recipes: Recipe[];
}

const recipes: RecipesData = recipesData;

export const RecipeMessage: React.FC<RecipeMessageProps> = ({ userInputs }) => {
  const filterRecipes = (): Recipe[] => {
    return recipes.recipes.filter(
      (recipe: Recipe) =>
        recipe.meal === userInputs[0] &&
        recipe.restrictions === userInputs[1] &&
        recipe.time === userInputs[2] &&
        recipe.cuisine === userInputs[3] &&
        recipe.type === userInputs[4] &&
        recipe.complexity === userInputs[5]
    );
  };

  // Select a random recipe from the filtered list
  const selectedRecipe = filterRecipes();
  
  if (selectedRecipe.length === 0) {
    return (
      <div className="message incoming">
        <p>Recipes not found</p>
      </div>
    );
  }

  const randomIndex = Math.floor(Math.random() * selectedRecipe.length);
  const recipe = selectedRecipe[randomIndex];

  const instructionsList = recipe.instructions.split("\n").map((instruction, index) => (
    <li className="instructions-list" key={index}>{instruction}</li>
  ));

  return (
    <div className="message incoming">
      <h3 className="recipe-name">{recipe.name}</h3>
      <p className="recipe-instructions">{instructionsList}</p>
      <img className="recipe-img" src={recipe.image} alt={recipe.name} />
      <a className="recipe-link" href={recipe.link} target="_blank">
        See full recipe
      </a>
    </div>
  );
};