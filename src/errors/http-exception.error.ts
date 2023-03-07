class HttpException extends Error {
  public status: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.status = statusCode;
  }
}

export { HttpException };
