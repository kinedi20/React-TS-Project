import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import {  useNavigate, useParams } from 'react-router-dom';
import { User } from '../types';

import Entete from '../components/Entete';
import axios from 'axios';
import { url } from '../App';



const UserDetailsPage: React.FC =() => {
    const navigate = useNavigate();
    // const { state } = useLocation();

    const [options, setOptions] = useState([]);
    
    const { id } = useParams<{ id: string}>();
    const [user, setUser] = useState<User | null>(null);


    const [formData, setFormData] = useState({
      email: user?.email,
      telephone: user?.telephone,
      nom: user?.nom,
      prenom: user?.prenom,
      role: user?.role,
      statut: user?.statut,
      adresse: user?.adresse,
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      console.log(formData);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.put(url + "/user/" + id, formData);
        navigate("/dashboard");
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de l'inscription:", error);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url + "/user/" + id );
  
          setFormData(response.data);
  
          // setError(null);
        } catch (error) {}
      };
  
      fetchData();
    }, []);
 console.log('id', id);
 
   
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
     <Entete/>
     
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Voir l'utilisateur</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">{formData?.nom} {formData?.prenom}</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                <input type="email" value= {formData?.email} className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} name='email'/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input type="tel" value={formData?.telephone}  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} name='telephone'/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input type="text" value={formData?.nom}  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" value={formData?.prenom}  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"  onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Rôle</label>
                <select value={formData?.role} disabled className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange}>
                  <option>{formData?.role}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Adresse</label>
                <input type="text" value={user?.adresse} className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" onChange={handleChange} />
              </div>
            </div>
            
            <div className="mt-6">
              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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