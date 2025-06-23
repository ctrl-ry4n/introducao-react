# 📚 Introdução ao React — Projeto de Aprendizado

Este projeto faz parte do meu aprendizado com **React**, abordando conceitos fundamentais como:

✅ Criação de componentes
✅ Uso de `useState` para gerenciar estado
✅ Manipulação de eventos com `onClick`
✅ Implementação de um **Menu Sanduíche (Hamburguer Menu)**
✅ Alternância de **Dark Mode**

---

## 💡 Objetivo

Esse projeto foi criado com foco em aprendizado, prática e experimentação dos conceitos básicos do React. Não é um produto final, mas um laboratório para entender o funcionamento dos hooks e manipulação de estado.

---

## 🚀 Tecnologias Utilizadas

* [React](https://react.dev/)
* [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

## 🎯 Funcionalidades Implementadas

### ✅ Gerenciamento de Estado com `useState`

Utilizamos o hook `useState` para:

* Controlar a abertura e fechamento do menu sanduíche
* Alterar o tema entre modo claro e modo escuro
* Atualizar o estado da interface em tempo real, com re-renderização automática dos componentes

Exemplo básico:

```js
const [darkMode, setDarkMode] = useState(false);

function toggleDarkMode() {
    setDarkMode(!darkMode);
}
```

---

### ✅ Manipulação de Eventos com `onClick`

Eventos de clique foram usados para:

* Abrir/fechar o menu sanduíche
* Ativar/desativar o modo escuro
* Disparar interações na interface de forma reativa

---

### ✅ Menu Sanduíche (Hamburguer Menu)

Criamos um menu lateral responsivo, inspirado em aplicações mobile, que pode ser:

✔️ Aberto e fechado ao clicar no ícone de "três linhas"
✔️ Usado para navegação ou exibição de links importantes

---

### ✅ Dark Mode (Modo Escuro)

O modo escuro foi implementado utilizando:

* Um botão para alternância do tema
* Condicionais que alteram as classes ou estilos do componente
* Uso do `useState` para manter o tema atual

---

## 📂 Estrutura do Projeto

```
/introducao-react
├── public/
├── src/
│   ├── components/
│   │   ├── MenuSanduiche.jsx
│   │   └── DarkModeToggle.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
├── package.json
└── README.md
```

