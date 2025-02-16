import React from 'react';
import Card from './Card';
import './App.css';

function App() {
  const data = [
    {
      img: "https://dzvin.media/wp-content/uploads/2019/11/orig.jpg",
      title: "Перший кіт",
      description: "Це сіамська кішка."
    },
    {
      img: "https://dzvin.media/wp-content/uploads/2019/11/shunshula.jpg",
      title: "Другий кіт",
      description: "Це британська плюшева кішка."
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