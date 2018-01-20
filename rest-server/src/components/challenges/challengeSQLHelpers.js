export const addChallengeHelper = ({ title, content, difficulty, url }) => {
  return `
    INSERT INTO challenges (title, content, difficulty, rating, url)
    VALUES ('${title}', '${content}', ${difficulty}, 0, '${url}')
    RETURNING id, title, content, difficulty, url
  `;
}

export const getChallengesHelper = () => {
  return `SELECT * FROM challenges`;
};