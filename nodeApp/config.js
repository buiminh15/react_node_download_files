const mongo = {
  collectionName: 'sampleDB',
  password:'iz47D9SzVk5kADn9'
};
const config = {
  port: 1001,
  mongo: {
    uri: `mongodb+srv://minhbb:${mongo.password}@cluster0.hpzqz.mongodb.net/${mongo.collectionName}?retryWrites=true&w=majority`
  }
};

export default config;
