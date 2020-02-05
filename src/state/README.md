# Jamstate
The core state management system for the jamstack ecosystem. The only true dependencies are Redux, React, and Reselect. If you are unfamiliar with any of the listed libraries, here are some of the core things you need to know about each of them:

## Core Concepts
### React
#### Context
Context allows for state to be supplied by `Provider` and a `Consumer` can then utilize the value of the `Provider`. This can clean up code by straying away from prop drilling in favor of consuming state on demand. 
### Redux
#### Selectors
Selectors allow for certain parts of state to be derived and retrieved. They are especially utilized when using `useSelector` to access parts of the state tree
### Reselect
Reselect allows for selectors to be optimized by allowing for the selector value to be memoized
## Further Reading
[Selectors and Memoized Selectors (Reselect)](https://redux.js.org/recipes/computing-derived-data/)
[React Context](https://www.robinwieruch.de/react-context)
