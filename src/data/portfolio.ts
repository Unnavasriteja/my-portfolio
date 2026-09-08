export const HERO_CONTENT = "Building scalable systems from code to cloud. DevOps & Cloud Engineer | Full-Stack Developer. Passionate about automating deployments, optimizing cloud infrastructure, and developing robust web applications with modern technologies.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production-grade reality. My journey began with full-stack development—building web apps with Java, React, and Node.js. Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments. I work across AWS and OCI, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform, Ansible, and CloudFormation. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub, GitLab CI/CD, CodePipeline, and Bash scripting to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 90 },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'cloud', level: 70 },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 65 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 90 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 90 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original-wordmark.svg', category: 'infrastructure', level: 90 },
  { name: 'AWS CloudFormation', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscloudformation.svg', category: 'infrastructure', level: 90 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 90 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 90 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 90 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'AWS CodePipeline', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodepipeline.svg', category: 'devops', level: 90 },
  { name: 'AWS CodeBuild', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodebuild.svg', category: 'devops', level: 90 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 90 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'devops', level: 85 },

  // Development (Java + JS removed)
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 90 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 90 },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', category: 'development', level: 90 },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', category: 'development', level: 90 },

  // Databases (PostgreSQL added)
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 90 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 90 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 90 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database', level: 85 },

  // Monitoring Tools (NEW CATEGORY)
  { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'monitoring', level: 85 },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'monitoring', level: 85 },
  { name: 'Datadog', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datadog/datadog-original.svg', category: 'monitoring', level: 80 },
  { name: 'ELK Stack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', category: 'monitoring', level: 80 },
];


export const PROJECTS = [
  {
    title: 'GitOps POC for Kubernetes and EKS Workloads',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    description:
      'GitOps proof-of-concept demonstrating declarative Kubernetes deployments using ArgoCD. Implements App of Apps pattern with multi-environment dev/staging/prod configuration, drift detection, and self-healing.',
    technologies: ['ArgoCD', 'Helm', 'Kubernetes', 'Docker', 'GitHub'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'Kubernetes Production Cluster (k3d)',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Production-like multi-node Kubernetes cluster built using k3d. Features HA nginx deployment, topology-aware pod spreading, rolling updates, and full observability with metrics, logs, and alerting.',
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Grafana', 'Loki', 'Grafana Alloy'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'Scalable DevOps Pipeline on AWS & EKS',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80',
    description:
      'End-to-end DevOps pipeline deploying a scalable web application on AWS EKS using modular Terraform, GitHub Actions CI/CD, ECR, and full observability with Prometheus, Grafana, Loki, and Fluent Bit.',
    technologies: [
      'AWS',
      'Terraform',
      'EKS',
      'Docker',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'Loki',
      'Fluent Bit',
      'CloudWatch',
      'Ansible',
      'GitHub',
    ],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'Super Mario on AWS EKS',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
    description:
      'Containerized Super Mario game deployed on AWS EKS using Terraform for full cluster provisioning. Exposed via LoadBalancer Service with complete infra-to-app workflow.',
    technologies: ['AWS EKS', 'EC2', 'IAM', 'S3', 'AWS CLI', 'Docker', 'Terraform'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'Automated EKS Deployment with Jenkins & Terraform',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    description:
      'Fully automated CI/CD pipeline provisioning EKS and deploying workloads using Jenkins and Terraform. Jenkins server bootstrapped via user_data, secure AWS credential handling, and private EKS architecture.',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform'],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'MISP on AWS (ECS Fargate)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description:
      'Cloud-native deployment of MISP on AWS using ECS Fargate, Terraform, and Docker. Integrates RDS, EFS, ElastiCache, ALB, ACM, CloudWatch, SNS, and ECR for scalable threat intelligence operations.',
    technologies: [
      'AWS ECS Fargate',
      'Terraform',
      'Docker',
      'AWS ECR',
      'AWS RDS',
      'EFS',
      'ElastiCache',
      'VPC',
      'ALB',
      'ACM',
      'CloudWatch',
      'SNS',
      'GitHub Actions',
    ],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },

  {
    title: 'AWS Lambda S3 Trigger — File Organizer',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    description:
      'Serverless automation using Python Lambda triggered by S3 events. Automatically organizes incoming files into year/month/day folders. Entire solution provisioned via Terraform with IAM least privilege.',
    technologies: [
      'AWS Lambda',
      'Python 3.11',
      'boto3',
      'Amazon S3',
      'S3 Event Notifications',
      'AWS IAM',
      'Terraform',
      'Bash',
    ],
    category: 'devops',
    githubLink: '',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Hyderabad, Telangana, India',
  phoneNo: '+91 9000600559',
  email: 'neerajnakka.n@gmail.com',
  social: {
    github: 'https://github.com/Unnavasriteja',
    linkedin: 'https://linkedin.com/in/saisritejaunnava',
    
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
  monitoring: SKILLS.filter(skill => skill.category === 'monitoring'),
};



export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
