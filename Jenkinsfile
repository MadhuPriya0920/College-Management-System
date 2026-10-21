
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'madhupriyakb/college-management-system'
        K8S_NAMESPACE = 'madhu'
    }

    stages {
        stage('Checkout Git') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/MadhuPriya0920/College-Management-System.git'
            }
        }

        stage('Build and Test') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:%BUILD_NUMBER% .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds-madhu',
                    usernameVariable: 'DOCKERHUB_USER',
                    passwordVariable: 'DOCKERHUB_TOKEN'
                )]) {
                    bat 'echo %DOCKERHUB_TOKEN% | docker login -u %DOCKERHUB_USER% --password-stdin'
                    bat 'docker push %IMAGE_NAME%:%BUILD_NUMBER%'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f deployment.yaml'
                bat 'kubectl set image deployment/college-app app=%IMAGE_NAME%:%BUILD_NUMBER% -n %K8S_NAMESPACE%'
                bat 'kubectl rollout status deployment/college-app -n %K8S_NAMESPACE% --timeout=180s'
            }
        }
    }

    post {
        success {
            echo 'Build, Docker push, and Kubernetes deployment completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the failed stage in the Jenkins console output.'
        }
    }
}
