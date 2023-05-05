import { describe } from "node:test";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { NestApplication } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

describe("App e2e", () => {
  beforeAll(async () => {
    let app: NestApplication;
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      })
    );
    await app.init();

    afterAll(() => {
      app.close();
    });
  });
  it.todo("Test Ok");
});
