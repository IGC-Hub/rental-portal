// tests/test-permissions.ts
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { supabase as supabaseClient } from '../lib/supabase/client';

// Définir l'interface pour une propriété
interface Property {
  id?: string;
  title: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  owner_id?: string;
  created_at?: string;
  updated_at?: string;
  image_urls?: string[];
  description?: string;
}

async function testPermissions() {
  console.log('\n=== Tests sans authentification ===');
  
  try {
    console.log('\n1. Test de lecture :');
    const { data: readData, error: readError } = await supabaseClient
      .from('properties')
      .select('*');
    
    if (readError) {
      console.log('❌ Erreur de lecture:', readError.message);
    } else {
      console.log('✓ Lecture réussie');
      console.log(`Nombre de propriétés trouvées: ${readData?.length || 0}`);
      
      // Afficher les détails des propriétés
      console.log('\nDétails des propriétés :');
      readData?.forEach((property: Property, index) => {
        console.log(`\nPropriété ${index + 1}:`);
        console.log(`  Titre: ${property.title}`);
        console.log(`  Prix: $${property.price}`);
        console.log(`  Surface: ${property.area}m²`);
        console.log(`  Localisation: ${property.location}`);
        console.log(`  Configuration: ${property.bedrooms} ch, ${property.bathrooms} sdb`);
      });
    }

    console.log('\n2. Test d\'insertion sans auth :');
    const { data: insertData, error: insertError } = await supabaseClient
      .from('properties')
      .insert([
        {
          title: 'Test Property',
          price: 1000,
          area: 100,
          bedrooms: 2,
          bathrooms: 1,
          location: 'Test Location'
        }
      ]);
    console.log(insertError ? '✓ Insertion bloquée (attendu)' : '❌ Insertion permise (inattendu)');

    console.log('\n3. Test de modification sans auth :');
    const { data: updateData, error: updateError } = await supabaseClient
      .from('properties')
      .update({ price: 1100 })
      .eq('id', 1);
    console.log(updateError ? '✓ Modification bloquée (attendu)' : '❌ Modification permise (inattendu)');

    console.log('\n=== Tests avec authentification ===');
    
    // Test de connexion
    const { data: authData, error: authError } = await supabaseClient.auth.signInWithPassword({
      email: 'test@example.com',
      password: 'testpassword123'
    });

    if (authError) {
      console.log('❌ Erreur d\'authentification:', authError.message);
    } else {
      console.log('✓ Authentification réussie');

      // Test d'insertion avec auth
      const { data: insertAuthData, error: insertAuthError } = await supabaseClient
        .from('properties')
        .insert<Property>([
          {
            title: 'Propriété Test Auth',
            price: 1500,
            area: 120,
            bedrooms: 3,
            bathrooms: 2,
            location: 'Test Location',
            owner_id: authData.user.id
          }
        ])
        .select();

      console.log('\nTest d\'insertion avec auth:');
      console.log(insertAuthError ? '❌ Insertion échouée:' + insertAuthError.message : '✓ Insertion réussie');

      // Test de modification avec auth
      if (insertAuthData && insertAuthData[0]) {
        const { error: updateAuthError } = await supabaseClient
          .from('properties')
          .update({ price: 1600 })
          .eq('id', insertAuthData[0].id)
          .eq('owner_id', authData.user.id);

        console.log('\nTest de modification avec auth:');
        console.log(updateAuthError ? '❌ Modification échouée:' + updateAuthError.message : '✓ Modification réussie');
      }
    }

  } catch (error) {
    console.error('\n❌ Erreur inattendue:', error);
  }
  
  console.log('\n=== Fin des tests ===');
}

// Exécuter les tests et gérer la promesse
testPermissions()
  .catch(error => {
    console.error('Erreur lors de l\'exécution des tests:', error);
  });