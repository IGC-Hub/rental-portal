import { supabaseClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

interface SimilarPropertiesProps {
  currentPropertyId: string;
  location: string;
}

export default function SimilarProperties({ currentPropertyId, location }: SimilarPropertiesProps) {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSimilarProperties = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('properties')
          .select('*')
          .neq('id', currentPropertyId)
          .ilike('location', `%${location.split(' ')[0]}%`)
          .limit(3);

        if (error) throw error;
        setProperties(data || []);
      } catch (err) {
        setError('Erreur lors du chargement des propriétés similaires');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarProperties();
  }, [currentPropertyId, location]);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error}</div>;
  if (properties.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Propriétés similaires</h2>
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
  );
}