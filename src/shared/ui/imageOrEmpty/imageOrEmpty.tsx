import { Empty, Image } from 'antd';
import type { ImageOrEmptyProps } from './imageOrEmpty.types';

export const ImageOrEmpty = ({ src, ...props }: ImageOrEmptyProps) => {
  return (
    <>
      {src && <Image src={src} {...props} />}
      {!src && <Empty description="Нет изображения" image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </>
  );
};
