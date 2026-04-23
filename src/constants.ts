import { Project, Domain, Translations, Language } from './types';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    navProjects: 'Working on',
    navDomains: 'Domains',
    navContact: 'Contact',
    heroTagline: 'Curation of digital artifacts and premium assets.',
    heroSubline: 'Independent designer focusing on minimal systems and digital identity.',
    viewProject: 'View Project',
    domainTitle: 'Domain Portfolio',
    domainSubtitle: 'Premium digital real estate available for acquisition.',
    buyNow: 'Inquire',
    contactTitle: 'Get in touch',
    contactDescription: 'Available for select collaborations and domain acquisitions.',
    footerRights: 'All rights reserved.'
  },
  es: {
    navProjects: 'Trabajando en',
    navDomains: 'Dominios',
    navContact: 'Contacto',
    heroTagline: 'Curación de artefactos digitales y activos premium.',
    heroSubline: 'Diseñador independiente enfocado en sistemas minimalistas e identidad digital.',
    viewProject: 'Ver Proyecto',
    domainTitle: 'Portafolio de Dominios',
    domainSubtitle: 'Activos digitales premium disponibles para adquisición.',
    buyNow: 'Consultar',
    contactTitle: 'Contacto',
    contactDescription: 'Disponible para colaboraciones seleccionadas y adquisición de dominios.',
    footerRights: 'Todos los derechos reservados.'
  }
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Autodupe',
    description: {
      en: 'Mirror top traders predictions to your wallet. Track and copy the best prediction market traders on Polymarket.',
      es: 'Replica las predicciones de los mejores traders en tu cartera. Sigue y copia a los mejores traders del mercado de predicciones en Polymarket.'
    },
    year: '2024',
    tags: ['Branding', 'UI/UX'],
    link: '#'
  }
];

export const DOMAINS: Domain[] = [
  {id: 'd0', name: 'legalcode.ai', description: { 
    en: '', 
    es: '' }, status: 'sold' },
  { id: 'd1', name: 'shopcars.ai', 
    description: { 
      en: 'AI-driven automotive marketplaces, car recommendation platforms, or digital showrooms.', 
      es: 'Mercados automotrices impulsados por IA, plataformas de recomendación de autos o salas digitales.' }, status: 'available' },
  { id: 'd2', name: 'vaultsea.com', description: { en: 'Secure cloud storage, crypto platforms, or ocean-related digital services.', es: 'Perfecto para almacenamiento en la nube seguro, plataformas de cripto o servicios digitales relacionados con el océano.' }, status: 'available' },
  { id: 'd3', name: 'quicklazy.com', description: { en: '', es: '' }, status: 'available' },
  { id: 'd5', name: 'digacasa.com', 
    description: { 
      en: 'Spanish-market real estate platforms, digital home services, or property management tools.', 
      es: 'Plataformas inmobiliarias, servicios digitales para el hogar o herramientas de gestión de propiedades.' }, status: 'available' },
  { id: 'd6', name: 'digitfolio.com', description: { en: 'Digital portfolio platforms, creative professional networks, or online resume builders.', es: 'Plataformas de portafolio digital, redes profesionales creativas o constructores de currículums online.' }, status: 'available' }
];
