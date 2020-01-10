import React from "react";
import RecipeHelper from "../../Helpers/Recipe";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream:src/Components/Detailed-View.js
import Context from "../Components/Context";
import "../Styles/Buttons.css";
=======
import Context from "../../Components/Context/Context";
// import "./src/Styles/Buttons.css";
>>>>>>> Stashed changes:src/Routes/Detailed_view/Detailed-View.js

export default class DetailedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      owner: {}
    };
  }

  static contextType = Context;
  static defaultProps = {
    match: { params: {} }
  };

  componentDidMount() {
    const { recipeid } = this.props.match.params;
    RecipeHelper.recipeById(recipeid).then(
      recipeData =>
        this.setState({
          recipe: recipeData
        }) +
        RecipeHelper.getRecipeOwnerData(recipeData.owner).then(ownerData => {
          this.setState({ owner: ownerData });
        })
    );
  }

  deleteRecipe = () => {
    RecipeHelper.delete(this.props.match.params.recipeid).then(
      this.props.history.push("/")
    );
  };

  deleteOption = () => {
    if (this.context.currentUser.id === this.state.recipe.owner) {
      return (
        <div className="delete-recipe-button-div">
          <button className="delete-recipe-button" onClick={this.deleteRecipe}>
            Delete Recipe
          </button>
        </div>
      );
    }
  };

  ownerOption = () => {
    if (this.context.currentUser.id === this.state.recipe.owner) {
      return (
        <div className="ownerSelectors">
          <Link
            className="editRecipe"
            to={`/Edit-Recipe/${this.state.recipe.id}`}
          >
            Edit Recipe
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="view">
        <div className="image-container">
          <div
            className="image"
            style={{ backgroundImage: `url(${this.state.recipe.image})` }}
          />
        </div>
        <p>Title:</p>
        <h2 className="recipe-title">{this.state.recipe.title}</h2>
        <p>Recipe Description: </p>
        <h3 className="recipeDescription">
          {this.state.recipe.recipe_description}
        </h3>
        <p>Recipe Ingredients:</p>
        <h3 className="recipeIngredients">
          {this.state.recipe.recipe_ingredients}
        </h3>
        <p>Time to make the recipe:</p>
        <h3>{this.state.recipe.time_to_make}</h3>
        <p>Owner:</p>
        <h3 className="recipeOwner">{this.state.recipe.owner}</h3>
        <span className="recipe-date_created">
          Date Created: {this.state.recipe.date_created}
        </span>
        <div>{this.deleteOption()}</div>
        <div>{this.ownerOption()}</div>
        <Link to="/">
          <button className="cancel-view">Cancel</button>
        </Link>
      </div>
    );
  }
}
