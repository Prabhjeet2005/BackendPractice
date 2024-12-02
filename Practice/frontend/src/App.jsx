import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [joke, setjoke] = useState([])

  useEffect(() => {
    axios.get('/api/jokes').then((response) => {
      setjoke(response.data)
    }).catch((error) => {
      console.log(error)
    })
  })
  return (
		<>
			<div>No. of Jokes: {joke.length}</div>
			{joke.map((i) => (
				<div key={i.id}>
					<h2>{i.name}</h2>
					<h2>{i.desc}</h2>
				</div>
			))}
		</>
	);
}

export default App