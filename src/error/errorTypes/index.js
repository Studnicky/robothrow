class RuntimeError extends Error {
  constructor(err) {
    super('Runtime Error');

      const { name, message } = err;

    this.name = this.constructor.name;

    this.message = message || null;
      this.statusCode = statusCode || '500';
      this.recoverable = false;
    this.stack = this.config.doStack ? Error.captureStackTrace(this, this.constructor) : {};

  }

    isInstance ( err ) {
        return true;
    }

    async recover () {
        return false;
    }
}

module.exports = {
    RuntimeError
};
