export const fetchUsers = async (page = 1) => {
  const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`);
  const data = await response.json();

  return data;
};
