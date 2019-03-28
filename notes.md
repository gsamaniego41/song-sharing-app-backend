# MVP

### Tables

1. Users

- id: primary key, auto increments
- name: text, required, unique
- email: text, required, unique

2. Posts

- id: PK, increments
- song: string (for now), required
- caption: string
- likes: integer

3. Collections

- id: PK, increments
- title: string, unique
- user_id: references the id in the users table

### Endpoints

1. Users

2. Posts

3. Collections
