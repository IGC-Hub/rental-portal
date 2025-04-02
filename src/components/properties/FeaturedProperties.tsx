"use client";

import { supabaseClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('properties')
          .select('*')
          .limit(6);

        if (error) throw error;
        setProperties(data || []);
      } catch (err) {
        setError('Erreur lors du chargement des propriétés');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Propriétés en Vedette
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                <img
                  src={property.image_url || '/placeholder-property.jpg'}
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
    </div>
  );
}