import React from 'react'; 
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/Util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Empire_State_Building_%28cropped%29.jpg/800px-Empire_State_Building_%28cropped%29.jpg',
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
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Empire_State_Building_%28cropped%29.jpg/800px-Empire_State_Building_%28cropped%29.jpg',
    address: '20 W 34th St, New York, NY 10001, USA',
    location: {
      lat: 40.748817,
      lng: -73.985428
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace ? identifiedPlace.title : '',
        isValid: true
      },
      description: {
        value: identifiedPlace ? identifiedPlace.description : '',
        isValid: true
      }
    },
    true
  );

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // Send to backend
    // Here you would typically send the updated place data to your backend
    // For example, using fetch or axios to make a PUT request
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler} 
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (minimum 5 characters)."
        onInput={inputHandler} 
        initialValue={formState.inputs.description.value} 
        initialValid={formState.inputs.description.isValid} 
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
