import type { ModalProps } from 'antd';

export type UpdateAdvertisementModalProps = Omit<ModalProps, 'onCancel'> & {
  onCancel?: VoidFunction;
  advertisementId: string;
};
