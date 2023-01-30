const login = (email, password) => new Promise((resolve, reject) => {
  console.log('Logging in with', { email, password });
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve({ userId: Math.ceil(Math.random() * 10) });
      return;
    }
    reject(new Error('Error logging in due to credentials'));
  }, 2000);
});

export default {
  login,
};
