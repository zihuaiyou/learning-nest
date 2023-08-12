import { config } from 'dotenv';
import { join } from 'path';
import { DevConfig } from './config/dev.config';
import { ProdConfig } from './config/prod.config';

config({ path: join(__dirname, '../.env') })

console.log(process.env.NODE_ENV);

export const ConfigService = {
    provide: "ConfigService",
    useValue: process.env.NODE_ENV === "development" ? DevConfig : ProdConfig
}