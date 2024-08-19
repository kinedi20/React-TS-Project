import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import { User } from '../types';
import Entete from '../components/Entete';

const UserConfigurationPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { nom: 'Alexander', prenom: 'Foley', email: 'alexander.foley@gmail.com', role: 'Admin', statut: true },
    // ... autres utilisateurs
  ]);

  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  const handleSearch = (term: string) => {
    const filtered = users.filter(user => 
      user.nom.toLowerCase().includes(term.toLowerCase()) ||
      user.prenom.toLowerCase().includes(term.toLowerCase()) ||
      user.email.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleAddUser = () => {
    console.log('Ajouter un utilisateur');
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
      <Entete />

        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto">
          <h1 className="text-2xl font-bold mb-6">Configuration</h1>
          <div className="flex justify-between mb-6">
            <div className="w-2/3">
              <SearchBar onSearch={handleSearch} />
            </div>
            <button 
              onClick={handleAddUser}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Ajouter un utilisateur +
            </button>
          </div>
          <UserTable users={filteredUsers} />
        </main>
      </div>
    </div>
  );
};

export default UserConfigurationPage;