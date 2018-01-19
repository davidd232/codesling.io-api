export const addMessageHelper = (body) => {
  console.log('body in addmesshelp', body);
  return `
      INSERT INTO messages (message, username, roomname)
      VALUES ('${body.message}', '${body.username}', '${body.roomname}')
      RETURNING message, username, roomname
    `;
}

export const getAllMessages = () => {
  return `
    SELECT 
      * 
    FROM 
      messages
    ORDER BY
      id DESC
  `;
}

export const deleteAllMessagesHelper = (body) => {
  return `
    DELETE FROM
      messages
    WHERE
      roomname = ('${body.roomname}')
  `;
}
