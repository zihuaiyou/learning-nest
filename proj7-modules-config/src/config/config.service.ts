import { Inject, Injectable, Optional } from '@nestjs/common';
import { readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
    constructor(@Inject("CONFIG_OPTIONS") private options: { path: string }, @Optional() private config = {}) {
        readdirSync(options.path).map(async (file, index) => {
            if (file.slice(-2) === "js") {
                const module = await import(path.resolve(options.path, file))
                this.config = { ...this.config, ...module.default() }
            }
        })
    }
    getConfig(path: string) {
        const res = path.split('.').reduce((config, name) => {
            return config?.[name]
        }, this.config)
        return res
    }
}
