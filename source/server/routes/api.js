/**
 * Created by sylflo on 10/11/15.
 */

var authController = require('../oauth/controllers/auth');
var userController = require('../API/controllers/users');
var ingredientsController = require('../API/controllers/ingredients');
var typesController = require('../API/controllers/types');
var groupsController = require('../API/controllers/groups');
var recipesController = require('../API/controllers/recipes');
var allergiesController = require('../API/controllers/allergies');
var searchController = require('../API/controllers/search');
var express = require('express');
var router = express.Router();


/* Endpoints for User */
router.route('/users')
    .get(userController.getUsers);

router.route('/users/register')
    .post(userController.postUser);

router.route('/users/sign-in')
    .post(userController.signinUser);

// add for oAuth
//   .get(authController.isAuthenticated, userController.getUsers);

module.exports = router;


/*
 ** Endpoints for Ingredients
 */
//full JSON endpoints
router.route('/ingredients')
    .post(ingredientsController.postIngredient)
    .delete(ingredientsController.deleteIngredients)
    .get(ingredientsController.getAllIngredients);

//endpoints by id
router.route('/ingredients/id/:id')
    .delete(ingredientsController.deleteIngredientById)
    .put(ingredientsController.putIngredientById)
    .get(ingredientsController.getIngredientById);

//endpoints by name
router.route('/ingredients/name/:name')
    .delete(ingredientsController.deleteIngredientByName)
    .put(ingredientsController.putIngredientByName)
    .get(ingredientsController.getIngredientsByName);

/*
 ** Endpoints for Types
 */
//full JSON endpoints
router.route('/types')
    .post(typesController.postType)
    .delete(typesController.deleteTypes)
    .get(typesController.getAllTypes);

//endpoints by id
router.route('/types/id/:id')
    .delete(typesController.deleteTypeById)
    .get(typesController.getTypeById);

//endpoints by name
router.route('/types/name/:name')
    .delete(typesController.deleteTypeByName)
    .get(typesController.getTypesByName);

/*
 ** Endpoints for Groups
 */
//full JSON endpoints
router.route('/groups')
    .post(groupsController.postGroup)
    .delete(groupsController.deleteGroups)
    .get(groupsController.getAllGroups);

//endpoints by id
router.route('/groups/id/:id')
    .delete(groupsController.deleteGroupById)
    .put(groupsController.putGroupById)
    .get(groupsController.getGroupById);

//endpoints by name
router.route('/groups/name/:name')
    .delete(groupsController.deleteGroupByName)
    .put(groupsController.putGroupByName)
    .get(groupsController.getGroupByName);


/*
** Endpoints for Recipes
*/

router.route('/recipes')
    .post(recipesController.postRecipe)
    .delete(recipesController.deleteRecipes)
    .get(recipesController.getAllRecipes);

router.route('/recipes/id/:id')
    .put(recipesController.putRecipeById)
    .delete(recipesController.deleteRecipeById)
    .get(recipesController.getRecipeById);

router.route('/recipes/title/:title')
    .put(recipesController.putRecipeByTitle)
    .delete(recipesController.deleteRecipeByTitle)
    .get(recipesController.getRecipeByTitle);

/*
** Endpoints for Allergies
*/
/*
// full JSON endpoints
router.route('/allergies')
    .post(allergiesController.postAllergy)
    .delete(allergiesController.deleteAllergies)
    .get(allergiesController.getAllAllergies)

// endpoints by id
router.route('/allergies/id/:id')
    .put(allergiesController.putAllergyById)
    .delete(allergiesController.deleteAllergyById)
    .get(allergiesController.getAllergyById)

// endpoints by name
router.rout('/allergies/name/:name')
    .put(allergiesController.putAllergyByName)
    .delete(allergiesController.deleteAllergyByName)
    .get(allergiesController.getAllergyByName)
*/

/*
** Endpoints for Search
*/


//router.route('/suggestions')
//   .get(suggestionsController.getSuggestions);


/*
** Endpoints for Suggestions
*/

//router.route('/suggestions')
//   .get(suggestionsController.getSuggestions);


module.exports = router;
