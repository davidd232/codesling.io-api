import express from 'express';

import {
  addChallengeController,
  getAllChallengesController
} from './challengeControllers';

const router = express.Router();

router.route('/')
  .post(addChallengeController);
router.route('/getAllChallenges')
  .get(getAllChallengesController);
export default router;
