# Rick & Morty
This app uses the Rick and Morty API to display a list of locations alongside their name, type and characters. Character details can be checked and persistent comments about a specific character recorded.

## Tech Stack
This app is built using Next JS, TypeScript and Tailwind CSS

## Chosen endpoint - GRAPHQL
I picked the GraphQL endpoint as it provides a flexible querying mechanism that allows retrieval of only the data required for the correctness of the application.

By interpretation the statement: <br>
    `Retrieve a list of locations (name and type), along with the residents of that location and their status.
    `
<br>
The data provided by the **REST endpoint** provides alot more information that really is not required and needs additional unnecessary processing. As such I came up with the **GRAPHQL query** that provides only the required data.

    `
    {
        locations {
        results {
            name
            type
            residents {
            status
            image
            name
            episode {
                name
            }
        }
        }
    }
    }`

## Data Persistence
I used **local storage** to persist notes about characters. The reasons for this choice is as follows: 

1. By virtue of the fact that there was no preferred manner to persist data, the overhead of additional setup of a database, which may require installation and additional configuration on the part of the tester is eliminated.

2. Local storage is guaranteed to work correctly regardless of underlying system architecture and requirements.

## Design & Implementation Choices
### Redux

- [ ] I used Redux for state management in the application to eliminate the need for multiple network requests. There is alot of data being fetched and that would not guarantee a great user experience if we have several netwrok fetch requests.

- [ ] Static data: The data from the API is static and doesnt change so often. This means in the long run, the data is not stale, and we can be guaranteed correct data over the course of a user's session.

- [ ] Another reason was for filtering functionality. Having the data in global state means that we can filter the original results on a search operation. Without global state, we would need to:

 1. Define multiple queries for filtering results from the GraphQL endpoint

 2. Make a network request everytime there is a search operation

I traded off this overhead with state management and `filtering the state data` on the client side.



## Getting Started

First, clone this repository using `git clone` 
Then install dependencies `npm i`

Afterwards run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
