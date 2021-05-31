module.exports = {
  url: 'http://localhost:{port}',
  description: 'Local Server',
  variables: {
    port: {
      enum: [
        '3000',
      ],
      default: '3000'
    }
  }
};
