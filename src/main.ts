import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3030;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server ${PORT} da ishga tushdi`);
  });
}
bootstrap();
