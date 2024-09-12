import { Col, Flex, Row } from 'antd';
import type { AdvertisementsPanelProps } from './advertisementsPanel.types';
import {
  AdvertisementSearch,
  AdvertisementFilters,
  AdvertisementList,
  AdvertisementPagination,
} from '@/features/advertisements';

export const AdvertisementsPanel = ({ className }: AdvertisementsPanelProps) => {
  return (
    <Flex vertical className={className}>
      <AdvertisementSearch />
      <Row>
        <Col span={8}>
          <AdvertisementFilters />
        </Col>
        <Col span={16}>
          <AdvertisementList />
        </Col>
      </Row>
      <AdvertisementPagination />
    </Flex>
  );
};
