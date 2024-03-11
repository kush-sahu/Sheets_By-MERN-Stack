




import React, { useEffect, useState } from 'react';
import './App1.css';
import thImage from "./th.jpeg"; // Import the image
import Youtube from "./youtube.jpg";
function App() {
  const [cards, setCards] = useState([]);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [selectedCards, setSelectedCards] = useState({}); // State to track selected cards for each topic

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch('./src/450DSA.json');
      const data = await response.json();
      if (data && data.Sheet1) {
        setCards(data.Sheet1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Load selected cards from localStorage after state initialization
    const loadSelectedCards = () => {
      const storedSelectedCards = localStorage.getItem('selectedCards');
      if (storedSelectedCards) {
        setSelectedCards(JSON.parse(storedSelectedCards));
      }
    };

    loadSelectedCards();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const toggleTopic = (topic) => {
    setExpandedTopics((prevExpanded) => ({
      ...prevExpanded,
      [topic]: !prevExpanded[topic]
    }));
  };

  // Group cards by topic
  const groupedCards = cards.reduce((acc, card) => {
    const topic = card['Topic:'];
    if (!acc[topic]) {
      acc[topic] = [];
    }
    acc[topic].push(card);
    return acc;
  }, {});

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  const handleChoose = (topic, index) => {
    setSelectedCards((prevSelectedCards) => {
      const updatedSelectedCards = { ...prevSelectedCards };
      const topicSelectedCards = updatedSelectedCards[topic] || [];

      if (topicSelectedCards.includes(index)) {
        // Deselect the card if it's already selected
        updatedSelectedCards[topic] = topicSelectedCards.filter((cardIndex) => cardIndex !== index);
      } else {
        // Select the card if it's not selected
        updatedSelectedCards[topic] = [...topicSelectedCards, index];
      }

      // Save selected cards to local storage
      localStorage.setItem('selectedCards', JSON.stringify(updatedSelectedCards));

      return updatedSelectedCards;
    });
  };

  return (
    <div className="container-App1">
      {Object.entries(groupedCards).map(([topic, cards]) => (
        <div key={topic} className="topic-container-App1">
          <h2 className="topic-heading-App1" onClick={() => toggleTopic(topic)}>
            {topic}
          </h2>
         
          {expandedTopics[topic] && (
            <div className='insideTopic-App1'>
              {cards.map((card, index) => (
                <div key={index} className="card flex">
                  <div>
                    <button onClick={() => handleChoose(topic, index)} style={{ color: selectedCards[topic] && selectedCards[topic].includes(index) ? 'red' : 'black' }}>
                      {selectedCards[topic] && selectedCards[topic].includes(index) ? 'Done' : 'Choose'}
                    </button>
                  </div>
                  <div className='Topic'><h3>Topic: {card["Topic:"]}</h3></div>
                  <div className='problemname-App1'><h4> {card["Problem: "]}</h4></div>
                  <div>
                  <img className='gfgimage' src={Youtube} alt="Thumbnail"/>
                    <img className='gfgimage' src={thImage} alt="Thumbnail" onClick={() => handleImageClick(card.URL)} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
