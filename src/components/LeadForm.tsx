import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, Users, BadgeDollarSign, Timer, Wallet, Clock } from 'lucide-react';
import type { LeadFormData } from '../types';

export default function LeadForm() {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: LeadFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      employees: formData.get('employees') as string,
      industry: formData.get('industry') as string,
      revenue: formData.get('revenue') as string,
      currentSoftware: formData.get('currentSoftware') as string,
      urgency: formData.get('urgency') as string,
      budget: formData.get('budget') as string,
      contactTime: formData.get('contactTime') as string,
    };
    
    localStorage.setItem('leadData', JSON.stringify(data));
    navigate('/score');
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-[#1b9ede]/5" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#1b9ede]/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#1b9ede]/5" />
        <div 
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(27,158,222,0.1) 0%, rgba(27,158,222,0) 70%)'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Optimiza tu gestión contable con{' '}
            <span className="text-[#1b9ede]">Siigo Aspel</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Descubre cómo nuestra solución puede transformar la manera en que manejas tu contabilidad. Únete a miles de empresas que ya confían en nosotros.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <div className="text-[#1b9ede] font-bold text-2xl mb-1">+10,000</div>
              <div className="text-gray-600">Empresas activas</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
              <div className="text-[#1b9ede] font-bold text-2xl mb-1">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="inline-block w-4 h-4 mr-2" />
                  Nombre de la empresa
                </label>
                <input
                  required
                  type="text"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline-block w-4 h-4 mr-2" />
                    Número de empleados
                  </label>
                  <select
                    required
                    name="employees"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                  >
                    <option value="">Selecciona</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industria
                  </label>
                  <select
                    required
                    name="industry"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                  >
                    <option value="">Selecciona</option>
                    <option value="retail">Comercio</option>
                    <option value="services">Servicios</option>
                    <option value="manufacturing">Manufactura</option>
                    <option value="technology">Tecnología</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <BadgeDollarSign className="inline-block w-4 h-4 mr-2" />
                  Ingresos anuales
                </label>
                <select
                  required
                  name="revenue"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                >
                  <option value="">Selecciona</option>
                  <option value="less-than-100k">Menos de $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="more-than-1m">Más de $1,000,000</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Software actual
                  </label>
                  <select
                    required
                    name="currentSoftware"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                  >
                    <option value="">Selecciona</option>
                    <option value="manual">Manual</option>
                    <option value="competitor">Otro software</option>
                    <option value="none">Ninguno</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Timer className="inline-block w-4 h-4 mr-2" />
                    Urgencia
                  </label>
                  <select
                    required
                    name="urgency"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                  >
                    <option value="">Selecciona</option>
                    <option value="immediately">Inmediato</option>
                    <option value="within-3-months">3 meses</option>
                    <option value="within-6-months">6 meses</option>
                    <option value="no-timeline">Sin definir</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Wallet className="inline-block w-4 h-4 mr-2" />
                    Presupuesto
                  </label>
                  <select
                    required
                    name="budget"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                  >
                    <option value="">Selecciona</option>
                    <option value="ready">Aprobado</option>
                    <option value="planning">En planeación</option>
                    <option value="considering">En consideración</option>
                    <option value="unknown">Por definir</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline-block w-4 h-4 mr-2" />
                    Horario de contacto
                  </label>
                  <select
                    required
                    name="contactTime"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1b9ede] focus:border-transparent"
                  >
                    <option value="">Selecciona</option>
                    <option value="morning">Mañana (9-12)</option>
                    <option value="afternoon">Tarde (12-17)</option>
                    <option value="evening">Noche (17-20)</option>
                    <option value="any">Cualquier hora</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-[#1b9ede] text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1789c2] transition-colors"
              >
                Solicitar demostración
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}