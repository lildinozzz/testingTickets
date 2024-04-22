import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import TicketCard from './TicketCard';
import ticketsData from './tickets.json';
import type { TicketType } from '../types/TicketType';

export type TicketsListProps = {
  currency: string;
  stopsFilter: string;
};

export default function TicketsList({ currency, stopsFilter }: TicketsListProps): JSX.Element {
  const [tickets, setTickets] = useState<TicketType[]>([]);

  useEffect(() => {
    const filterTickets = (allTickets: TicketType[]): TicketType[] => {
      switch (stopsFilter) {
        case 'ALL':
          return allTickets;
        case '0':
          return allTickets.filter((el) => el.stops === 0);
        case '1':
          return allTickets.filter((el) => el.stops === 1);
        case '2':
          return allTickets.filter((el) => el.stops === 2);
        case '3':
          return allTickets.filter((el) => el.stops === 3);
        default:
          return allTickets;
      }
    };
    const filteredTickets = filterTickets(ticketsData.tickets);
    setTickets(filteredTickets);
  }, [stopsFilter]);

  return (
    <Box>
      {tickets &&
        tickets.map((ticket) => <TicketCard currency={currency} key={ticket.id} ticket={ticket} />)}
    </Box>
  );
}
