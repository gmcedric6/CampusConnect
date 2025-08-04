// API fictive pour l'envoi de témoignage
export async function sendTestimonial({ name, role, quote }) {
  // Ici, on simule un appel réseau réel
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1500);
  });
}
