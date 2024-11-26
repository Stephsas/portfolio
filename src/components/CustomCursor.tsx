
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const mouseMoveHandler = (e: MouseEvent) => {
      cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      cursor.remove();
    };
  }, []);

  return null;
};

export default CustomCursor;
