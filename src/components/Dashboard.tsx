import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Thermometer, Snowflake, Users, Calendar } from 'lucide-react';
import type { Lead } from '../types';

export default function Dashboard() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const storedLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    setLeads(storedLeads);
  }, []);

  const getCategoryIcon = (category: Lead['category']) => {
    switch (category) {
      case 'hot':
        return <Flame className="w-5 h-5 text-red-600" />;
      case 'warm':
        return <Thermometer className="w-5 h-5 text-orange-600" />;
      case 'cold':
        return <Snowflake className="w-5 h-5 text-blue-600" />;
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Leads</h1>
            <p className="text-gray-600">Gestiona y monitorea tus leads potenciales</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-[#1b9ede] text-white px-6 py-2 rounded-lg hover:bg-[#1789c2] transition-colors"
          >
            Nuevo Lead
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {(['hot', 'warm', 'cold'] as const).map((category) => {
            const count = leads.filter(lead => lead.category === category).length;
            return (
              <div key={category} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Leads {category}</p>
                    <p className="text-3xl font-bold">{count}</p>
                  </div>
                  {getCategoryIcon(category)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Empresa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Empleados
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Puntuación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Fecha
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{lead.company}</div>
                      <div className="text-sm text-gray-500">{lead.industry}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{lead.name}</div>
                      <div className="text-sm text-gray-500">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.employees}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#1b9ede]">
                        {lead.score} pts
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`
                        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${lead.category === 'hot' ? 'bg-red-100 text-red-800' : ''}
                        ${lead.category === 'warm' ? 'bg-orange-100 text-orange-800' : ''}
                        ${lead.category === 'cold' ? 'bg-blue-100 text-blue-800' : ''}
                      `}>
                        {getCategoryIcon(lead.category)}
                        <span className="ml-1">{lead.category.toUpperCase()}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(lead.createdAt.toString())}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}