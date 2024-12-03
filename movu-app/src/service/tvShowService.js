const BASE_URL = 'http://localhost:3001';

export const getTVShows = async () => {
  const response = await fetch(`${BASE_URL}/tvShowsList`);
  return response.json();
};

export const createTVShow = async (post) => {
  const response = await fetch(`${BASE_URL}/tvShowsList`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const updateTVShow = async (id, updatedPost) => {
  const response = await fetch(`${BASE_URL}/tvShowsList/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPost),
  });
  return response.json();
};

export const deleteTVShow = async (id) => {
  await fetch(`${BASE_URL}/tvShowsList/${id}`, { method: 'DELETE' });
};

export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};
