import {CriptoList} from '@services/useGetCriptos/types';

export interface RenderCriptosProps
  extends Omit<CriptoList, 'metrics' | 'serial_id'> {
  percent_change_usd_last_24_hours: number;
  price_usd: number;
}

export type QuotationProgress = {
  isPositive: boolean;
};
