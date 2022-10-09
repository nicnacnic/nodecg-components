const express = require('express');
const path = require('path');

module.exports = (nodecg) => {

    const app = nodecg.Router();

    app.use('/components', express.static(path.join(__dirname, 'components')))

    nodecg.mount('/', app);
}