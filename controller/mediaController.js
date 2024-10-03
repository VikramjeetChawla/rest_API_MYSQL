// controllers/mediaController.js this file handels in crud operation


const Media = require('../model/mediaModel.js');  //imports the Media model from the mediaModel.js file located in the model directory.

// Create a new media entry 
exports.createMedia = (req, res) => {  ////: Defines a function that will be exported as createMedia. This function is used as a controller action for handling HTTP requests to create new media entries
  const { mobile_number, phone_number_id, media_id, filename } = req.body;  //This data is expected to be sent in the HTTP request payload when creating a media entry.
  const mediaData = {  //This object is used to pass data to the model.
    mobile_number,
    phone_number_id,
    media_id,
    filename
  };

  Media.create(mediaData, (err, result) => {  //Calls the create method on the Media model to insert the new media entry into the database.
    if (err) return res.status(500).send(err); //If there is an error, responds with a 500 status code and the error message.
    res.status(201).send({ message: 'Media entry created successfully', data: result }); //If the creation is successful, responds with a 201 status code and a success message along with the result.

  });
};




// Get media entry by mobile number
exports.getMediaByMobileNumber = (req, res) => {  
  const { mobile_number } = req.params;

  Media.findByMobileNumber(mobile_number, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send({ message: 'No entry found' });
    res.status(200).send(result);
  });
};




// Update media entry by mobile number
exports.updateMediaByMobileNumber = (req, res) => {
  const { mobile_number, media_id, filename } = req.body;

  const mediaData = {
    mobile_number,
    media_id,
    filename
  };




  Media.updateByMobileNumber(mediaData, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send({ message: 'No entry found to update' });
    res.status(200).send({ message: 'Media entry updated successfully' });
  });
};




// Delete media entry by media ID
exports.deleteMediaByMediaId = (req, res) => {
  const { media_id } = req.params;

  Media.deleteByMediaId(media_id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send({ message: 'No entry found to delete' });
    res.status(200).send({ message: 'Media entry deleted successfully' });
  });
};