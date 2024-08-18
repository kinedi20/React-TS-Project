import React, { useEffect, useState } from "react";
import { User } from "../types";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface UserTableProps {
  users: User[];
}

const url = "http://localhost:3000/user";

const UserTable: React.FC= () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  const deleteUser = async (user: User) => {
    try {
      const response = await axios.delete(`${url}/${user.id}`);
      console.log(response.data);
      setUsers(users.filter(u => u.id !== user.id));
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(url);
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 text-left">Noms</th>
          <th className="py-2 px-4 text-left">Prénoms</th>
          <th className="py-2 px-4 text-left">E-mails</th>
          <th className="py-2 px-4 text-left">Rôles</th>
          <th className="py-2 px-4 text-left">Statut</th>
          <th className="py-2 px-4 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index} className="border-b">
            <td className="py-2 px-4">{user.nom}</td>
            <td className="py-2 px-4">{user.prenom}</td>
            <td className="py-2 px-4">{user.email}</td>
            <td className="py-2 px-4">{user.role}</td>
            <td
              className={`py-2 px-4 ${
                user.statut === "Actif" ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.statut}
            </td>
            <td className="py-2 px-4">
              <Link to= {`/userDetailsPage/${user.id}`}>
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2"  onClick={()=> navigate("/user", { state: { user } })} >
                  Voir
                </button>
              </Link>

              <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={()=> deleteUser(user)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
