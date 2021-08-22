import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as admin from 'firebase-admin';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../service-account.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json');

async function bootstrap() {
  process.env.TZ = 'UTC';
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.set('trust proxy', 1);

  app.useGlobalPipes(new ValidationPipe());

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const options = new DocumentBuilder()
    .setTitle('Noah test fullstack developer APIs')
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 3001;
  await app.listen(port);

  return port;
}

bootstrap().then((port) => {
  console.log(`API successfully started on port ${port} !`);
  console.log(`View api docs here http://localhost:${port}/docs`);
});
