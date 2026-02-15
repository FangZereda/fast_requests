# Fast Requests – Cloud DevOps Project

Este projeto foi desenvolvido como trabalho prático da disciplina de **Cloud DevOps**, com o objetivo de demonstrar, de forma integrada, os principais conceitos de **microsserviços, conteinerização, orquestração, automação CI/CD e infraestrutura como código (IaC)**.

O projeto cobre todo o ciclo DevOps, desde o desenvolvimento local até a automação de build e a definição de infraestrutura.

---

## 📌 Visão Geral da Arquitetura

A aplicação segue uma arquitetura baseada em **microsserviços**, onde cada serviço é independente e responsável por uma função específica do sistema.

### Componentes:
- API Gateway – Porta de entrada da aplicação
- Pedidos – Gerenciamento de pedidos
- Pagamentos – Simulação de pagamentos
- Estoque – Simulação de controle de estoque
- MySQL – Banco de dados relacional

---

## 🧰 Tecnologias Utilizadas

- Node.js / Express
- Docker
- Docker Compose
- Kubernetes (Docker Desktop)
- GitHub Actions (CI/CD)
- Terraform (Infrastructure as Code)
- MySQL
- Git & GitHub

---

## 📁 Estrutura do Projeto

fast_requests/
├── api-gateway/
├── pedidos/
├── pagamentos/
├── estoque/
├── k8s/
├── terraform/
├── .github/workflows/
├── docker-compose.yml
└── README.md

---

## 🐳 Execução Local com Docker Compose

docker-compose up --build

---

## ☸ Kubernetes

kubectl apply -f k8s/

A aplicação é acessada via API Gateway:
http://localhost:30080

---

## 📈 Auto Scaling (HPA)

Foi configurado o Horizontal Pod Autoscaler (HPA).  
Em ambiente local, o metrics-server apresenta limitações conhecidas no Docker Desktop.

---

## 🔄 CI/CD

Pipeline automatizado com GitHub Actions:
- Build das imagens
- Push para Docker Hub

---

## 🏗 Terraform – Infrastructure as Code

A infraestrutura foi definida de forma declarativa com Terraform.

Comandos utilizados:
terraform init
terraform validate

Não foi executado terraform apply para evitar custos em nuvem.

---

## 🎓 Conclusão

O projeto demonstra na prática conceitos de Cloud DevOps, com automação, escalabilidade e infraestrutura como código.

---

Autor: Projeto acadêmico – Cloud DevOps Guilherme Reis Bessades Barbosa
