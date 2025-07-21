// src/utils/fetchQuestions.js

export const fetchQuestions = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/sudheerj/reactjs-interview-questions/master/README.md'
      );
      const markdown = await response.text();
  
      const regex = /\|\s*(\d+)\s*\|\s*\[(.*?)\]\(#.*?\)/g;
      const parsed = [];
      let match;
      let id = 1;
  
      while ((match = regex.exec(markdown)) !== null) {
        const question = match[1].trim();
        const answer = match[2].trim();
        parsed.push({
          id: id++,
          category: 'React',
          question,
          answer,
        });
      }
  
      return parsed;
    } catch (error) {
      console.error('Error fetching questions:', error);
      return [];
    }
  };
  