const getAllHistoryControl = (req, res) => {
    res.send("Get all ");
  };
  
  const getOneHistoryControl = (req, res) => {
    res.send("Get an existing record");
  };
  
  const createNewHistoryControl = (req, res) => {
    res.send("Create a new record");
  };
  
  const updateOneHistoryControl = (req, res) => {
    res.send("Update an existing record");
  };
  
  const deleteOneHistoryControl = (req, res) => {
    res.send("Delete an existing record");
  };
  
  module.exports = {
    getAllHistoryControl,
    getOneHistoryControl,
    createNewHistoryControl,
    updateOneHistoryControl,
    deleteOneHistoryControl,
  };
  