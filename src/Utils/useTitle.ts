import { useEffect } from 'react';

export default function useTitle(title: string) {
  useEffect(() => {
    document.title = `OneItemShop | ${title}`;
  });
}