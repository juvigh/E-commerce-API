import app from "./src/main.js";

const port = process.env.DB_PORT || 5400
app.listen(port, () => {
    console.log(`🚀 Servidor rodando na porta: ${port}`)
})