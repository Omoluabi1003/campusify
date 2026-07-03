import { liveInstitutions, liveOpportunities, liveResearchItems } from "@/data/campus-live-data";

export type CampusAiIntent = "schools" | "scholarships" | "research" | "campus-room" | "general";

export function detectCampusIntent(input: string): CampusAiIntent {
  const query = input.toLowerCase();

  if (query.includes("school") || query.includes("university") || query.includes("college") || query.includes("polytechnic")) {
    return "schools";
  }

  if (query.includes("scholarship") || query.includes("grant") || query.includes("loan") || query.includes("funding") || query.includes("job")) {
    return "scholarships";
  }

  if (query.includes("research") || query.includes("paper") || query.includes("thesis") || query.includes("journal")) {
    return "research";
  }

  if (query.includes("lecture") || query.includes("attendance") || query.includes("assignment") || query.includes("quiz") || query.includes("class")) {
    return "campus-room";
  }

  return "general";
}

export function generateCampusInsight(input: string) {
  const intent = detectCampusIntent(input);

  if (intent === "schools") {
    const topInstitutions = liveInstitutions.slice(0, 3).map((institution) => institution.name).join(", ");

    return {
      intent,
      title: "Institution discovery insight",
      response: `Campusitory found ${liveInstitutions.length} institution records across multiple school categories. Strong starting points include ${topInstitutions}. Use country, school type, and verification signals to narrow the path.`,
      recommendedAction: "Open the Institution Directory and compare country, school type, and verification status.",
    };
  }

  if (intent === "scholarships") {
    const eligible = liveOpportunities.filter((opportunity) => opportunity.type === "scholarship" || opportunity.type === "fellowship" || opportunity.type === "competition");

    return {
      intent,
      title: "Opportunity guidance",
      response: `Campusitory matched ${eligible.length} opportunity pathways from the current data set. The strongest signals are program level, eligible countries, funding type, and application readiness.`,
      recommendedAction: "Review the Opportunity Engine cards and prepare profile data for future matching.",
    };
  }

  if (intent === "research") {
    return {
      intent,
      title: "Research discovery insight",
      response: `Campusitory found ${liveResearchItems.length} research records in the current library preview, including AI-assisted learning, academic identity, and scholarship matching themes.`,
      recommendedAction: "Open the Research Library and review abstracts by theme, author, and access level.",
    };
  }

  if (intent === "campus-room") {
    return {
      intent,
      title: "Campus Room readiness",
      response: "Campus Room brings together live lectures, attendance, notes, assignments, quizzes, and class participation so each course can move through a clear academic workflow.",
      recommendedAction: "Start with course setup, lecture sessions, attendance records, and assignment workflows.",
    };
  }

  return {
    intent,
    title: "Campusitory academic guidance",
    response: "Campusitory can guide users across institutions, opportunities, research, learning rooms, multilingual access, and academic identity. Try asking about schools, scholarships, research, or lecture workflows.",
    recommendedAction: "Choose one academic path and let Campusitory narrow the next step.",
  };
}
