export const createUser = async (user) => {
  const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: user.data,
    headers: {
      'Token': user.token,
    },
  });
  const data = await response.json();

  return data;
};
