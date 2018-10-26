import React from 'react';

import formatAmount from '../../../../lib/formatAmount';
import { Icon } from '../../../../components';

const safeParam = {
  current: { yearly: 0, monthly: 0 },
  totals: { yearly: 0, monthly: 0 },
  estimated: { yearly: 0, monthly: 0 },
};

const items = (data = safeParam) => {
  const { current, estimated, totals } = data;

  return [
    {
      concept: (
        <React.Fragment>
          <Icon name="handshake" />
          <span>Renta Actual</span>
        </React.Fragment>
      ),
      yearly: formatAmount(current.yearly),
      monthly: formatAmount(current.monthly),
    },
    {
      concept: (
        <React.Fragment>
          <Icon name="handshake" />
          <div>
            <span>Renta Estimada</span>
            <span>Área Disponible</span>
          </div>
        </React.Fragment>
      ),
      yearly: formatAmount(estimated.yearly),
      monthly: formatAmount(estimated.monthly),
    },
    {
      concept: (
        <React.Fragment>
          <Icon name="estimatedAnualRent" />
          <div>
            <span>Renta Actual +</span>
            <span>Estimada</span>
          </div>
        </React.Fragment>
      ),
      yearly: formatAmount(totals.yearly),
      monthly: formatAmount(totals.monthly),
    }
  ];
};

export default items;
