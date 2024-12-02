import express from 'express'

const app = express();

app.get("/api/jokes", (req, res) => {
    const jokes = [
			{
				id: 1,
				name: "J1",
				desc: "This is Joke 1",
			},
			{
				id: 2,
				name: "J2",
				desc: "This is Joke 2",
			},
			
			{
				id: 3,
				name: "J3",
				desc: "This is Joke 3",
			}
    ];
    res.send(jokes);
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})