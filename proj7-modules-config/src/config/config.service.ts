import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
    private config = {}
    constructor() {
        const pathConfig = { path: path.resolve(__dirname, '../configure') }
        readdirSync(pathConfig.path).map(async (file, index) => {
            if (file.slice(-2) === "js") {
                const module = await import(path.resolve(pathConfig.path, file))
                this.config = { ...this.config, ...module.default() }
            }
        })
    }
    getConfig(path: string) {
       const res =  path.split('.').reduce((config,name) => {
           return config?.[name]
        },this.config)
        return res
    }
}
