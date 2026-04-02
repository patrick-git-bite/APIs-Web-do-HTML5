# Relatório de Seminário: APIs Web do HTML5

**Centro Universitário Uniftec - ADS Caxias do Sul**

**Disciplina:** Programação Web

**Docente:** Juliano Menzon
**Discentes:** Patrick Brando e Rafael Lima**
Data de Entrega:** 09/04/2026

---

## 1. Introdução

Este relatório apresenta o conteúdo técnico explorado no seminário sobre as APIs nativas do HTML5, destacando como essas interfaces de programação permitem a criação de aplicações web mais ricas, performáticas e interativas. O foco do trabalho recai sobre seis APIs fundamentais: Geolocation, Web Storage, Drag and Drop, History, Notification e Web Workers.

---

## 2. APIs Web do HTML5: Conceitos e Exemplos Práticos

### 2.1. Geolocation API

A **Geolocation API** é uma funcionalidade do HTML5 que permite às aplicações web obterem a posição geográfica do usuário. Essa localização pode ser determinada por meio de diversas fontes, como GPS, redes Wi-Fi ou endereços IP. É crucial ressaltar que, por questões de segurança e privacidade, o navegador sempre solicita permissão explícita ao usuário antes de compartilhar suas coordenadas de latitude e longitude [1].

Os métodos principais para interagir com esta API incluem `navigator.geolocation.getCurrentPosition()`, que obtém a localização atual do dispositivo, e `watchPosition()`, que monitora as mudanças na posição do usuário ao longo do tempo. Um exemplo prático de sua aplicação seria a exibição da localização do usuário em um mapa interativo ou a entrega de conteúdo específico baseado na sua proximidade geográfica [2].

### 2.2. Web Storage (localStorage e sessionStorage)

O **Web Storage** oferece um mecanismo robusto para o armazenamento de dados no lado do cliente, superando as limitações dos cookies em termos de capacidade e segurança. Essa API é dividida em duas interfaces principais, cada uma com características distintas de persistência [3]:

1. **`localStorage`****:** Permite o armazenamento de dados de forma persistente. As informações salvas no `localStorage` permanecem disponíveis mesmo após o navegador ser fechado e reaberto, não possuindo um tempo de expiração definido. É ideal para guardar preferências de usuário, como temas de interface (dark mode) ou tokens de autenticação que precisam ser mantidos entre sessões.

1. **`sessionStorage`****:** Armazena dados apenas durante a sessão atual da aba ou janela do navegador. Assim que a aba é fechada, todos os dados armazenados no `sessionStorage` são automaticamente removidos. É frequentemente utilizado para dados temporários, como informações preenchidas em formulários de múltiplas etapas ou estados de navegação específicos de uma sessão [4].

Ambas as interfaces utilizam métodos como `setItem(key, value)` para adicionar dados, `getItem(key)` para recuperá-los, `removeItem(key)` para excluir um item específico e `clear()` para remover todos os dados armazenados [3].

### 2.3. Drag and Drop API

A **Drag and Drop API** do HTML5 introduziu um suporte nativo e simplificado para a funcionalidade de arrastar e soltar elementos em páginas web. Anteriormente, a implementação dessa interatividade exigia o uso de bibliotecas JavaScript complexas. Com o HTML5, basta definir o atributo `draggable="true"` em qualquer elemento HTML para torná-lo arrastável [5].

O processo de arrastar e soltar é gerenciado por uma série de eventos, incluindo `ondragstart` (disparado quando o arrasto começa), `ondragover` (ativado quando um elemento arrastado está sobre uma área de destino potencial) e `ondrop` (ocorre quando o elemento é solto no destino). Aplicações comuns incluem a organização de itens em listas, a movimentação de cards em quadros de gerenciamento de tarefas (como Kanban) ou o upload de arquivos diretamente para uma área designada [5].

### 2.4. History API

A **History API** confere aos desenvolvedores a capacidade de manipular o histórico de navegação da sessão do navegador de forma programática. Essa funcionalidade é fundamental para o desenvolvimento de Single Page Applications (SPAs), onde o conteúdo da página é atualizado dinamicamente via JavaScript sem a necessidade de um recarregamento completo da página. A API permite que a URL na barra de endereços seja alterada para refletir o estado atual da aplicação, mantendo a funcionalidade dos botões denavegação (voltar/avançar) do navegador [6].

