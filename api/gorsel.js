export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);

  const redirectUrl = isMobile
    ? 'https://example.com/mobil.jpg'      // Mobil için gösterilecek resim
    : 'https://example.com/masaustu.jpg';  // Masaüstü için gösterilecek resim

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
