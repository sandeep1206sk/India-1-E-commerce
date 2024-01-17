const  express = require('express');
const { requireSignIn, isAdmin } = require('../middlewares/protectedRoute');
const { createCategoryController, updateCategoryController, categoryControlller, singleCategoryController, deleteCategoryCOntroller } = require('../controllers/categoryController');

const router = express.Router();

router.post('/create-category', requireSignIn,isAdmin,createCategoryController)

router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

  router.get("/get-category", categoryControlller);

  router.get("/single-category/:slug", singleCategoryController);
 
  router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );

module.exports= router;