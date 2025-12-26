import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
import { get } from 'http';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  executeSeed() {
    return this.seedService.seedDB();
  }
}
