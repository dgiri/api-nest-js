import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  // username: process.env.DB_USERNAME || 'postgres',
  // password: process.env.DB_PASSWORD || 'postgres',
  username: '',
  password: '',
  database: process.env.DB_DATABASE || 'nestjs',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
};
