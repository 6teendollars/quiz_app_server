import { Router } from "express";
const router = Router();

//controllers import
import * as controller from "../controllers/controller.js";

//api routes
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions)

router
  .route("/questions")
  .get(controller.getQuestions)//get
  .post(controller.insertQuestions)//post 
  .delete(controller.dropQuestions);//delete


  router.route('/result')
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult)

export default router;
 