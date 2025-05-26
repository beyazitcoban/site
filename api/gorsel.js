/*export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);

  const redirectUrl = isMobile
    ? 'https://i.hizliresim.com/1a3qg0y.png'      // Mobil için gösterilecek resim
    : 'https://i.hizliresim.com/39ggk8e.jpg';  // Masaüstü için gösterilecek resim

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
*/

export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);

  const redirectUrl = isMobile
    ? 'https://i.imgur.com/fHyEMsl.jpeg'     // Test için Imgur
    : 'https://i.imgur.com/2WZtOD6.jpeg';    // Test için Imgur

  res.redirect(302, redirectUrl);
}
