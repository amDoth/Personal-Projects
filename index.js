const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const PORT = 3000;

//app.use(cors());


// Your list of options
const options = ['Springtrap FNAF MOMENT YES YES YES', 'Kaneki', 'Houndmaster', 'Lich', 'Xenomorph', 'Singularity', 'Skull Merchant', 'Knight', 'Wesker', 'Dredge', 'Sadako', 'Artist', 'Trickster', 'Blight', 'Oni', 'Demogorgon', 'Ghostface', 'Plague', 'Legion', 'Spirit', 'Clown', 'Pig', 'BUBBA', 'Huntress', 'Doctor', 'Hag', 'MIKEY MA BOI', 'Nurse', 'Hillbilly HAH', 'Wraith', 'Trapper', 'Krasue', 'Pinhead', 'Pyramid Head', 'Deathslinger'];

app.get('/killer', (req, res) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  const selectedOption = options[randomIndex];
  res.json({option: selectedOption});
});

app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);

});
