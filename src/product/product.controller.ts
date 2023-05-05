import {
  Controller,
  Get,
  UseGuards,
  Param,
  UseInterceptors,
} from "@nestjs/common";

import { ProductService } from "./product.service";
import { CacheInterceptor } from "@nestjs/cache-manager";
import { JwtGuard } from "../Auth/guard";

@UseGuards(JwtGuard)
@Controller("product")
@UseInterceptors(CacheInterceptor)
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get(":productId")
  async getProduct(@Param("productId") productId: number) {
    const response = await this.productService.getProductById(productId);
    return response;
  }
}
