const generateSeoTags = (config) => {
  const descriptionContent = config.description
    ? `content="${config.description}"`
    : ``;
  const imageUrl = `https://og-image-craigary.vercel.app/${config.title}.png?theme=dark&md=1&fontSize=125px`;

  let result = `
    <meta name="keywords" content="${config.keywords.join(", ")}" data-seo="true">
    <meta name="description" ${descriptionContent} data-seo="true">
    <meta name="author" content="${config.author}" data-seo="true">
    <meta property="og:url" content="${config.url}" data-seo="true">
    <meta property="og:image" content="${imageUrl}" data-seo="true">
    <meta property="og:type" content="${config.type}" data-seo="true">
    <meta property="og:title" content="${config.title}" data-seo="true">
    <meta property="og:locale" content="${config.locale}" data-seo="true">
    <meta property="og:description" ${descriptionContent} data-seo="true">
    <meta property="twitter:image" content="${imageUrl}" data-seo="true">
    <meta name="twitter:card" content="summary_large_image" data-seo="true">
    <meta property="twitter:title" content="${config.title}" data-seo="true">
    <meta property="twitter:description" ${descriptionContent} data-seo="true">
  `;

  if (config.withCanonical) {
    result += `<link rel="canonical" href="${config.url}" data-seo="true">`;
  }

  if (config.type === "article") {
    result += `
      <meta property="article:published_time" config="${config.publishedTime}" data-seo="true">
      <meta property="article:author" content="${config.author}" data-seo="true">
    `;
  }

  return result;
};

const applySeo = (config) => {
  const seoTags = document.querySelectorAll('meta[data-seo="true"], link[data-seo="true"]');
  seoTags.forEach((tag) => tag.remove());

  const newSeoTags = generateSeoTags(config);
  document.head.insertAdjacentHTML('beforeend', newSeoTags);

  document.title = config.title;
};
