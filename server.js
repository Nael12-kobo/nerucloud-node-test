const http = require("http");

const PORT = process.env.PORT || 3000;
const SITE_NAME =
  process.env.SITE_NAME || "NeruCloud Node App";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        >

        <title>${SITE_NAME}</title>

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #07111f;
            color: white;
            font-family: Arial, sans-serif;
          }

          .card {
            width: min(90%, 650px);
            padding: 50px;
            border-radius: 24px;
            text-align: center;
            background: #0b1b2c;
            border: 1px solid #1e3a5f;
          }

          .badge {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 999px;
            background: #16a34a;
            font-size: 13px;
            font-weight: bold;
          }

          h1 {
            margin: 24px 0 12px;
            font-size: 42px;
          }

          span {
            color: #3b82f6;
          }

          p {
            color: #94a3b8;
            line-height: 1.7;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <div class="badge">
            NODE.JS RUNTIME
          </div>

          <h1>
            <span>${SITE_NAME}</span> 🚀
          </h1>

          <p>
            Node.js berhasil diupdate dari GitHub lewat NeruCloud 🔥
          </p>

          <p>
            Environment SITE_NAME berhasil dibaca.
          </p>
        </div>
      </body>
    </html>
  `);
});

server.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `NeruCloud Node App running on port ${PORT}`
    );
  }
);
