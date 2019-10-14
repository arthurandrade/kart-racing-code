class NoExistFileError extends Error {
  constructor(filePath) {
    super(`No file: ${filePath}`);
  }
}

module.exports = NoExistFileError;
