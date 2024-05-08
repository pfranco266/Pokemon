Pokemon card collection is a React app that allows Pokemon fans to browse their favorite pokemon, "purchase" my mock pokemon cards. For this, I've used data from the PokeAPI, where users can explore detailed information on Pokémon and "purchase" their favorites to a personal collection.


Features
Browse Pokémon: View the initial list of Pokémon from the the PokeAPI, and keep exploring with pagination.
Add your favorite(s) to the cart: Click on any Pokemon to add them (or multiple of the same), to the cart for purchase. 
Search: Find Pokemon with a dynamic search bar (coming soon)



Getting Started
These instructions will get you a copy of the project up and running on your local environment. 

Prerequisites
What you need to install the software:
first: 
Node.js
npm (Node Package Manager)
Git


After installation, run in your terminal: 

1. git clone https://github.com/pfranco266/Pokemon-card-collection.git

2. cd Pokemon-card-collection

3. npm install

4. npm run dev

The project should then be running on http://localhost:5173/


Authors
Phil Franco - Initial work - pfranco266


Acknowledgments
The Pokemon raps are the greatest era of music known to man. 




and some more obvious ones: 
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



EXTRAS

Challenges: 
This initially began as an excercise from a youtube video for interview preparations. It started as a little project to practice pagination. The PokeAPIs provided a really good starting point for that, 
as the fetch'd JSON that is sent back, is the first 20 pokemon names, and their URLs - (this is where the fun begins). So in Pokemon.jsx, you have that initial request (https://pokeapi.co/api/v2/pokemon/), which i used to display grid items. so to display any meaningful information, you have to make a second request to get the individual Pokemon information (https://pokeapi.co/api/v2/pokemon/INDEX/), which i passed down to each of the individual grid item components, called PokemonCard.jsx. I thought it would be fun to make a little card out of them given the information provided. So I adapted my pagination (which was already done), and began displaying mock pokemon cards. I then ran into my next problem. If you want to display a previous pokemon's evolution, you can't just use (index -1) for the previous pokemon picture, because not all pokemon evolve from other Pokemon. So you have to fetch the individual Pokemon evolution details, to get their trees (https://pokeapi.co/api/v2/pokemon-species/INDEX/). Then, you have to fetch the indivudal pokemon details, again, for the evolution tree ex:(https://pokeapi.co/api/v2/pokemon/${cardPokemon.evolutionTree.evolvesFrom.id}), if it exists, and display the picture from the returned data. It was quite a bit to keep track of, and where all the fetched info is coming from, which component can use it, and cumbersome on the application in general. 

Challenge 2: 
This one i'm quite proud of. I created colorMap, to dynamically get me values based on which type of Pokemon they are. so i could access the object colorMap.water for example and would have available, it's color, it's icon, and weaknessess/resistances. The challenge came from the inherent way of Pokemon. Some have one type, some have two types. I also knew since the component was so similar, i could make it resuable if I thought about it. so I passed in both types (if available), and a true/false for weakness or resistance, which only displayed if true. From there, i made an object typechart that included each pokemon's type weakness, which i put through a function, into it's own object arrays. Since two different Pokemon types can have the same weakness, i used a Set, to only display the unique Pokemon types total weaknesses. Then, using the colormap, displayed the same icons associated with each type, to display their weaknesses. I think there was one Pokemon with 11 weaknesses, made everthing look horrid, so i limted to 10. 



Lessons learned: 

I do daily excercises to practice and reinforce learning. I had a friend tell me to keep projects I work on, so this just evolved into that. Had I planned this from the beginning, I would have structured the fetch reqeusts differently, as well as made a more unique way to keep track of each pokemon, rather than using index, which I know is a no-no. However, in the moment, it was an okay choice. In the end it didn't effect the project, but I did have it affect some cart functionality when I was trying to implemnt a slice method and useContext, where it would then cut out the Home page Pokemon display. 
