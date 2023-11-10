const app = require('./src/app');
const seed = require('./db/seed');

const PORT = 3000;

seed();

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
})