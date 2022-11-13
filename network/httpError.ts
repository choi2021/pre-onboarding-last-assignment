export default class HTTPError extends Error {
  constructor(private statusCode: number, public message: string) {
    super(message);
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 404:
        this.message = '잘못된 요청입니다. url을 확인해주세요';
        break;
      default:
        throw new Error('Unknown Error');
    }
    return this.message;
  }
}
