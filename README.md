# Task

## As a React developer, you should implement an autocomplete component of cities.

- Use any UI libraries such as bootstrap/material etc.
- The component should be written using React.Js.
- The server-side should be written as API.
- Bonus - add meaningful unit tests.

## Description of implementation

### Server

- I Started by creating a simple NodeJs server with typescript and Express.
- my decision of using a JSON file to store the data was necessary since I did not have a DB.
- I decide to return a JSON at the end point `localhost:3001/locations` that should look like the normal data structure
  on a real call.

### Client

- since it was such a small task I decided to just create 3 components, and I didn't separate UI from Baseness has I
  could.
- styles are using CSS modules and are very basic without any option to dynamically change the look.
- I decided to transform the JSON data that I am getting from the server on an array of strings and just filter them and
  lock if any character is present on my input.
- I create a custom hook for the touch outside the component since that logic does not belong there.

## Improvements that could have been done

- Components could be more dynamic.
- When filtering data could have been sorted and then used a binary search to make it faster.
- styles could have been better with CSS variables and more responsive.
- Could have more tests.
- could have done more integration tests.
- Fetch should have been done on autocomplete component since app does not care about that data and autocomplete component does not have siblings, but since this app is minimal should be fine.

## Final takeaways

Over all the task has what was asked, and I think that It is possible to see my coding style and some of my skills.

# how to run the application

 ```bash
cd server/
npm run build
npm run start
..
cd client/
npm run dev or (npm run build && npm run start)
```

# To run the tests

```bash
npm run test
```

