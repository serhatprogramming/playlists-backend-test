const isTestEnv = process.env.NODE_ENV === "TEST_ENV";

const info = (message) => {
  if (!isTestEnv) {
    console.log(`[INFO] ${message}`);
  }
};

const error = (message) => {
  console.error(`[ERROR] ${message}`);
};

module.exports = { info, error };
