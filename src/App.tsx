import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import FiltersCard from './ui/FiltersCard';
import TicketsList from './ui/TicketsList';
import PlaneSvg from './assets/Antu_x-plane.svg.png';

function App(): JSX.Element {
  const [currency, setCurrency] = useState('RUB');
  const [stopsFilter, setStopsFilter] = useState('ALL');

  const handleCurrencyChange = (newCurrency: string): void => {
    setCurrency(newCurrency);
  };

  const handleFilterChange = (stops: string): void => {
    setStopsFilter(stops);
  };

  return (
    <>
      <img
        style={{ height: '150px', margin: '0 auto', marginBottom: '40px', marginTop: '40px' }}
        src={PlaneSvg}
        alt="planeImg"
      />
      <Box
        style={{
          width: '70%',
          height: 600,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <FiltersCard onFilterChange={handleFilterChange} onCurrencyChange={handleCurrencyChange} />
        <TicketsList stopsFilter={stopsFilter} currency={currency} />
      </Box>
    </>
  );
}

export default App;
