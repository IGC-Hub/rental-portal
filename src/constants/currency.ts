// src/constants/currency.ts

// Configuration de la devise
export const CURRENCY = {
    SYMBOL: '$',
    CODE: 'USD',
    POSITION: 'before',
    DECIMAL_PLACES: 2,      // Nombre de décimales à afficher
    DECIMAL_SEPARATOR: '.', // Séparateur pour les décimales
    THOUSAND_SEPARATOR: ',' // Séparateur pour les milliers
  };
  
  // Fonction utilitaire pour formater les prix
  export const formatPrice = (amount: number, options?: {
    showDecimals?: boolean,  // Option pour afficher ou masquer les décimales
    minimumFractionDigits?: number,
    maximumFractionDigits?: number
  }): string => {
    const {
      showDecimals = true,
      minimumFractionDigits = CURRENCY.DECIMAL_PLACES,
      maximumFractionDigits = CURRENCY.DECIMAL_PLACES
    } = options || {};
  
    const formattedAmount = amount.toLocaleString('en-US', {
      minimumFractionDigits: showDecimals ? minimumFractionDigits : 0,
      maximumFractionDigits: showDecimals ? maximumFractionDigits : 0,
      style: 'decimal'
    });
  
    if (CURRENCY.POSITION === 'before') {
      return `${CURRENCY.SYMBOL}${formattedAmount}`;
    }
    return `${formattedAmount}${CURRENCY.SYMBOL}`;
  };