# APIs Web do HTML5 — Exemplos Interativos

Exemplos prontos para execução das 6 APIs nativas do HTML5, criados para o seminário de **Programação Web** da Uniftec.

## APIs demonstradas

| # | API | Descrição |
|---|-----|-----------|
| 01 | **Geolocation** | Localização do usuário com exibição em mapa |
| 02 | **Web Storage** | localStorage (persistente) vs sessionStorage (temporário) |
| 03 | **Drag and Drop** | Quadro Kanban + zona de upload por arrasto |
| 04 | **History** | Simulação de SPA sem recarregamento de página |
| 05 | **Notification** | Notificações do sistema operacional via navegador |
| 06 | **Web Workers** | Processamento em background sem travar a interface |

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/patrick-git-bite/APIs-Web-do-HTML5.git
cd APIs-Web-do-HTML5
```

### 2. Inicie um servidor local

Os exemplos precisam rodar via HTTP (não funciona abrindo o arquivo direto no navegador por causa do Web Workers).

**Opção A — Python (já vem instalado no Linux/Mac):**

```bash
cd exemplos
python3 -m http.server 5500
```

**Opção B — Node.js:**

```bash
npx serve exemplos
```

**Opção C — VS Code com Live Server:**

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Clique com botão direito em `exemplos/index.html`
3. Selecione **Open with Live Server**

### 3. Abra no navegador

```
http://localhost:5500
```

A página índice lista todas as 6 APIs com links para cada exemplo.

## Estrutura do projeto

```
├── README.md
├── Relatório de Seminário_ APIs Web do HTML5.md
├── Roteiro do Vídeo_ APIs Web do HTML5.md
├── Slides-api-web-html5.pdf
└── exemplos/
    ├── index.html              ← Página índice
    ├── 01-geolocation.html
    ├── 02-web-storage.html
    ├── 03-drag-and-drop.html
    ├── 04-history-api.html
    ├── 05-notification.html
    ├── 06-web-workers.html
    └── worker.js               ← Script do Web Worker
```

## Autores

- **Patrick Brando**
- **Rafael Lima**

Centro Universitário Uniftec — ADS Caxias do Sul  
Disciplina: Programação Web — Prof. Juliano Menzon
