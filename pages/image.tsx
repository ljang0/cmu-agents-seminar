/// <reference types="vite/client" />
/* oxlint-disable jsx-a11y/alt-text, next/no-img-element */
import type { ImgHTMLAttributes } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  unoptimized?: boolean;
};

export default function Image({ src = '', unoptimized, ...props }: ImageProps) {
  void unoptimized;
  const resolvedSrc =
    typeof src === 'string' && src.startsWith('/')
      ? `${import.meta.env.BASE_URL}${src.slice(1)}`
      : src;

  return <img {...props} src={resolvedSrc} />;
}
