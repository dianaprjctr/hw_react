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
    {
      img: "https://dzvin.media/wp-content/uploads/2019/11/15-1024x680.jpg",
      title: "Третій кіт",
      description: "Це британська плюшева кішка."
    }
    {
      img: "https://dzvin.media/wp-content/uploads/2019/11/695378_1_w_570.jpg",
      title: "Четвертий кіт",
      description: "Це британська довгошерста кішка."
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