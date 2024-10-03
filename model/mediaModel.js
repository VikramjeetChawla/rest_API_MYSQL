
// models/mediaModel.js 


const database = require('../configuration/database.js');  //imports the database module which contain database connection

const Media = { //define the media which is created below
  create: (mediaData, callback) => {  
                                                  //mediaData, which is an object containing data to be inserted into the database, and callback, a function to handle the result of the database query.

    const query = `INSERT INTO media_info (mobile_number, phone_number_id, media_id, filename) VALUES (?, ?, ?, ?)`;

                                                  //SQL query to insert a new record into the media_info table. The ? placeholders are used to safely insert values into the query to prevent SQL injection.

    database.query(query, [mediaData.mobile_number, mediaData.phone_number_id, mediaData.media_id, mediaData.filename], callback);
  },  

  findByMobileNumber: (mobile_number, callback) => {
    const query = `SELECT * FROM media_info WHERE mobile_number = ?`;
    database.query(query, [mobile_number], callback);
  },

  updateByMobileNumber: (mediaData, callback) => {
    const query = `UPDATE media_info SET media_id = ? WHERE mobile_number = ?`;
    database.query(query, [mediaData.media_id, mediaData.mobile_number], callback);
  },

  deleteByMediaId: (media_id, callback) => {
    const query = `DELETE FROM media_info WHERE media_id = ?`;
    database.query(query, [media_id], callback);
  }
};

module.exports = Media;