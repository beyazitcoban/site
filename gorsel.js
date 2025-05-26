export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(ua);

  const redirectUrl = isMobile
    ? 'https://example.com/mobil.jpg'      // Mobilde gösterilecek resmin linki
    : 'https://example.com/masaustu.jpg';  // Masaüstünde gösterilecek resmin linki

  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
