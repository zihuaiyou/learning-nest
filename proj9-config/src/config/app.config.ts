export default () => ({
    app: {
        name: 'nestjs-proj',
        isDev: process.env.NODE_ENV === 'development'
    }
})