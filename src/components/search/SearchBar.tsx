'use client'
import { useState } from 'react'

export default function SearchBar() {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Localisation"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">Type de bien</option>
          <option value="apartment">Appartement</option>
          <option value="house">Maison</option>
          <option value="studio">Studio</option>
        </select>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Rechercher
        </button>
      </div>

      <button 
        onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        {isAdvancedOpen ? 'Masquer les filtres avancés' : 'Filtres avancés'}
      </button>

      {isAdvancedOpen && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prix</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-1 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-1 border rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Chambres</label>
            <select className="w-full px-3 py-1 border rounded-lg">
              <option value="">Tous</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Surface (m²)</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-1 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-1 border rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilité</label>
            <input
              type="date"
              className="w-full px-3 py-1 border rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}