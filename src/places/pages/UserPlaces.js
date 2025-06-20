import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';





    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Emp.  State Building',
            description: 'One of the most famous skyscrapers in the world.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Empire_State_Building_%28cropped%29.jpg/800px-Empire_State_Building_%28cropped%29.jpg',
            address: '20 W 34th St, New York, NY 10001, USA',
            location: {
                lat: 40.748817,
                lng: -73.985428
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'One of the most famous skyscrapers in the world.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Empire_State_Building_%28cropped%29.jpg/800px-Empire_State_Building_%28cropped%29.jpg',
            address: '20 W 34th St, New York, NY 10001, USA',
            location: {
                lat: 40.748817,
                lng: -73.985428
            },
            creator: 'u2'
        }
    ];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return < PlaceList items={loadedPlaces} />;
  
}

export default UserPlaces;