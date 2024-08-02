import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// ... in your AppModule
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // ... other modules
  ],
  // ...
})
export class AppModule {}
