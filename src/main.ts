import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Bsale api de prueba')
    .setDescription('Prueba Bsale')
    .setVersion('1.0')
    .addTag('Products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin:
    [
      'http://127.0.0.1:5500'
    ]
  })
  await app.listen(3000);
}
bootstrap();
