import React from 'react';
import './css/HomePage.css';

const openingTimes = [
  {name: 'Sunday'},
  {name: 'Monday'},
  {name: 'Tuesday'},
  {
    name: 'Wednesday',
    times: {
      start: 17,
      end: 17.50,
    }
  },
  {
    name: 'Thursday',
    times: {
      start: 17.50,
      end: 18.00
    }
  },
  {
    name: 'Friday',
    times: {
      start: 18.00,
      end: 18.50
    }
  },
  {name: 'Saturday'}
];

function isShopOpenYet() {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const time = date.getHours() + date.getMinutes() / 60;

  const openingTime = openingTimes[dayOfWeek];
  if (!openingTime || !openingTime.times) {
    return false;
  }

  return openingTime.times.start <= time && openingTime.times.end >= time;
}

function padStart(number, size) {
  var s = String(number);
  while (s.length < size) {
    s = '0' + s;
  }

  return s;
}

function formatTime(time) {
  const hour = Math.floor(time);
  const minute = ((time - hour) * 60);
  return `${padStart(hour, 2)}:${padStart(minute, 2)}`;
}

function formatTimes(time) {
  if (!time.times) {
    return 'Closed';
  }

  return `${formatTime(time.times.start)} - ${formatTime(time.times.end)}`;
}

const OpeningTimeDetails = ({ time }) => {
  const today = openingTimes[new Date().getDay()].name === time.name;
  const text = `${time.name}: ${formatTimes(time)}`;
  return (
    <React.Fragment>
      <p>{today ? <strong>{text}</strong> : text}</p>
    </React.Fragment>
  );
}

const IsShopOpenYetPage = () => {
  return (
    <main className="home-page">
      <div className="home-page-content">
        <h1 className="introduction">Is sHOP Open Yet?</h1>
        <h2>{isShopOpenYet() ? 'Yes' : 'No'}</h2>
        {openingTimes.map(t => <OpeningTimeDetails key={t.name} time={t} />)}
      </div>
    </main>
  );
};
export default IsShopOpenYetPage;