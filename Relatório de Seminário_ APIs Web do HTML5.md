# Relatório de Seminário: APIs Web do HTML5

> **Centro Universitário Uniftec — ADS Caxias do Sul**
> **Disciplina:** Programação Web
> **Docente:** Juliano Menzon
> **Discentes:** Patrick Brando, Rafael Lima e Pedro
> **Data de Entrega:** 09/04/2026

---

## 1. Introdução

### O que são APIs?

Antes de tudo, precisamos entender o que é uma **API** (Application Programming Interface, ou Interface de Programação de Aplicações). De forma simples, uma API é um **conjunto de ferramentas prontas** que o navegador disponibiliza para que os desenvolvedores utilizem funcionalidades avançadas sem precisar construí-las do zero.

**Analogia:** Pense no navegador como um smartphone. Ele já vem com câmera, GPS, alto-falante, etc. As APIs são como os "botões" que permitem que um aplicativo use essas funções. Você não precisa saber como o GPS funciona por dentro — basta pedir a localização, e a API entrega o resultado.

### O que vamos apresentar?

Neste seminário, exploramos **6 APIs nativas do HTML5** — funcionalidades que já vêm embutidas nos navegadores modernos (Chrome, Firefox, Edge, etc.) e que tornam os sites mais inteligentes e interativos:

| # | API | Para que serve (em uma frase) |
|---|-----|-------------------------------|
| 1 | **Geolocation** | Descobre onde o usuário está no mapa |
| 2 | **Web Storage** | Salva informações no navegador do usuário |
| 3 | **Drag and Drop** | Permite arrastar e soltar elementos na tela |
| 4 | **History** | Muda a página sem recarregar o site |
| 5 | **Notification** | Envia alertas no computador/celular do usuário |
| 6 | **Web Workers** | Faz cálculos pesados sem travar a tela |

---

## 2. As 6 APIs explicadas

---

### 2.1. 📍 Geolocation API — "Onde você está?"

**O que faz?**
Permite que um site descubra a **localização geográfica** do usuário (latitude e longitude), usando GPS, Wi-Fi ou o endereço de IP.

**Importante:** O navegador **sempre pede permissão** antes — aparece aquele popup "Este site deseja saber sua localização". Nenhum site pode rastrear você sem que você aceite [1].

**Como funciona na prática?**

| Passo | O que acontece |
|-------|----------------|
| 1 | O site chama `navigator.geolocation.getCurrentPosition()` |
| 2 | O navegador mostra o popup pedindo permissão |
| 3 | Se o usuário aceitar, o navegador retorna latitude e longitude |
| 4 | O site pode usar essas coordenadas (ex: mostrar no mapa) |

**Onde vemos isso no dia a dia?**
- Google Maps perguntando "Usar sua localização?"
- iFood mostrando restaurantes perto de você
- Apps de clima detectando sua cidade automaticamente

**Métodos principais:**

| Método | O que faz |
|--------|-----------|
| `getCurrentPosition()` | Pega a localização **uma vez** |
| `watchPosition()` | Fica **monitorando** a posição (útil para GPS em tempo real) |
| `clearWatch()` | Para de monitorar |

> **Referências:** [1] [2]

---

### 2.2. 💾 Web Storage — "Salvar dados no navegador"

**O que faz?**
Permite que o site **guarde informações diretamente no navegador** do usuário, sem precisar de um servidor ou banco de dados. É como um "caderninho de anotações" que o navegador mantém para cada site.

**Por que não usar cookies?**
Cookies existem há muito tempo, mas têm limitações: armazenam pouca informação (4KB) e são enviados ao servidor a cada clique. O Web Storage resolve isso — armazena até **5MB** e fica só no navegador [3].

**Os dois tipos:**

| Tipo | Quanto dura? | Exemplo de uso |
|------|-------------|----------------|
| **localStorage** | **Para sempre** (até o usuário limpar) | Salvar se o usuário prefere tema escuro |
| **sessionStorage** | **Só enquanto a aba estiver aberta** | Guardar dados de um formulário de várias etapas |

**Analogia:**
- **localStorage** = Escrever com caneta. Fica lá até você apagar.
- **sessionStorage** = Escrever no quadro branco. Quando fecha a sala (aba), apaga.

**Como usar (é simples!):**

