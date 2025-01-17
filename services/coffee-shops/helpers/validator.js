const addValidator = (data) => {
  const { place_id, name } = data;
  if (!place_id) {
    return { name: "place_id required", statusCode: 400 };
  } else if (place_id.length === 0) {
    return { name: "place_id required", statusCode: 400 };
  } else if (!name) {
    return { name: "name required", statusCode: 400 };
  } else if (name.length === 0) {
    return { name: "name required", statusCode: 400 };
  }
};

module.exports = {
  addValidator
};
