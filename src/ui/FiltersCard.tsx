import { Button, ButtonGroup, Checkbox, Flex } from '@chakra-ui/react';
import React from 'react';
import '../filters.css';

type FiltersCardProps = {
  onCurrencyChange: (currency: string) => void;
  onFilterChange: (stops: string) => void;
};

export default function FiltersCard({
  onFilterChange,
  onCurrencyChange,
}: FiltersCardProps): JSX.Element {
  return (
    <Flex className="filters-card">
      <h1>ВАЛЮТА</h1>
      <ButtonGroup className="currency-buttons" variant="outline" mt={3}>
        <Button
          onClick={() => onCurrencyChange('₽')}
          colorScheme="blue"
          rounded="none"
          className="currency-button"
        >
          RUB
        </Button>
        <Button
          onClick={() => onCurrencyChange('$')}
          colorScheme="blue"
          rounded="none"
          className="currency-button"
        >
          USD
        </Button>
        <Button
          onClick={() => onCurrencyChange('€')}
          colorScheme="blue"
          rounded="none"
          className="currency-button"
        >
          EUR
        </Button>
      </ButtonGroup>
      <h1 className="section-title">Количество пересадок</h1>
      <Flex
        className="transfers-checkboxes"
        flexDirection="column"
        justifyContent="space-around"
        mt={3}
        width="100%"
      >
        <Checkbox
          onChange={(e) => e.currentTarget.checked && onFilterChange('ALL')}
          variant="outline"
          className="transfer-checkbox"
        >
          Все
        </Checkbox>
        <Checkbox
          onChange={(e) => e.currentTarget.checked && onFilterChange('0')}
          variant="outline"
          className="transfer-checkbox"
        >
          Без пересадок
        </Checkbox>
        <Checkbox
          onChange={(e) => e.currentTarget.checked && onFilterChange('1')}
          className="transfer-checkbox"
        >
          1 пересадка
        </Checkbox>
        <Checkbox
          onChange={(e) => e.currentTarget.checked && onFilterChange('2')}
          className="transfer-checkbox"
        >
          2 пересадки
        </Checkbox>
        <Checkbox
          onChange={(e) => e.currentTarget.checked && onFilterChange('3')}
          className="transfer-checkbox"
        >
          3 пересадки
        </Checkbox>
      </Flex>
    </Flex>
  );
}
