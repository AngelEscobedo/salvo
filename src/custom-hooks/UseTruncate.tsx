import { useState, useEffect } from 'react';

export const useTruncate = (text: string, maxLength: number) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text?.length > maxLength) {
      setTruncatedText(`${text.slice(0, maxLength)}...`);
    } else {
      setTruncatedText(text);
    }
  }, [text, maxLength]);

  return truncatedText;
};