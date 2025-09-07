// helpers.js

export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};

export const generateId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

export const getTopCountries = (destinations, topN = 3) => {
  const countryCounts = destinations.reduce((acc, curr) => {
    acc[curr.country] = (acc[curr.country] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);
};
