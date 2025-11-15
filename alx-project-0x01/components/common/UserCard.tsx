import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      
      <div className="space-y-2 text-gray-600">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Email:</span>
          <span>{email}</span>
        </div>
        
        <div className="flex items-center">
          <span className="font-semibold mr-2">Phone:</span>
          <span>{phone}</span>
        </div>
        
        <div className="flex items-center">
          <span className="font-semibold mr-2">Website:</span>
          <span className="text-blue-500">{website}</span>
        </div>
        
        <div className="mt-3">
          <p className="font-semibold">Address:</p>
          <p className="text-sm">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div className="mt-3">
          <p className="font-semibold">Company:</p>
          <p className="text-sm">{company.name}</p>
          <p className="text-xs text-gray-500 italic">{company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;