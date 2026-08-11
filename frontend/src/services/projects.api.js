const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error(
    "VITE_API_URL is not defined. Create frontend/.env with VITE_API_URL=http://localhost:3000"
  );
}

export async function getProjects() {
  let response;

  try {
    response = await fetch(`${API_URL}/api/projects`);
  } catch (cause) {
    throw new Error("Unable to reach the Villaris API. Is the backend running?", { cause });
  }

  if (!response.ok) {
    throw new Error(`Failed to load projects (HTTP ${response.status})`);
  }

  const payload = await response.json();

  if (!payload.success) {
    throw new Error(payload.message || "Failed to load projects");
  }

  return payload.data;
}