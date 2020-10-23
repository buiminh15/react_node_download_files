const mongo = {
  collectionName: 'sampleDB'
};
const config = {
  port: 1001,
  mongo: {
    uri: `mongodb://localhost/${mongo.collectionName}`
  }
};

export default config;
