// Represents a list element with bullet points
export type ListContent = {
  type: "list"; // Identifies this as a list type
  items: string[]; // Array of strings for each list item
};

// Represents a subsection with a subtitle and content
export type SubSection = {
  subsubtitle: string; // The h4 heading for this subsection
  text: string[] | (string | ListContent)[]; // Content can be strings or mixed with lists
};

// Union type representing all possible content elements within a section
export type ContentItem = string | ListContent | SubSection | SubSection[];

// Main section structure (h2 level)
export type Section = {
  subtitle: string; // The h2 heading
  description: string | ContentItem[]; // Content can be simple string or complex array
};

// Complete article structure matching our JSON schema
export type Article = {
  id: number;
  title: string; // body article title (h1)
  image: string; // Hero image path
  slug: string; // URL-friendly identifier
  summary: string; // Article introduction/summary
  aria: string; // Accessibility description
  content: Section[] | string; // Either array of sections or simple string
};
