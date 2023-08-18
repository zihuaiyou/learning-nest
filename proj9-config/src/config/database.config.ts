import { registerAs } from "@nestjs/config"

export default registerAs('database', () => ({
    port: '3306'
}))