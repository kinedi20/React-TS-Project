export interface User {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    role: string;
    statut: 'Actif' | 'Inactif';
    telephone?: string;
    adresse?: string;
  }