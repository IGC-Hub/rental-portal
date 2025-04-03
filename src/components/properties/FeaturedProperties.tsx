"use client";

import { supabaseClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

const defaultProperties = [
  {
    id: 1,
    title: "Appartement Moderne Centre-Ville",
    location: "Centre-ville",
    price: 1200.50,
    image_url: "/images/property-1.jpg"
  },
  {
    id: 2,
    title: "Studio Lumineux Quartier Universitaire",
    location: "Quartier Universitaire",
    price: 800.75,
    image_url: "/images/property-2.jpg"
  },
  {
    id: 3,
    title: "Maison Familiale avec Jardin",
    location: "Banlieue Résidentielle",
    price: 2500.99,
    image_url: "/images/property-3.jpg"
  }
];

export default function FeaturedProperties() {
  const [properties] = useState(defaultProperties);

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Propriétés en Vedette
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={property.image_url}
                alt={property.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {property.title}
              </h3>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="text-xl font-bold text-gray-900">
                ${property.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}