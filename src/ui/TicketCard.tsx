import React from 'react';
import { Box, Button, Card, Image } from '@chakra-ui/react';
import turkishLogo from '../assets/Turkish_Airlines.png';
import flightImg from '../assets/flightImg.png';
import '../tickets.css';
import type { TicketType } from '../types/TicketType';

type TicketCardProps = {
  ticket: TicketType;
  currency: string;
};

export default function TicketCard({ ticket, currency }: TicketCardProps): JSX.Element {
  function convertCurrency(price: number, currentCurrency: string): number {
    if (currentCurrency === '$') {
      const exchangeRate = 1 / 94;
      const convertedPrice = price * exchangeRate;
      return Number(convertedPrice.toFixed(2));
    }
    if (currency === '€') {
      const exchangeRate = 1 / 102;
      const convertedPrice = price * exchangeRate;
      return Number(convertedPrice.toFixed(2));
    }
    return price;
  }

  function formatDate(dateString: string): string {
    const dateParts = dateString.split('.').map(Number);
    const date = new Date(2000 + dateParts[2], dateParts[1] - 1, dateParts[0]);

    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      weekday: 'short',
    };

    const formattedDate = date.toLocaleDateString('ru-RU', options);

    return formattedDate.replace(',', '');
  }

  return (
    <Card
      rounded={0}
      style={{
        width: '575px',
        height: '200px',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
        paddingRight: '20px',
        borderRadius: '15px',
      }}
    >
      <Box className="logo-box">
        <Image src={turkishLogo} alt="Turkish Airlines Logo" className="logo" />
        <Button colorScheme="orange" className="buy-button" style={{ height: '60px' }}>
          Купить <br /> за {convertCurrency(ticket.price, currency)} {currency}
        </Button>
      </Box>
      <Box className="content-box">
        <Box className="transfer">
          {ticket.stops === 0 && 'Прямой Рейс'}
          {ticket.stops === 1 && `${ticket.stops} Пересадка`}
          {ticket.stops > 1 && `${ticket.stops} Пересадки`}
        </Box>
        <span className="content">
          <Box className="time-container">{ticket.departure_time}</Box>
          <Image src={flightImg} alt="Flight Icon" className="flight-icon" />
          <Box className="time-container">{ticket.arrival_time}</Box>
        </span>
        <span className="content-destinations">
          <Box>
            {ticket.origin},{ticket.origin_name}
          </Box>
          <Box>
            {ticket.destination},{ticket.destination_name}
          </Box>
        </span>
        <span className="content-dates">
          <Box>{formatDate(ticket.departure_date)}</Box>
          <Box>{formatDate(ticket.arrival_date)}</Box>
        </span>
      </Box>
    </Card>
  );
}
