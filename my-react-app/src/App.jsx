import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  const data = [
    {
      img: "https://images.pexels.com/photos/4587983/pexels-photo-4587983.jpeg",
      title: "Dog in the Park",
      description: "A cute dog enjoying the sun."
    },
    {
      img: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg",
      title: "Sleepy Dog",
      description: "A sleepy dog taking a nap."
    }
  ];

  return (
    <div className="app">
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;