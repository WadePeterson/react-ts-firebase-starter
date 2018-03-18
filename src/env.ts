function getConfig() {
  const environment = process.env.NODE_ENV as string;

  return {
    environment,
    firebase: {
      apiKey: 'AIzaSyDiTRYRMAPIG5udTp1S61e4oW6Bh1oAssE',
      authDomain: 'what-should-we-eat.firebaseapp.com',
      databaseURL: 'https://what-should-we-eat.firebaseio.com'
    },
    shouldShowDevTools: environment === 'development'
  };
}

export default getConfig();