| Ação | Comando | Exemplo |
|------|---------|---------|
| Salvar | `setItem(chave, valor)` | `localStorage.setItem("nome", "Patrick")` |
| Buscar | `getItem(chave)` | `localStorage.getItem("nome")` → "Patrick" |
| Remover | `removeItem(chave)` | `localStorage.removeItem("nome")` |
| Limpar tudo | `clear()` | `localStorage.clear()` |

**Onde vemos isso no dia a dia?**
- Sites que lembram seu tema (claro/escuro) mesmo depois de fechar
- Carrinhos de compra que mantêm os produtos
- Formulários que não perdem os dados se você atualizar a página

> **Referências:** [3] [4]

---

### 2.3. 🖱️ Drag and Drop — "Arrastar e soltar"

**O que faz?**
Permite que o usuário **arraste elementos pela tela e solte em outro lugar**, como mover um card de "A Fazer" para "Feito" em um quadro de tarefas.

Antes do HTML5, isso era muito difícil de fazer. Agora, basta adicionar `draggable="true"` em qualquer elemento [5].

**Como funciona (passo a passo):**

| Evento | Quando dispara | O que acontece |
|--------|---------------|----------------|
| `ondragstart` | Usuário **começa** a arrastar | O navegador "pega" o elemento |
| `ondragover` | Elemento está **sobre** uma área de destino | Precisamos dizer ao navegador "pode soltar aqui" |
| `ondrop` | Usuário **solta** o elemento | O elemento é movido para o novo local |

**Analogia:** É como arrastar um arquivo da pasta "Downloads" para a "Área de Trabalho" no seu computador — só que dentro de uma página web.

**Onde vemos isso no dia a dia?**
- Trello / Notion — mover cards entre colunas
- Google Drive — arrastar arquivos para fazer upload
- Reordenar playlists no Spotify

> **Referência:** [5]

---

### 2.4. 🔄 History API — "Mudar a página sem recarregar"

**O que faz?**
Permite que o desenvolvedor **mude o endereço (URL) na barra do navegador** e o conteúdo da página **sem recarregar tudo do zero**. Isso torna a navegação muito mais rápida e fluida [6].

**Por que isso é importante?**
Sites modernos como Gmail, Instagram e YouTube são chamados de **SPAs** (Single Page Applications). Quando você clica em uma nova seção, a página **não recarrega** — só o conteúdo muda. Isso é possível graças à History API.

**Os dois métodos principais:**

| Método | O que faz |
|--------|-----------|
| `pushState()` | **Adiciona** uma nova entrada no histórico (como se fosse uma nova página) |
| `replaceState()` | **Substitui** a entrada atual (não cria registro novo) |

**E o botão "Voltar" do navegador?**
Funciona normalmente! Quando o usuário clica em "Voltar", o evento `popstate` é disparado, e o site pode reagir mostrando o conteúdo anterior.

**Analogia:** Imagine um livro onde você pode trocar o conteúdo das páginas sem arrancar nenhuma folha. O índice (URL) muda, o conteúdo muda, mas o livro (página) continua o mesmo.

**Onde vemos isso no dia a dia?**
- YouTube — a URL muda ao clicar em um vídeo, mas a página não recarrega
- Gmail — navegar entre Caixa de Entrada e Enviados
- Qualquer site que parece "instantâneo" ao trocar de seção

> **Referência:** [6]

---

### 2.5. 🔔 Notification API — "Alertas fora do navegador"

**O que faz?**
Permite que um site envie **notificações diretamente no sistema operacional** do usuário — aquelas que aparecem no canto da tela, mesmo que o site esteja minimizado [7].

**Passo a passo:**

| Passo | O que acontece |
|-------|----------------|
| 1 | O site chama `Notification.requestPermission()` |
| 2 | O navegador pergunta: "Permitir notificações deste site?" |
| 3 | Se o usuário aceitar, o site pode enviar notificações |
| 4 | A notificação aparece no sistema (fora do navegador) |

**Três estados de permissão:**

| Estado | Significado |
|--------|-------------|
| `granted` | ✅ Permitido — pode enviar notificações |
| `denied` | ❌ Negado — não pode enviar |
| `default` | ⏳ Ainda não decidiu |

