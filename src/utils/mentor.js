// Mock mentor logic, deliberately isolated from the component that renders it.
// Later, this function's body can be swapped for a real call (e.g. a Breeth
// memory-backed insight) without the AiMentorPreview component changing at all —
// it just needs an object shaped like { label, message }.

export function getMockMentorInsight(student) {
  const inProgressSkill = student.skills.find((s) => s.level > 0 && s.level < 5);
  const lockedSkill = student.skills.find((s) => s.level === 0);

  if (student.completedDays.length === 0) {
    return {
      label: 'Personalized Insight',
      message:
        "You haven't shipped your first mission yet. Day 1 is short on purpose — the goal today is just to start the chain.",
    };
  }

  if (student.currentStreak === 0) {
    return {
      label: 'Personalized Insight',
      message:
        "Your streak reset, but your XP and skills didn't. Pick today's mission back up and start a new chain — day 1 of a comeback still counts.",
    };
  }

  if (inProgressSkill) {
    return {
      label: 'Personalized Insight',
      message: `You've been building strong ${inProgressSkill.name} fundamentals. ${
        lockedSkill ? `Your next challenges start pulling in ${lockedSkill.name} — a good opportunity to expand your skill set.` : 'Keep stacking missions to push it further.'
      }`,
    };
  }

  return {
    label: 'Personalized Insight',
    message: 'Your skill profile is well rounded right now. Keep the streak alive and let the next mission pick the direction.',
  };
}

// Mission-specific tip, keyed by day. Same { label, message } shape as
// getMockMentorInsight so this component can also be swapped for a real
// Breeth-backed call later without any change to AiMentorPreview.
const MISSION_TIPS = {
  12: 'Focus on handling API states properly. Professional developers build systems that handle loading and errors gracefully.',
  1: "Keep this component small and focused — ship the simplest version first, then iterate.",
  30: "This is the halfway boss for a reason. Take the extra time on validation; it's the part that separates a demo from a product.",
  60: 'This is the project you lead your portfolio with — polish the README as much as the code.',
};

export function getMissionMentorTip(challenge) {
  return {
    label: 'Personalized Insight',
    message:
      MISSION_TIPS[challenge.day] ??
      `Focus on shipping something complete rather than perfect — you can always iterate on ${challenge.title} after today.`,
  };
}
