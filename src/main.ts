import { NestFactory } from '@nestjs/core';
import { GithubModule } from './github/github.module';

async function bootstrap() {
  const app = await NestFactory.create(GithubModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
