// API fictive pour la demande de démo
export async function requestDemo({ name, email, message }) {
  // Ici, on simule un appel réseau réel
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });
}
