import { DashboardCard } from '@/app/ui/dashboard';
import { SummaryTable, SummaryTableHeader } from '@/app/ui/summary-table';
import React, { FC } from 'react';

export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

const summarySales: SummarySales[] = [
  {
    id: '1',
    companyId: '1',
    companyTitle: 'CostcoWholesale',
    sold: 459,
    income: 600,
  },
  {
    id: '2',
    companyId: '1',
    companyTitle: 'CostcoWholesale',
    sold: 459,
    income: 600,
  },
  {
    id: '3',
    companyId: '1',
    companyTitle: 'CostcoWholesale',
    sold: 459,
    income: 600,
  },
  {
    id: '4',
    companyId: '1',
    companyTitle: 'CostcoWholesale',
    sold: 459,
    income: 600,
  },
  {
    id: '5',
    companyId: '1',
    companyTitle: 'CostcoWholesale',
    sold: 459,
    income: 600,
  },
  {
    id: '6',
    companyId: '1',
    companyTitle: 'CostcoWholesale',
    sold: 459,
    income: 600,
  },
];

export interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <DashboardCard cardLabel="Sales details">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {summarySales.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <td>{companyTitle}</td>
            <td align="center">{sold}</td>
            <td align="center">{`$${income}`}</td>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
};

export default Page;
