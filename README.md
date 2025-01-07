### quizlingo

features

-   join quiz using a code
-   create quiz
    -   choose between 3 question styles: "drag/drop", "write the translation", and "identify the error"
-   login to save progress, or continue with the guest account (doesn't save work)

pages

-   landing (join or create a game, but you have to either login or run guest mode)
-   dashboard (after login), with a list of quizzes
-   edit quiz page, where you see all the questions (and can modify/delete)
-   question pages (actually playing the quiz)
    -   drag/drop
    -   type the translation
    -   identify the error (type the error)

tech stack

-   backend: flask
-   frontend: react/typescript/mui
    -   routing: react router
-   database: firebase (easier to do google authentication instead of having to involve 2 separate libraries otherwise)

workflow

1. figure out routes
2. develop ui for all pages
    - drag/drop is probably going to be the hardest
3. work on features
    - dashboard -> add a quiz -> adjust database/read/write to guest account
    - edit quiz -> edit the quiz object in the database, saving
    - validating answers to questions
    - add user authentication

routes

-   /
-   /dashboard
-   /edit/quizId
-   /play/quizId
-   /login
