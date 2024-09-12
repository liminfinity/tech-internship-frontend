import type { ModalProps } from 'antd';

export type AddAdvertisementModalProps = Omit<ModalProps, 'onCancel'> & {
  onCancel?: VoidFunction;
};
