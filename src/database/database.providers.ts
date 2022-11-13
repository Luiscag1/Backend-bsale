import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        port: 3306,
        username: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];