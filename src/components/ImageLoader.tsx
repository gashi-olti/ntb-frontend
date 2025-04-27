interface ImageLoaderProps {
  src: string;
  quality?: number;
}

const ImageLoader = ({ src, quality }: ImageLoaderProps) => {
  return `${src}?q=${quality || 75}`;
};

export default ImageLoader;
