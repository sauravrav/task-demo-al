import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardFooter } from 'reactstrap';

const Joke = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const numOfJokes = new Array(4).fill().map(() => axios.get("https://official-joke-api.appspot.com/random_joke"));

      try {
        const responses = await Promise.all(numOfJokes);
        const data = responses.map((response) => response.data);
        setJokes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop:'90px'}}>
      <h1>Jokes of the day</h1>
      {jokes.length > 0 ? (
        <div>
          {jokes.map(joke => (
            <Card key={joke.id} style={{ marginBottom: '20px' }}>
              <CardBody>
                <h2>{joke.setup}</h2>
              </CardBody>
              <CardFooter>{joke.punchline}</CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Joke;
