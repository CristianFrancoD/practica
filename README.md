# Welcome to Docker

This is a repo for a test.

You can try it out using the following command.

```
git clone https://github.com/CristianFrancoD/practica.git
```


```
docker run  -p 8090:8090 practica
```
And open `http://localhost:8088` in your browser.

# Building

Maintainers should see [MAINTAINERS.md](MAINTAINERS.md).

Build and run:
```
docker build -t practica . 
docker run  -p 8090:8090 practica
```
Open `http://localhost:8090/health` in your browser.

or


Open `http://localhost:8090/pokemon/anyPokemonName` in your browser to test this project.
