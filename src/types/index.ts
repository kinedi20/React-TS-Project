export interface User {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    role: string;
    statut: boolean;
    telephone?: string;
    adresse?: string;
  }