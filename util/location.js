const axios = require('axios');
const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    address
  )}`;

  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "YourAppName/1.0" } // Required by Nominatim
    });

    const data = response.data;

    if (!data || data.length === 0) {
      throw new HttpError(
        'Could not find location for the specified address.',
        422
      );
    }

    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon)
    };

  } catch (err) {
    throw new HttpError('Could not connect to location service.', 500);
  }
}

module.exports = getCoordsForAddress;
