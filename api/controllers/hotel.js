// Models
import Hotel from '../models/Hotel.js';

export async function createHotel(req, res, next) {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
}

export async function updatedHotel(req, res, next) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
}

export async function deleteHotel(req, res, next) {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel has been deleted.');
  } catch (error) {
    next(error);
  }
}

export async function getHotelById(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
}

export async function getAllHotels(req, res, next) {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
}
export async function countByCity(req, res, next) {
  const cities = req.query.cities.split(',');
  try {
    const list = await Promise.all(
      cities.map((city) => Hotel.countDocuments({ city: city }))
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
}
export async function countByType(req, res, next) {
  try {
    const hotelCount = await Hotel.countDocuments({ type: 'hotel' });
    const villaCount = await Hotel.countDocuments({ type: 'villa' });
    const apartmentCount = await Hotel.countDocuments({ type: 'apartment' });
    const cabinCount = await Hotel.countDocuments({ type: 'cabin' });
    const resortCount = await Hotel.countDocuments({ type: 'resort' });
    res.status(200).json([
      { type: 'hotel', count: hotelCount },
      { type: 'villa', count: villaCount },
      { type: 'apartment', count: apartmentCount },
      { type: 'cabin', count: cabinCount },
      { type: 'resort', count: resortCount },
    ]);
  } catch (error) {
    next(error);
  }
}
