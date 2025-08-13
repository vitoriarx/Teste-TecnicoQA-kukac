# Teste kanBan - Kukac

**Automação de testes end-to-end + relatório de testes manuais + documentação**  
Este repositório contém a implementação e documentação do processo de qualidade de software aplicado ao sistema **Kanban da Kukac**, cobrindo desde a análise exploratória até a automação dos fluxos principais, com integração entre Jira, relatório PDF e código-fonte.

---

## Objetivos do Projeto
- Garantir a **qualidade funcional, visual e de acessibilidade** do sistema.
- Demonstrar **boas práticas de QA** em testes manuais e automatizados.
- Entregar documentação clara, rastreável e replicável.
- Simular um fluxo de QA real em **ambiente de equipe ágil**.

---

##  Estrutura do Projeto 
```bash
📦 qa-kanban-kukac
┣ 📁 cypress/ # Testes automatizados
┣ 📁 reports/ # Relatórios e evidências (PDF, screenshots)
┣ 📁 docs/ # Documentação auxiliar
┣ 📄 README.md # Este arquivo
┣ 📄 cypress.config.js # Configuração do Cypress
┗ 📄 package.json
```

---

## 🛠️ Tecnologias e Ferramentas
| Categoria          | Ferramenta         | Uso no Projeto |
|--------------------|--------------------|----------------|
| Automação E2E      | Cypress             | Testes end-to-end no front-end |
| Relatórios         | Mochawesome         | Geração de relatórios HTML/PDF |
| Gestão de Testes   | Jira (Scrum Board)  | Planejamento, casos de teste, rastreabilidade |
| Acessibilidade     | axe DevTools / WAVE | Validação WCAG |
| Controle de Versão | Git + GitHub        | Versionamento e documentação |
| Performance        | Chrome DevTools     | Métricas de carregamento e responsividade |

---

## Como Executar os Testes Automatizados

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Cypress instalado globalmente ou via dependência do projeto

### Clonar o Repositório
```bash
git clone https://github.com/seuusuario/qa-kanban-kukac.git
```
### Acesar o projeto
```bash
cd qa-kanban-kukac
```
### Instalar Dependências
```bash
npm install
```
### Executar Testes no Modo Interativo
```bash
npx cypress open
```

### Executar Testes no Modo Headless 
``` bash
npx cypress run 
```

### Relatórios gerados:
[![Abrir Relatório](https://img.shields.io/badge/📄_Abrir-Relatório-blue?style=for-the-badge)](https://docs.google.com/document/d/1S3JAoQ28mMRBEzQw85Pn38WT2gPFbJBPScwWmjx4BV4/edit?usp=sharing)



### Integração com Jira
[![Abrir Jira](https://img.shields.io/badge/📄_Abrir-Jira-blue?style=for-the-badge)](https://vitoriasantos78690.atlassian.net/jira/software/projects/KC/boards/34?atlOrigin=eyJpIjoiNGMxNTBhZDEzN2ViNDcxNWE4Y2ExYmI2Yjg3MjZkMTQiLCJwIjoiaiJ9)

O ciclo de testes foi gerenciado no Jira, incluindo:

- Casos de teste detalhados 
- Registro de bugs com evidências 


---

### Autoria
Vitória Melo | Analista em Qualidade de Software
---

### Diferencial deste projeto: Integração entre gestão de testes (Jira), execução manual e automatizada e documentação rastreável, simulando a entrega real de um time ágil.
