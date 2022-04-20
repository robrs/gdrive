import { logger } from "./logger.js";

export default class Routes {
  io; // propriedade da classe

  constructor() {}

  setSocketInstance(io) {
    this.io = io;
  }

  async defaultRoute(request, response) {
    response.end("hello world");
  }

  async options(request, response) {
    response.writeHead(204);
    response.end("hello world");
  }

  async post(request, response) {
    logger.info("POST");
    response.end();
  }

  async get(request, response) {
    logger.info("GET");
    response.end();
  }

  handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin','*')
    const chosen = this[request.method.toLowerCase()] || this.defaultRoute();
    response.end("Hallo World");
    return chosen.apply(this,[request, response])
  }
}
