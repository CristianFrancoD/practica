
import express from 'express';
import fetch from 'node-fetch';




const app = express();


app.get('/health',(req,res)=>{
	res.status(200).send('Ok')
});

app.get('/pokemon/:poke', async(req,res)=>{

	try {
		
		const pokemon = req.params.poke
		const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
		const data = await response.json();

		console.log(data);
		res.status(200).json(data);
	} catch (error) {
		console.log(error)
		res.status(404).json({msg:"Error pokemon not found"})
	}


});

app.listen(8090,()=>{
	console.log("listening on port 8090")
});

export default app