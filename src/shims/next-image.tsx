/*
 * Stand-in for `next/image`, aliased in astro.config.ts.
 *
 * @avocadostudio-ai/blocks is published against Next.js and imports
 * `next/image` for its media blocks. Astro has no Next runtime, so this
 * renders a plain <img> with the props that survive the translation and drops
 * the Next-only ones (priority, quality, loader, placeholder…), which are
 * hints to Next's optimizer rather than rendered attributes.
 */
import * as React from 'react';

type NextImageProps = {
  src: string | { src: string };
  alt?: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  unoptimized?: boolean;
  loader?: unknown;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

export default function Image({
  src,
  alt = '',
  width,
  height,
  fill,
  className,
  style,
  sizes,
  loading,
  priority,
  onLoad,
  onError,
  // Next-only knobs with no HTML equivalent.
  quality: _quality,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  loader: _loader,
  ...rest
}: NextImageProps & Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height' | 'loading'>) {
  const resolved = typeof src === 'string' ? src : src?.src;

  // `fill` in Next means "stretch to the positioned parent".
  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {};

  return (
    <img
      src={resolved}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      // `priority` is Next's way of saying "don't lazy-load this".
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding="async"
      className={className}
      style={{ ...fillStyle, ...style }}
      onLoad={onLoad}
      onError={onError}
      {...rest}
    />
  );
}

export { Image };
