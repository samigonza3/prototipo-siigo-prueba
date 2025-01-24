export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  employees: string;
  industry: string;
  revenue: string;
  currentSoftware: string;
  urgency: string;
  budget: string;
  contactTime: string;
  score: number;
  category: 'hot' | 'warm' | 'cold';
  createdAt: Date;
}

export type LeadFormData = Omit<Lead, 'id' | 'score' | 'category' | 'createdAt'>;