export const artoString = (data, key) => {
  if (!data) return "";
  if (!key) return "";
  if (!Array.isArray(data)) return;
  return data.map(e => e[key] || "").toString();
};

export const resizeImage = (imgUrl, size = 512) => {
  if (!imgUrl) return "";
  let httpsImgUrl = imgUrl;
  if (imgUrl.slice(0, 5) !== "https") {
    httpsImgUrl = "https" + imgUrl.slice(4);
  }
  return `${httpsImgUrl}?param=${size}y${size}`;
};

export const formatCount = count => {
  if (!count) return "";
  if (count > 100000000) {
    return `${Math.floor((count / 100000000) * 100) / 100}亿`; // 2.32 亿
  }
  if (count > 100000) {
    return `${Math.floor((count / 10000) * 10) / 10}万`; // 232.1 万
  }
  if (count > 10000) {
    return `${Math.floor((count / 10000) * 100) / 100}万`; // 2.3 万
  }
  return count;
};
