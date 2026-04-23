/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'es';

export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    es: string;
  };
  year: string;
  tags: string[];
  link?: string;
}

export interface Domain {
  id: string;
  name: string;
  description: {
    en: string;
    es: string;
  };
  status: 'available' | 'sold';
}

export interface Translations {
  navProjects: string;
  navDomains: string;
  navContact: string;
  heroTagline: string;
  heroSubline: string;
  viewProject: string;
  domainTitle: string;
  domainSubtitle: string;
  buyNow: string;
  contactTitle: string;
  contactDescription: string;
  footerRights: string;
}
