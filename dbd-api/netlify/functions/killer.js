exports.handler = async function () {
  // Your list of options
  const options = [
    'Springtrap FNAF MOMENT YES YES YES',
    'Kaneki',
    'Houndmaster',
    'Lich',
    'Xenomorph',
    'Singularity',
    'Skull Merchant',
    'Knight',
    'Wesker',
    'Dredge',
    'Sadako',
    'Artist',
    'Trickster',
    'Blight',
    'Oni',
    'Demogorgon',
    'Ghostface',
    'Plague',
    'Legion',
    'Spirit',
    'Clown',
    'Pig',
    'BUBBA',
    'Huntress',
    'Doctor',
    'Hag',
    'MIKEY MA BOI',
    'Nurse',
    'Hillbilly',
    'Wraith',
    'Trapper',
    'Krasue',
    'Pinhead',
    'Pyramid Head',
    'Deathslinger',
    'Twins',
    'Chucky',
  ]

  const randomIndex = Math.floor(Math.random() * options.length)
  const selectedOption = options[randomIndex]

  return {
    statusCode: 200,
    body: JSON.stringify({
      killer: selectedOption,
    }),
  }
}
