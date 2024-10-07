function QueryProcessor(query: string): string {
  // Handling the "What is your Andrew ID?" query
  if (query.toLowerCase() === "what is your andrew id?") {
      return "auppulur";  
  }

  // Handling the "shakespeare" query
  if (query.toLowerCase() === "shakespeare") {
      return (
          "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
          "English poet, playwright, and actor, widely regarded as the greatest " +
          "writer in the English language and the world's pre-eminent dramatist."
      );
  }

  // Default response
  return "";
}

export default QueryProcessor;
