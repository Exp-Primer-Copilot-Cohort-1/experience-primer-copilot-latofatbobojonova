// Create a web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Return a list of comments
// 4. Create a route for GET /comments/:id
// 5. Return a comment with the given id
// 6. Create a route for POST /comments
// 7. Create a new comment
// 8. Create a route for PUT /comments/:id
// 9. Update the comment with the given id
// 10. Create a route for DELETE /comments/:id
// 11. Delete the comment with the given id
// 12. Run the server and test all the endpoints

const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const comments = [
    { id: 1, comment: 'comment1' },
    { id: 2, comment: 'comment2' },
    { id: 3, comment: 'comment3' },
    { id: 4, comment: 'comment4' },
    { id: 5, comment: 'comment5' },
    { id: 6, comment: 'comment6' },
    { id: 7, comment: 'comment7' },
    { id: 8, comment: 'comment8' },
    { id: 9, comment: 'comment9' },
    { id: 10, comment: 'comment10' },
];

// 2. Create a route for GET /comments
// 3. Return a list of comments
app.get('/api/comments', (req, res) => {
    res.send(comments);
});

// 4. Create a route for GET /comments/:id
// 5. Return a comment with the given id
app.get('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) res.status(404).send(`The comment with the given id ${req.params.id} was not found`);
    res.send(comment);
});

// 6. Create a route for POST /comments
// 7. Create a new comment
app.post('/api/comments', (req, res) => {
    const { error } = validateComment(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const comment = {
        id: comments.length + 1,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});
