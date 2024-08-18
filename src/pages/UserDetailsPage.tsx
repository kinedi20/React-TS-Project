import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { User } from '../types';

import Entete from '../components/Entete';




const UserDetailsPage: React.FC =() => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [options, setOptions] = useState([]);
    
    const { id } = useParams<{ id: string}>();
    const [user, setUser] = useState<User | null>(null);
   
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
     <Entete/>
     
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Voir l'utilisateur</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{user?.nom} {user?.prenom}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                <input type="email" value= {user?.email} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input type="tel" value={user?.telephone} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" value={user?.nom} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" value={user?.prenom} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rôle</label>
                <select value={user?.role} disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>{user?.role}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Adresse</label>
                <input type="text" value={user?.adresse} readOnly className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
            </div>
            
            <div className="mt-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Modifier
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDetailsPage;