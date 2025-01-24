import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateLeadScore, categorizeLead } from '../utils/scoring';
import { Award, ChevronRight } from 'lucide-react';
import type { Lead, LeadFormData } from '../types';

export default function ScoreCalculation() {
  const navigate = useNavigate();
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    const leadData = localStorage.getItem('leadData');
    if (!leadData) {
      navigate('/');
      return;
    }

    const formData: LeadFormData = JSON.parse(leadData);
    const score = calculateLeadScore(formData);
    const category = categorizeLead(score);

    const newLead: Lead = {
      ...formData,
      id: crypto.randomUUID(),
      score,
      category,
      createdAt: new Date(),
    };

    setLead(newLead);

    // Store in leads list
    const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    localStorage.setItem('leads', JSON.stringify([...existingLeads, newLead]));
  }, [navigate]);

  if (!lead) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Award className="w-16 h-16 text-[#1b9ede] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Análisis completado!
          </h2>
          <p className="text-gray-600">
            La información del lead ha sido analizada y se ha calculado la puntuación
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#1b9ede] mb-2">
                {lead.score}
              </div>
              <div className="text-gray-600">Puntuación total</div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">
                Categoría: {' '}
                <span className={`
                  ${lead.category === 'hot' ? 'text-red-600' : ''}
                  ${lead.category === 'warm' ? 'text-orange-600' : ''}
                  ${lead.category === 'cold' ? 'text-blue-600' : ''}
                `}>
                  {lead.category.toUpperCase()}
                </span>
              </div>
              <div className="text-gray-600">
                {lead.category === 'hot' && 'Cliente potencial de alta prioridad'}
                {lead.category === 'warm' && 'Cliente potencial con interés moderado'}
                {lead.category === 'cold' && 'Cliente potencial en fase inicial'}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-[#1b9ede] text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-[#1789c2] transition-colors"
          >
            Ver panel de leads
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}