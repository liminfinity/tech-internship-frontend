import { useParams } from 'react-router-dom';
import type { AdvertisementParams } from '../types';

export const useAdvertisementParams = () => useParams<AdvertisementParams>();
