export const fetchPositions = async () => {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
  const data = await response.json();

  return data;
};


