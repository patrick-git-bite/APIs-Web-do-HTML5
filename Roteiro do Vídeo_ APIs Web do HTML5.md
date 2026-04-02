# Roteiro do Vídeo: APIs Web do HTML5
**Seminário de ADS - Uniftec Caxias do Sul**
**Integrantes:** Patrick Brando e Rafael Lima

## 1. Informações Gerais e Dinâmica
- **Duração Sugerida:** 10 a 15 minutos (aproximadamente 1:30 a 2:00 min por API).
- **Formato:** Vídeo gravado com captura de tela (apresentação de slides e código) e webcam dos integrantes (canto da tela).
- **Ferramentas Sugeridas:** OBS Studio para gravação, Canva ou Google Slides para os slides, VS Code para os exemplos de código.
- **Dinâmica de Dupla:** Alternância entre Patrick e Rafael a cada duas APIs para manter o vídeo dinâmico.

## 2. Estrutura do Roteiro

| Momento | Descrição da Cena | Responsável | Conteúdo / Fala Principal |
| :--- | :--- | :--- | :--- |
| **Abertura** (0:00 - 1:00) | Slide de título com nomes e logos da Uniftec. | Patrick e Rafael | Apresentação da dupla, disciplina e o objetivo do vídeo: explorar 6 APIs nativas do HTML5. |
| **API 1: Geolocation** (1:00 - 3:00) | Slide conceitual + Navegador pedindo permissão. | Patrick | **Conceito:** Como a web acessa a localização. **Exemplo:** Mostrar código `navigator.geolocation.getCurrentPosition` e o resultado em um mapa simples. |
| **API 2: Web Storage** (3:00 - 5:00) | Slide comparativo (Local vs Session) + DevTools (Application tab). | Rafael | **Conceito:** Armazenamento no cliente sem cookies. **Exemplo:** Salvar um nome no `localStorage` e mostrar que ele persiste após o refresh. |
| **API 3: Drag and Drop** (5:00 - 7:00) | Demonstração prática de arrastar um elemento. | Patrick | **Conceito:** Interatividade nativa. **Exemplo:** Código com atributo `draggable` e eventos `ondragover` e `ondrop` para mover uma imagem. |
| **API 4: History API** (7:00 - 9:00) | Slide sobre SPAs + Demonstração da URL mudando. | Rafael | **Conceito:** Manipulação do histórico sem recarregar. **Exemplo:** Usar `history.pushState` para mudar a URL de `/home` para `/contato` via botão. |
| **API 5: Notification** (9:00 - 11:00) | Slide de permissão + Notificação aparecendo no SO. | Patrick | **Conceito:** Alertas fora do navegador. **Exemplo:** Botão "Enviar Alerta" que dispara `new Notification("Olá!")` após permissão. |
| **API 6: Web Workers** (11:00 - 13:00) | Slide sobre threads + Exemplo de loop pesado. | Rafael | **Conceito:** Processamento em background. **Exemplo:** Comparar um loop que trava a página vs um que roda via Web Worker sem travar. |
| **Conclusão** (13:00 - 14:00) | Slide final com referências e agradecimentos. | Patrick e Rafael | Resumo da importância das APIs para a experiência do usuário moderna e encerramento. |

## 3. Dicas de Gravação e Edição
1.  **Ambiente:** Procure um local silencioso e com boa iluminação frontal.
2.  **Áudio:** Se possível, use um microfone externo (mesmo que seja o do fone de ouvido) para evitar ruídos.
3.  **Código:** Aumente o zoom do VS Code (Ctrl +) para que o código fique legível no vídeo do YouTube.
4.  **Descrição do YouTube:** Lembre-se de colocar o nome da disciplina e os nomes de vocês na descrição, conforme a regra do professor.
5.  **Privacidade:** Podem subir como "Não listado" (apenas quem tem o link vê) se preferirem não deixar público no canal.
