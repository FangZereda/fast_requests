# Fast Requests – Cloud DevOps Project

Este projeto foi desenvolvido como trabalho prático da disciplina de **Cloud DevOps**, com o objetivo de demonstrar, de forma integrada, os principais conceitos de **microsserviços, conteinerização, orquestração, automação CI/CD e infraestrutura como código (IaC)**.

O projeto cobre todo o ciclo DevOps, desde o desenvolvimento local até a automação de build e a definição de infraestrutura.

---

## 📌 Visão Geral da Arquitetura

A aplicação segue uma arquitetura baseada em **microsserviços**, onde cada serviço é independente e responsável por uma função específica do sistema.

### Componentes:
- **API Gateway** – Porta de entrada da aplicação
- **Pedidos** – Gerenciamento de pedidos
- **Pagamentos** – Simulação de pagamentos
- **Estoque** – Simulação de controle de estoque
- **MySQL** – Banco de dados relacional

Os serviços se comunicam via HTTP e podem ser escalados horizontalmente.

---

## 🧰 Tecnologias Utilizadas

- **Node.js / Express**
- **Docker**
- **Docker Compose**
- **Kubernetes (Docker Desktop)**
- **GitHub Actions (CI/CD)**
- **Terraform (Infrastructure as Code)**
- **MySQL**
- **Git & GitHub**

---

## 📁 Estrutura do Projeto

fast_requests/
├── api-gateway/
├── pedidos/
├── pagamentos/
├── estoque/
├── k8s/
│ ├── deployments/
│ ├── services/
│ ├── configmap.yaml
│ ├── secret.yaml
│ └── hpa.yaml
├── terraform/
│ ├── main.tf
│ ├── variables.tf
│ ├── outputs.tf
│ └── README.md
├── .github/
│ └── workflows/
│ └── ci-cd.yaml
├── docker-compose.yml
├── .gitignore
└── README.md


---

## 🐳 Execução Local com Docker Compose

### Pré-requisitos
- Docker Desktop instalado
- Docker Compose habilitado

### Subir a aplicação
```bash
docker-compose up --build
Encerrar a aplicação
docker-compose down
O Docker Compose permite testar toda a arquitetura localmente, simulando o ambiente de microsserviços.

☸ Orquestração com Kubernetes
O projeto utiliza o Kubernetes local (Docker Desktop) para orquestração dos containers.

Aplicar os manifests
kubectl apply -f k8s/
Verificar o estado dos recursos
kubectl get pods
kubectl get services
Acesso ao sistema
O acesso ao sistema ocorre através do API Gateway, exposto via NodePort:

http://localhost:30080

📈 Auto Scaling com HPA
Foi configurado o Horizontal Pod Autoscaler (HPA) para demonstrar escalabilidade automática baseada no uso de CPU.

⚠️ Observação importante
Em ambiente local (Docker Desktop), o metrics-server apresenta limitações conhecidas relacionadas a certificados TLS do kubelet.
Apesar disso, o HPA foi configurado corretamente e funcionaria normalmente em clusters gerenciados em nuvem (EKS, AKS, GKE).

🔄 CI/CD com GitHub Actions
O projeto possui um pipeline de CI/CD totalmente automatizado, executado a cada push na branch main.

O pipeline realiza:
Checkout do código

Login no Docker Hub

Build das imagens Docker

Push automático das imagens para o Docker Hub

Arquivo do pipeline:

.github/workflows/ci-cd.yaml
Esse processo garante automação, rastreabilidade e padronização dos builds.

🏗 Terraform – Infrastructure as Code (IaC)
A infraestrutura foi definida utilizando Terraform, seguindo o conceito de Infrastructure as Code.

Objetivo do Terraform no projeto
Demonstrar definição declarativa de infraestrutura

Versionamento da infraestrutura

Reprodutibilidade do ambiente

Recursos definidos (exemplo acadêmico):
Provider AWS

VPC básica

⚠️ Observação
Para evitar custos em nuvem, não foi executado o comando terraform apply.
O foco do trabalho é a definição e validação da infraestrutura em código.

Comandos executados:
terraform init
terraform validate
Arquivos gerados automaticamente (.terraform, .tfstate) foram corretamente ignorados via .gitignore, seguindo boas práticas.

📚 Boas Práticas Aplicadas
Separação de responsabilidades por microsserviço

Uso de Docker para padronização do ambiente

Orquestração com Kubernetes

Escalabilidade horizontal (HPA)

Automação de build e deploy (CI/CD)

Infraestrutura como código (Terraform)

Versionamento completo em GitHub

🎓 Conclusão
Este projeto demonstra, de forma prática e integrada, os principais conceitos de Cloud DevOps, cobrindo desde o desenvolvimento local até automação e infraestrutura como código.

A solução está preparada para execução em ambientes de produção reais, sendo o uso local (Docker Desktop) apenas uma adaptação para fins acadêmicos.

