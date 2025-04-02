// components/properties/FeaturedProperties.tsx
import { supabaseClient } from '@/lib/supabase/client';

export default function FeaturedProperties() {
  // Uniquement les opérations de lecture publiques
  const fetchProperties = async () => {
    const { data } = await supabaseClient
      .from('properties')
      .select('*')
      .limit(3);
    return data;
  };
  // ...
}
// components/properties/FeaturedProperties.tsx
import { formatPrice } from '@/constants/currency';

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Appartement Moderne",
      location: "Centre-ville",
      price: 1200.50,
      area: 75,
      bedrooms: 2,
      bathrooms: 1,
      image: '/images/property-1.jpg'  // Correction du chemin
    },
    {
      id: 2,
      title: "Studio Lumineux",
      location: "Quartier Universitaire",
      price: 800.75,
      area: 82,
      bedrooms: 1,
      bathrooms: 1,
      image: '/images/property-2.jpg'  // Correction du chemin
    },
    {
      id: 3,
      title: "Maison Familiale",
      location: "Banlieue Résidentielle",
      price: 2500.99,
      area: 150,
      bedrooms: 4,
      bathrooms: 2,
      image: '/images/property-3.jpg'  // Correction du chemin
    }
  ];

  // Le reste du composant reste identique
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Propriétés en vedette</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">{property.location}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-xl">
                  {formatPrice(property.price)}/mois
                </span>
                <div className="text-gray-600">
                  <span>{property.area}m² • </span>
                  <span>{property.bedrooms} ch • </span>
                  <span>{property.bathrooms} sdb</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}