**Onde vemos isso no dia a dia?**
- WhatsApp Web — "Você recebeu uma nova mensagem"
- Google Calendar — lembretes de reunião
- Sites de e-commerce — "Seu pedido foi enviado!"

> **Referência:** [7]

---

### 2.6. ⚙️ Web Workers — "Trabalho pesado sem travar a tela"

**O que faz?**
Permite executar **tarefas pesadas em segundo plano**, sem que a interface do site fique travada ou lenta [8].

**Por que isso é necessário?**
O JavaScript normalmente roda em uma única "fila" (thread). Se você pedir para ele fazer um cálculo demorado, **tudo para** — botões não clicam, animações congelam, a página trava. O Web Worker resolve isso criando uma **fila separada** que trabalha em paralelo.

**Analogia:** Imagine um restaurante com **um único garçom** (thread principal). Se ele for cozinhar um prato demorado, ninguém mais é atendido. O Web Worker é como **contratar um cozinheiro** — o garçom continua atendendo enquanto o cozinheiro prepara o prato nos fundos.

**Como funciona:**

| Passo | O que acontece |
|-------|----------------|
| 1 | A página cria um Worker: `new Worker("worker.js")` |
| 2 | Envia uma tarefa: `worker.postMessage(dados)` |
| 3 | O Worker processa em segundo plano (sem travar a tela) |
| 4 | Quando termina, avisa a página: `self.postMessage(resultado)` |

**Onde vemos isso no dia a dia?**
- Google Docs — verificação ortográfica enquanto você digita
- Sites de edição de fotos — aplicar filtros sem travar
- Planilhas online — cálculos complexos rodando em background

> **Referência:** [8]

---

## 3. Resumo Visual

| API | Emoji | Pergunta que responde | Exemplo do dia a dia |
|-----|-------|----------------------|----------------------|
| Geolocation | 📍 | "Onde estou?" | iFood achando restaurantes perto |
| Web Storage | 💾 | "Como salvar dados no navegador?" | Site lembrando seu tema escuro |
| Drag and Drop | 🖱️ | "Como arrastar coisas na tela?" | Mover cards no Trello |
| History | 🔄 | "Como mudar de página sem recarregar?" | YouTube trocando de vídeo |
| Notification | 🔔 | "Como enviar alertas no PC/celular?" | WhatsApp Web avisando nova mensagem |
| Web Workers | ⚙️ | "Como fazer algo pesado sem travar?" | Google Docs corrigindo ortografia |

---

## 4. Conclusão

As APIs do HTML5 transformaram o navegador em uma plataforma poderosa. Antes, sites eram apenas páginas estáticas — hoje, com essas ferramentas, conseguimos criar aplicações completas que sabem onde você está, salvam suas preferências, respondem ao toque, navegam sem recarregar, enviam alertas e processam dados pesados sem travar.

O mais importante: **todas essas funcionalidades já vêm prontas no navegador**. Não precisamos instalar nada extra — basta aprender a usá-las. Para quem está começando na área de desenvolvimento, dominar essas APIs é um passo essencial para criar sites modernos e com boa experiência para o usuário.

---

## 5. Referências

[1]: # "Mozilla Developer Network (MDN). Geolocation API. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API. Acesso em: 27 mar. 2026."

[2]: # "W3Schools. HTML Geolocation. Disponível em: https://www.w3schools.com/html/html5_geolocation.asp. Acesso em: 27 mar. 2026."

[3]: # "Mozilla Developer Network (MDN). Web Storage API. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API. Acesso em: 27 mar. 2026."

[4]: # "Stack Overflow. What is the difference between localStorage, sessionStorage, session and cookies?. Disponível em: https://stackoverflow.com/questions/19867599. Acesso em: 27 mar. 2026."

[5]: # "W3Schools. HTML Drag and Drop API. Disponível em: https://www.w3schools.com/html/html5_draganddrop.asp. Acesso em: 27 mar. 2026."

[6]: # "Mozilla Developer Network (MDN). History API. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/API/History_API. Acesso em: 27 mar. 2026."

[7]: # "Mozilla Developer Network (MDN). Notifications API. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API. Acesso em: 27 mar. 2026."

[8]: # "Mozilla Developer Network (MDN). Web Workers API. Disponível em: https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API. Acesso em: 27 mar. 2026."

