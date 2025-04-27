export function timeToRead(text: string) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

export const cleanContent = (content: string) => {
  return content.replace(/\[\+\d+ chars\]$/, "").trim();
};
