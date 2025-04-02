'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Property {
  id: number
  title: string
  location: string
  price: number
  imageUrl: string
  bedrooms: number
  bathrooms: number
  area: number
}

export default function SimilarProperties({ 
  currentPropertyId, 
  location 
}: { 
  currentPropertyId: number
  location: string 
}) {
  const router = useRouter()

  // Filtrer les propriétés similaires (même localisation, excluant la propriété actuelle)
  const similarProperties = FEATURED_PROPERTIES.filter(
    p => p.id !== currentPropertyId && p.location.includes(location.split(' ')[0])
  ).slice(0, 3)

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Propriétés similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProperties.map((property) => (
          <div 
            key={property.id}
            onClick={() => router.push(`/properties/${property.id}`)}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={property.imageUrl}
                alt={property.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">
                {property.price}€ /mois
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{property.location}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-3">{property.bedrooms} Ch.</span>
                <span className="mr-3">{property.bathrooms} SdB</span>
                <span>{property.area} m²</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}