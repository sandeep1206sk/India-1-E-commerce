const {register,login
  , updateProfileController, orderStatusController, getAllOrdersController, getOrdersController} = require('../controllers/authController')
const  express = require('express');
const { isAdmin, requireSignIn } = require('../middlewares/protectedRoute');


const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get('/user-auth', requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
});

router.get('/admin-auth', requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
});

router.put("/profile", requireSignIn, updateProfileController);

router.get("/orders", requireSignIn, getOrdersController);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


module.exports= router;
