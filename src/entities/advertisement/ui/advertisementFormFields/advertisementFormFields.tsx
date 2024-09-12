import { RHFInput, RHFInputNumber, RHFTextArea } from '@/shared/ui';
import type { AdvertisementForm } from '../../types';
import { FaRegImage, FaRegPenToSquare, FaRubleSign } from 'react-icons/fa6';
import { PRICE_MIN_VALUE } from './advertisementFormFields.constants';
import type { InputNumberProps } from 'antd';
import styles from './advertisementFormFields.module.scss';

const formatter: Required<InputNumberProps>['formatter'] = (value) =>
  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const AdvertisementFormFields = () => {
  return (
    <>
      <RHFInput<AdvertisementForm>
        name="name"
        required
        placeholder="Название объявления"
        size="large"
        allowClear
        prefix={<FaRegPenToSquare />}
      />
      <RHFInputNumber<AdvertisementForm>
        name="price"
        required
        placeholder="Цена"
        size="large"
        min={PRICE_MIN_VALUE}
        formatter={formatter}
        prefix={<FaRubleSign />}
        className={styles.priceInput}
      />
      <RHFTextArea<AdvertisementForm>
        name="description"
        placeholder="Описание объявления"
        size="large"
        allowClear
      />
      <RHFInput<AdvertisementForm>
        name="imageUrl"
        placeholder="Ссылка на изображение"
        size="large"
        allowClear
        prefix={<FaRegImage />}
      />
    </>
  );
};