Os métodos mais utilizados são `history.pushState()`, que adiciona uma nova entrada ao histórico de sessão, e `history.replaceState()`, que modifica a entrada atual do histórico sem criar uma nova. O evento `popstate` é disparado quando o histórico de sessão muda, permitindo que a aplicação reaja a essas alterações [6].

### 2.5. Notification API

A **Notification API** permite que aplicações web enviem notificações que são exibidas fora do contexto da página, diretamente no sistema operacional do usuário. Isso possibilita um maior engajamento e a entrega de informações importantes mesmo quando a página não está em foco [7].

O processo de uso envolve primeiramente a solicitação de permissão ao usuário por meio de `Notification.requestPermission()`. Uma vez concedida a permissão, as notificações podem ser criadas utilizando o construtor `new Notification("Título da Notificação", { body: "Corpo da mensagem", icon: "url_do_icone" })`. Exemplos de uso incluem alertas de novas mensagens, lembretes de calendário ou atualizações de status em tempo real [7].

### 2.6. Web Workers API

A **Web Workers API** é uma solução para o problema de scripts JavaScript que executam tarefas computacionalmente intensivas e podem bloquear a thread principal do navegador, resultando em uma interface de usuário travada e não responsiva. Com os Web Workers, é possível executar scripts em threads separadas em segundo plano, garantindo que a interface do usuário permaneça fluida e responsiva [8].

A comunicação entre a thread principal e o Web Worker é realizada por meio de mensagens, utilizando o método `postMessage()` para enviar dados e o evento `onmessage` para recebê-los. Essa arquitetura é ideal para operações como processamento de grandes volumes de dados, cálculos matemáticos complexos, compressão de arquivos ou qualquer tarefa que exija tempo de processamento significativo sem impactar a experiência do usuário [8].

---

## 3. Conclusão

As APIs do HTML5 representam um avanço fundamental na capacidade das aplicações web, transformando o navegador de um mero visualizador de documentos em uma plataforma poderosa e interativa. A Geolocation API oferece consciência espacial, o Web Storage proporciona persistência de dados aprimorada, a Drag and Drop API eleva a interatividade, a History API otimiza a navegação em SPAs, a Notification API melhora o engajamento do usuário e os Web Workers garantem a responsividade da interface. O domínio dessas ferramentas é indispensável para profissionais de Análise e Desenvolvimento de Sistemas que buscam construir soluções web modernas, eficientes e com uma excelente experiência de usuário.

---

## 4. Referências

[1]: # "Mozilla Developer Network (MDN). Geolocation API. Disponível em: [https://developer.mozilla.org/en-US/docs/Web/API/GeolocationAPI](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationAPI ). Acesso em: 27 mar. 2026."

[2]: # "W3Schools. HTML Geolocation. Disponível em: [https://www.w3schools.com/html/html5geolocation.asp](https://www.w3schools.com/html/html5geolocation.asp ). Acesso em: 27 mar. 2026."

[3]: # "Mozilla Developer Network (MDN). Web Storage API. Disponível em: [https://developer.mozilla.org/en-US/docs/Web/API/WebStorageAPI](https://developer.mozilla.org/en-US/docs/Web/API/WebStorageAPI ). Acesso em: 27 mar. 2026."

[4]: # "Stack Overflow. What is the difference between localStorage, sessionStorage, session and cookies?. Disponível em: [https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies](https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies ). Acesso em: 27 mar. 2026."

[5]: # "W3Schools. HTML Drag and Drop API. Disponível em: [https://www.w3schools.com/html/html5draganddrop.asp](https://www.w3schools.com/html/html5draganddrop.asp ). Acesso em: 27 mar. 2026."

[6]: # "Mozilla Developer Network (MDN). History API. Disponível em: [https://developer.mozilla.org/pt-BR/docs/Web/API/HistoryAPI](https://developer.mozilla.org/pt-BR/docs/Web/API/HistoryAPI ). Acesso em: 27 mar. 2026."

[7]: # "Mozilla Developer Network (MDN). Notifications API. Disponível em: [https://developer.mozilla.org/en-US/docs/Web/API/NotificationsAPI](https://developer.mozilla.org/en-US/docs/Web/API/NotificationsAPI ). Acesso em: 27 mar. 2026."

[8]: # "Mozilla Developer Network (MDN). Web Workers API. Disponível em: [https://developer.mozilla.org/en-US/docs/Web/API/WebWorkersAPI](https://developer.mozilla.org/en-US/docs/Web/API/WebWorkersAPI ). Acesso em: 27 mar. 2026."

