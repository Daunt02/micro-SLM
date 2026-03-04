import Fastify from 'fastify';
import { config } from './config.js';
import { registerRoutes } from './api/routes.js';

const app = Fastify({ logger: true });

registerRoutes(app);

const start = async (): Promise<void> => {
  try {
    await app.listen({ port: config.PORT, host: '0.0.0.0' });
    console.log(`🚀 Server listening on port ${config.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
