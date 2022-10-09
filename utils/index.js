

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

export const prepareText = (contentText, fileName = "file-name") => {

  const newText =
    `---
title: 'title'
excerpt: 'description'
coverImage: '/assets/blog/${fileName}/cover.webp'
date: '${new Date().toJSON()}'
author:
  name: Admin Bot
  picture: '/assets/blog/authors/admin.jpg'
ogImage:
  url: '/assets/blog/${fileName}/cover.webp'
---

`;

  return newText + contentText;
}


export const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}