import React, { FormEvent, useState } from "react";
import Sidebar from "../components/Sidebar"; // Ajustez le chemin selon votre structure
import Entete from "../components/Entete";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormData {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  statut: boolean;
  telephone?: string;
  adresse?: string;
}

const url = " http://localhost:3000/user";

const AddUserPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    prenom: "",
    email: "",
    role: "Agence",
    statut: true,
    telephone: "",
    adresse: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);

    try {
      const response = await axios.post(url, formData);
      navigate("/dashboard");
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
    }
  };

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //     console.log(formData);
  //   };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Entete />

        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Configuration</h2>
          <h3 className="text-xl font-semibold mb-4">Ajouter un compte</h3>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  id="tetephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  id="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rôle
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="Agence">Agence</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Client">Client</option>
                  <option value="Support">Support</option>
                  <option value="Comptable">Comptable</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Technique">Technique</option>
                  <option value="Partenaire">Partenaire</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="adresse"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sauvegarder
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddUserPage;
