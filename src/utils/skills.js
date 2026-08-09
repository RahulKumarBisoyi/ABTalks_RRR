// Simple mock skill progression. When a mission is completed, the skills it
// trains (challenge.skillTags) get a small XP bump. Deliberately simple —
// a fixed XP-per-level curve and a small alias table, not a scoring engine.

export const MAX_SKILL_LEVEL = 5;
const XP_PER_SKILL_LEVEL = 150;
const XP_PER_MISSION = 30;

// Maps a challenge's skill tag to the canonical skill name shown on the
// dashboard's skill panel. Tags with no alias fall through and are matched
// by exact (case-insensitive) name instead.
const SKILL_ALIASES = {
  apis: 'API Integration',
  'api integration': 'API Integration',
  'async/await': 'API Integration',
  'fetch api': 'API Integration',
  useeffect: 'React',
  usestate: 'React',
  jsx: 'React',
  'component design': 'React',
  forms: 'React',
  'responsive ui': 'CSS / Tailwind',
  css: 'CSS / Tailwind',
  validation: 'JavaScript',
  performance: 'React',
  deployment: 'Git & GitHub',
  portfolio: 'Git & GitHub',
};

function resolveSkillName(tag) {
  return SKILL_ALIASES[tag.toLowerCase()] ?? tag;
}

export function levelForSkillXp(xp) {
  return Math.min(MAX_SKILL_LEVEL, Math.floor(xp / XP_PER_SKILL_LEVEL));
}

export function applySkillGrowth(skills, challengeSkillTags = []) {
  const targetNames = new Set(challengeSkillTags.map((tag) => resolveSkillName(tag).toLowerCase()));

  return skills.map((skill) => {
    if (!targetNames.has(skill.name.toLowerCase())) return skill;
    const nextXp = skill.xp + XP_PER_MISSION;
    return { ...skill, xp: nextXp, level: levelForSkillXp(nextXp) };
  });
}
