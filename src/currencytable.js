import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const validCurrencies = ['USD', 'EUR', 'GBP'];

const CurrencyTable = () => {
  const [currencyData, setCurrencyData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        );

        // Фільтруємо дані за останні 7 днів для валют USD, EUR і GBP
        const currentDate = moment().startOf('day');
        const lastWeekData = response.data.filter((item) => {
          const itemDate = moment(item.exchangedate, 'DD.MM.YYYY');
          return (
            currentDate.diff(itemDate, 'days') < 7 &&
            currentDate.diff(itemDate, 'days') >= 0 &&
            validCurrencies.includes(item.cc)
          );
        });

        setCurrencyData(lastWeekData);
      } catch (error) {
        console.error('Error fetching currency data:', error);
        setError('Error fetching currency data. Please try again later.');

        // Додамо вивід інформації про помилку в консоль
        console.error(error.response.data);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Exchange rates for the last day today</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>USD to UAH</th>
            <th>EUR to UAH</th>
            <th>GBP to UAH</th>
          </tr>
        </thead>
        <tbody>
          {currencyData.map((item) => (
            <tr key={item.exchangedate}>
              <td>{moment(item.exchangedate, 'DD.MM.YYYY').format('YYYY-MM-DD')}</td>
              <td>{item.cc === 'USD' ? (item.rate !== null && item.rate !== undefined ? item.rate.toFixed(2) : 'N/A') : '-'}</td>
              <td>{item.cc === 'EUR' ? (item.rate !== null && item.rate !== undefined ? item.rate.toFixed(2) : 'N/A') : '-'}</td>
              <td>{item.cc === 'GBP' ? (item.rate !== null && item.rate !== undefined ? item.rate.toFixed(2) : 'N/A') : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
