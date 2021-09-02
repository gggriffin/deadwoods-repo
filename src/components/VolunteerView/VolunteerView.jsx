import React from "react";
import { InfoHeaderText } from "../Wrappers/InfoHeaderText";
import { InfoTile } from "../Wrappers/InfoTile";

export const VolunteerView = () => {
  return (
    <div className='mt-8'>
      <InfoHeaderText>Get Involved</InfoHeaderText>
      <InfoTile>
        <p>
          We are a non-profit event, and are staffed entirely by volunteers. Any
          extra help is welcome. Minimum age for volunteering is 16. Interested
          in volunteering? Reach out to admin@deadwoods.org for more
          information.
        </p>
      </InfoTile>
      <InfoHeaderText>Volunteer Possibilities</InfoHeaderText>
      <InfoTile>
        <div className='text-left font-bold'>
          <li className='mb-4'>
            Scarer - Dressing in character and acting in a scene, or roaming
            around a corn trail
          </li>
          <li className='mb-4'>
            Go-For - Helping bring supplies or refreshments to volunteers in
            scenes
          </li>
          <li className='mb-4'>
            Front of House - Selling tickets, parking vehicles, helping guests
            with questions, etc.
          </li>
          <li className='mb-4'>
            Working behind the scenes to run props or effects
          </li>
        </div>
      </InfoTile>
    </div>
  );
};
