class ResponseDto {
    constructor(isSuccess, message, statusCode) {
      this.isSuccess = isSuccess;
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  module.exports = { ResponseDto };
  