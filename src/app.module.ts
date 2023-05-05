import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ProductModule } from "./product/product.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";

import { redisStore } from "cache-manager-redis-store";
import { CacheModule } from "@nestjs/cache-manager";
import { RedisClientOptions } from "redis";

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore as any,
      url: "redis://redis",
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    ProductModule,
    PrismaModule,
  ],
})
export class AppModule {}
