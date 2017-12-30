/**
 * Created by flyin on 2017/11/14.
 */
import express from 'express';
import React from 'react';
import renderer from './helpers/renderer'

const app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log("Server run on port 3000");
});