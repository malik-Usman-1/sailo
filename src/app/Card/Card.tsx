import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonLabel: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, buttonLabel }) => {
  return (
    <div className="card rounded overflow-hidden shadow-lg  bg-gray-100 group ">
      <div className=' overflow-hidden'>
      <img className="w-full  object-cover group-hover:scale-125  duration-500" src={imageUrl} alt="Card image" />
      </div>
      <div className="px-2 py-4 flex flex-col flex-grow">
        <div className="font-bold lg:text-xl text-lg mb-2 hover:text-orange-500 duration-300">{title}</div>
        <p className="text-gray-600 lg:text-base text-sm flex-grow">{description}</p>
      </div>
    </div>
  );
}

export default Card;
