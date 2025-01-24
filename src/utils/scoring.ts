export const calculateLeadScore = (data: Omit<Lead, 'id' | 'score' | 'category' | 'createdAt'>): number => {
  let score = 0;

  // Company size scoring
  const employeeScores: Record<string, number> = {
    '1-10': 5,
    '11-50': 10,
    '51-200': 15,
    '201+': 20
  };
  score += employeeScores[data.employees] || 0;

  // Revenue scoring
  const revenueScores: Record<string, number> = {
    'less-than-100k': 5,
    '100k-500k': 10,
    '500k-1m': 15,
    'more-than-1m': 20
  };
  score += revenueScores[data.revenue] || 0;

  // Urgency scoring
  const urgencyScores: Record<string, number> = {
    'immediately': 20,
    'within-3-months': 15,
    'within-6-months': 10,
    'no-timeline': 5
  };
  score += urgencyScores[data.urgency] || 0;

  // Budget scoring
  const budgetScores: Record<string, number> = {
    'ready': 20,
    'planning': 15,
    'considering': 10,
    'unknown': 5
  };
  score += budgetScores[data.budget] || 0;

  // Current software scoring (higher if using competitor or manual)
  if (data.currentSoftware === 'manual') score += 15;
  if (data.currentSoftware === 'competitor') score += 10;

  return score;
};

export const categorizeLead = (score: number): 'hot' | 'warm' | 'cold' => {
  if (score >= 60) return 'hot';
  if (score >= 40) return 'warm';
  return 'cold';
};