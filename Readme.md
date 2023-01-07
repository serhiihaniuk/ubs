## Setup

I've hosted running build [here](https://ubs-xi.vercel.app/),
or you can run it on your machine:

- clone git repository
- run `npm i`
- run `npm start`
- default port is `8080`

## Some app design solutions

- Stack: React, typescript, webpack, redux, react-query, axios.
- When using the search, outdated queries are cancelled, so I didn't make debounce.
- In that task, it was necessary to display the rating in the list on the main page, but some shows do not have it.
- Search component is accessible for mouse and keyboard.



