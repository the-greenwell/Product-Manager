const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB Connected :)'))
    .catch((err) => console.log('DB error: ', err))