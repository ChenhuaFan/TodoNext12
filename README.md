# TodoNext12

A Next.js full-stack app

## Functionality

- User login
- Authorized users can add, edit, delete, and update their todo items.

## System Design

### Backend

Hosted on the Next.js API.

#### Database Design

Powered by Sqlite. using database.db file as the db source.

**Data Structure:**

*User*

| name | type | description | required |
| --- | --- | --- | --- |
| id | `string` | user id as the primary key | `true` |
| name | `string` | user fullname | `true` |
| password | `string` | user password | `true` |
| email | `string` | user email (for third-party login) | `false` |

*Todo List*

| name | type | description | required |
| --- | --- | --- | --- |
| id | `string` | todo list id as the primary key | `true` |
| name | `string` | todo list name | `true` |
| userId | `string` | user identities | `false` |

*Todo*

| name | type | description | required |
| --- | --- | --- | --- |
| id | `string` | todo id as the primary key | `true` |
| name | `string` | todo content | `true` |
| completed | `boolean` | is todo completed | `true` |
| parentId | `string` | id of the parent todo item for nested todos | `false` |

### Frontend

Next.js (SSR + CSR)

#### Router

- Login Page (/login): Create a login page where users can authenticate. You can use Next.js's built-in authentication or integrate third-party authentication providers like OAuth.

- Todo List Page (/): This page will display the user's todo lists. It will also provide options to add new lists and navigate to individual todo lists.

- Todo List Detail Page (/lists/:listId): Display the individual todo list's details and associated todo items. Users can add, edit, and delete todo items here.