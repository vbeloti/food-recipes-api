import app from './server'

app.listen(process.env.PORT || 3333, () => console.log('🔥 Server started...'))
