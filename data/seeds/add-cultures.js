const cultureData = require('../seedData/foam-seed');

// cultureData.forEach((product) => {
// let cultures = product.url;
// let dates = product.lastModified;
// });

exports.seed = async function (knex) {
  // Deletes ALL existing entries, truncate resets all primary keys
  await knex('culture').truncate();

  await knex('culture').insert([
    {
      url: 'https://take-home-foam-challenge.s3.us-west-2.amazonaws.com/prod-exp13436-2020-01-08-at-04.24.38-9zijoye9dteugy6agooo506u3c6wrin920a99mavvv4z9mahkt7qbu6thl2l3v39.png',
      lastModified: '2022-02-23T21:31:27.000Z',
    },
  ]);
};
