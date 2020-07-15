import React from 'react';
import Img from 'react-image';
import placeholder from './product-placeholder.png';
const Placeholder = () => <img src={placeholder} alt='product img loder' />;
export default function Image({
  url,
  alt = 'placeholder',
  unloader,
  loader,
  media,
  className,
  style,
}: {
  url?: string | [string];
  alt?: string;
  unloader?: string;
  loader?: string;
  media?: any;
  className?: string;
  style?: any;
}) {
  return (
    <Img
      draggable={false}
      style={style}
      src={media ? process.env.MEDIA_URL + url : url}
      alt={alt}
      loader={<Placeholder />}
      unloader={<Placeholder />}
      className={className}
    />
  );
}
