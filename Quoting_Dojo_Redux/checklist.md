1. Dependencies
    + `body-parser`
    + `express`
    + `mongoose`
    + `ejs`

2. views
    + `welcome.ejs`
    + Form to create a new quote
    + `quotes.ejs`
    + List of quotes

3. Server
    + Set up simple server
    + Set my `views`
    + Build my routes
    + GET `/` => render welcome page
    + POST `/quotes` => create a quote
    + GET `/quotes` => render quotes page


4. Database
    + Run MongoDB server
    + Connect to express server
    + Create schemas/models
    + User
    + Quote
    + ...

5. Write CRUD logic that links front end to database...
    + When welcome form is posted, create quote within POST `/quotes` callback
    + When /quotes route is hit with GET request, we need to find all the quotes and pass them into the view.
