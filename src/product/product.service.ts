import {
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import axios from 'axios';
import { OFF_API_BASE_URL } from '../constant';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class ProductService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getProductById(productId: number) {
    try {
      const response = await axios.get(
        `${OFF_API_BASE_URL}/${productId}`,
      );
      await this.cacheManager.set(
        productId.toString(),
        response.data,
      );
      console.log('roro');
      return response.data;
    } catch (error) {
      throw new NotFoundException(
        "This product doesn't exist",
      );
    }
  }
}
// http://localhost:3000/product/0496340
