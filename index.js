import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração do servidor
const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);  // Para obter o nome do arquivo
const __dirname = path.dirname(__filename);  // Para obter o diretório do arquivo

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

// Rota para a página inicial
app.post('/formulario', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});