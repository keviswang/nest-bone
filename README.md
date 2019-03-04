# Nestjs 项目骨架

fastify + nestjs + nunjucks



What is the order of execution of the following processes in a request, for a route that implements: middleware, pipes, guards, interceptors, and any other potential request process

The common order is:

1. Middlewares
2. Guards
3. Interceptors (before the stream is manipulated)
4. Pipes
5. Interceptors (after the stream is manipulated)
6. Exception filters (if any exception is caught)