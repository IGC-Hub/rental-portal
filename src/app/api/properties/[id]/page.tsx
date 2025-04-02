'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/layout/Navbar'

// Données de démonstration
const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Appartement Moderne",
    location: "Paris 15ème",
    price: 1200,
    imageUrl: "/images/property-1.jpg",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    description: "Magnifique appartement rénové avec goût, cuisine équipée, proche des commerces et transports.",
    features: ["Cuisine équipée", "Parquet", "Double vitrage", "Ascenseur", "Interphone"],
    availability: "Immédiate",
    floor: "3ème étage",
    heating: "Individuel électrique",
    energyClass: "C"
  },
  {
    id: 2,
    title: "Studio Lumineux",
    location: "Paris 11ème",
    price: 950,
    imageUrl: "/images/property-2.jpg",
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    description: "Charmant studio entièrement meublé, idéalement situé, parfait pour un étudiant ou jeune actif.",
    features: ["Meublé", "Cuisine équipée", "Internet inclus", "Digicode"],
    availability: "01/07/2024",
    floor: "2ème étage",
    heating: "Collectif",
    energyClass: "D"
  },
  {
    id: 3,
    title: "Maison avec Jardin",
    location: "Boulogne-Billancourt",
    price: 2200,
    imageUrl: "/images/property-3.jpg",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description: "Belle maison familiale avec jardin privatif, garage et cave. Quartier calme et résidentiel.",
    features: ["Jardin", "Garage", "Cave", "Cheminée", "Terrasse"],
    availability: "Immédiate",
    floor: "RDC + 1",
    heating: "Individuel gaz",
    energyClass: "B"
  }
]

// Composant du formulaire de visite
function VisitForm({ propertyId, onClose }: { propertyId: number; onClose: () => void }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demande de visite:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Planifier une visite</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Heure</label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
                required
              >
                <option value="">Choisir</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Confirmer la demande
          </button>
        </form>
      </div>
    </div>
  )
}

// Composant du formulaire de contact
function ContactForm({ propertyId, onClose }: { propertyId: number; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Information',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demande de contact:', formData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Contacter l'agence</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="Information">Demande d'information</option>
              <option value="Prix">Négociation prix</option>
              <option value="Documents">Documents requis</option>
              <option value="Autre">Autre demande</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}

// Composant principal de la page
export default function PropertyPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showVisitForm, setShowVisitForm] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const property = FEATURED_PROPERTIES.find(p => p.id === parseInt(params.id))

  if (!property) {
    return <div>Propriété non trouvée</div>
  }

  const similarProperties = FEATURED_PROPERTIES.filter(
    p => p.id !== property.id && p.location.includes(property.location.split(' ')[0])
  ).slice(0, 3)

  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux résultats
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src={property.imageUrl}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              {property.price}€ /mois
            </div>
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{property.location}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600">Chambres</p>
                <p className="text-2xl font-bold">{property.bedrooms}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600">Salles de bain</p>
                <p className="text-2xl font-bold">{property.bathrooms}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-gray-600">Surface</p>
                <p className="text-2xl font-bold">{property.area} m²</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Informations complémentaires</h2>
                <div className="space-y-2">
                  <p><span className="font-medium">Disponibilité:</span> {property.availability}</p>
                  <p><span className="font-medium">Étage:</span> {property.floor}</p>
                  <p><span className="font-medium">Chauffage:</span> {property.heating}</p>
                  <p><span className="font-medium">Classe énergétique:</span> {property.energyClass}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Intéressé ?</h2>
                <button 
                  onClick={() => setShowVisitForm(true)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4"
                >
                  Planifier une visite
                </button>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="w-full border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Contacter l'agence
                </button>
              </div>
            </div>

            {similarProperties.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Propriétés similaires</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {similarProperties.map((similarProperty) => (
                    <div 
                      key={similarProperty.id}
                      onClick={() => router.push(`/properties/${similarProperty.id}`)}
                      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                    >
                      <div className="relative h-48">
                        <Image
                          src={similarProperty.imageUrl}
                          alt={similarProperty.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">
                          {similarProperty.price}€ /mois
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{similarProperty.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{similarProperty.location}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span className="mr-3">{similarProperty.bedrooms} Ch.</span>
                          <span className="mr-3">{similarProperty.bathrooms} SdB</span>
                          <span>{similarProperty.area} m²</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showVisitForm && (
        <VisitForm 
          propertyId={property.id} 
          onClose={() => setShowVisitForm(false)} 
        />
      )}

      {showContactForm && (
        <ContactForm 
          propertyId={property.id} 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </main>
  )
}