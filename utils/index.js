

export const sanitizeUrl = (url) => {
  if (url.startsWith('https://')) {
    const https = 'https://';
    return url.slice(https.length);
  }

  if (url.startsWith('http://')) {
    const http = 'http://';
    return url.slice(http.length);
  }

  return url;
}

export const prepareText = (contentText) => {

  const newText = 
`---
title: 'title'
excerpt: 'description'
coverImage: '/assets/blog/<filename>/cover.webp'
date: '${new Date().toJSON()}'
author:
  name: Admin Bot
  picture: '/assets/blog/authors/admin.jpg'
ogImage:
  url: '/assets/blog/<filename>cover.webp'
---

`;

return newText + contentText;
}
