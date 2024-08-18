import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import { User } from '../types'
import Entete from '../components/Entete'
import { Link } from 'react-router-dom';
import axios from 'axios';

// interface UserTableProps {
//     users: User[];
//   }
  
 

  const UserConfigurationPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:3000/user');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs:", error);
      }
    };
    fetchUsers();
  }, []);




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
        <main className="flex-1 p-8 overflow-auto bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Configuration</h1>
          <div className="flex  flex-col justify-between  mb-6">
            <div className="w-2/3">
              <SearchBar onSearch={handleSearch} />
            </div>
            <Link to="/addUserPage">
            <button 
              onClick={handleAddUser}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-2/12 my-2"
            >
              Ajouter un utilisateur +
            </button>
            </Link>
           
          </div>
          <UserTable users={filteredUsers} />
        </main>
      </div>
    </div>
  );
};

export default UserConfigurationPage;