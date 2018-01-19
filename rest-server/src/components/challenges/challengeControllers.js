import {
  addChallengeQuery
} from './challengeQueries';
import {
  addUserChallengeQuery
} from '../usersChallenges/usersChallengesQueries';
import {
  getChallengesQuery
} from './challengeQueries';
import {
  success,
  error
} from '../../lib/log';

export const addChallengeController = async (req, res) => {
  try {
    /**
     * 
     */
    const { rows } = await addChallengeQuery(req.body);
    success('addChallengeController - successfully added challenge ', rows[0]);
    req.body.challenge_id = rows[0].id;
    await addUserChallengeQuery(req.body);
    success('addUserChallengeQuery - successfully added user challenge ');
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addChallengeController - error= ', error);
  }
};

export const getAllChallengesController = async (req, res) => {
  try {
    const data = await getChallengesQuery();
    success('got all challenges cont', data);
    return res.status(200).send(data);
  } catch (err) {
    error('error getting challenges', err);
  }
}
