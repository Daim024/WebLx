
pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Daim024/WebLx.git'
            }
        }

    }

     stage('Build Docker Image') {
            steps {
                sh 'docker build -t daim00047920/repositoriodocker:v1 -f Dockerfile .'
    
            }
        }


    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

