import { Module } from '@nestjs/common';
import { RmqModule } from '@app/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [RmqModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
