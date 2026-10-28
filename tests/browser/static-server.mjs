// Serves the fake widget page. Reached as http://127.0.0.1:4302 (the trusted
// "widget" origin) and http://localhost:4302 (an untrusted origin).
import { readFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'

const file = fileURLToPath(new URL('./widget/widget.html', import.meta.url))

createServer(async (req, res) => {
    if (req.url?.startsWith('/widget.html')) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(await readFile(file))
        return
    }
    res.writeHead(404).end()
}).listen(4302, '127.0.0.1')
