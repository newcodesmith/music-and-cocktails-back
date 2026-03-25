# Music and Cocktails Backend

## Purpose
Continuing my love for music and records, I created this app as a mock monthly record club that features 6 curated albums from different genres with a paired drink. The app allows you to see some info on the album and the paired drink as well as listen to the album on Spotify. In the future I would see the ability to buy the record and maybe a mixed drink package.

## Technologies used
Express, Knex, PostgreSQL

## Project Structure

```
src/
	app.js
	index.js
	config/
	middleware/
	modules/
		albums/
		drinks/
test/
```

## Live Site
Click [here]( https://music-and-cocktails.firebaseapp.com/) to enjoy!

## Repos
Click [here]( https://github.com/newcodesmith/music-and-cocktails-front) to see the frontend repo.

## Installation
To run locally:

1. Clone the repo
2. Install dependencies: `npm install`
3. Create a `.env` file from `.env.example`
4. Run migrations and seeds: `npx knex migrate:latest && npx knex seed:run`
5. Start API: `npm start`

## Scripts

- `npm start` - start server
- `npm run dev` - start with nodemon
- `npm run lint` - run eslint
- `npm test` - run smoke tests

## License
2018 NEWCODESMITH

