import Navbar from '@/components/layout/Navbar'
import SearchBar from '@/components/search/SearchBar'
import FeaturedProperties from '@/components/properties/FeaturedProperties'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Portail de Location
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Trouvez votre prochain logement ou gérez vos propriétés
          </p>
        </div>

        {/* Barre de recherche */}
        <SearchBar />

        {/* Propriétés en vedette */}
        <FeaturedProperties />

        {/* Section Comment ça marche */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Recherchez</h3>
              <p className="text-gray-600">Trouvez le logement idéal parmi nos nombreuses offres</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Visitez</h3>
              <p className="text-gray-600">Planifiez une visite en quelques clics</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Postulez</h3>
              <p className="text-gray-600">Constituez votre dossier en ligne</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Emménagez</h3>
              <p className="text-gray-600">Signez votre bail et installez-vous</p>
            </div>
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="bg-blue-50 py-16 mb-16 rounded-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1500+</div>
                <p className="text-gray-600">Propriétés disponibles</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Taux de satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Support client</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Témoignages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ce que disent nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Marie L.</h3>
                  <p className="text-gray-600 text-sm">Paris</p>
                </div>
              </div>
              <p className="text-gray-600">"Processus de location très simple et efficace. J'ai trouvé mon appartement en moins d'une semaine !"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Thomas R.</h3>
                  <p className="text-gray-600 text-sm">Lyon</p>
                </div>
              </div>
              <p className="text-gray-600">"Une équipe réactive et professionnelle. Je recommande vivement leurs services."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-semibold">Sophie M.</h3>
                  <p className="text-gray-600 text-sm">Bordeaux</p>
                </div>
              </div>
              <p className="text-gray-600">"La visite virtuelle m'a fait gagner beaucoup de temps. Très pratique !"</p>
            </div>
          </div>
        </div>

        {/* Section Newsletter */}
        <div className="bg-blue-600 text-white py-16 mb-16 rounded-lg">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
            <p className="mb-8">Recevez nos dernières offres et conseils immobiliers</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Section Avantages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nos avantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Processus Simplifié</h3>
              <p className="text-gray-600">Gestion locative automatisée et efficace</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Sécurisé</h3>
              <p className="text-gray-600">Protection des données et des transactions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Rapide</h3>
              <p className="text-gray-600">Réponses et traitement en temps réel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">À propos</h3>
              <ul className="space-y-2">
                <li>Notre histoire</li>
                <li>Équipe</li>
                <li>Carrières</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Location</li>
                <li>Gestion locative</li>
                <li>Conseil immobilier</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Légal</h3>
              <ul className="space-y-2">
                <li>Conditions d'utilisation</li>
                <li>Politique de confidentialité</li>
                <li>Mentions légales</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Support</li>
                <li>contact@portail-location.fr</li>
                <li>01 23 45 67 89</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}