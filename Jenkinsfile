pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Daim024/WebLx.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t daim00047920/repositoriodocker:v1 -f Dockerfile .'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Autenticando en Docker Hub..."
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        echo "Subiendo imagen a Docker Hub..."
                        docker.image('daim00047920/repositoriodocker:v1').push('v1')
                        echo "Imagen subida correctamente."
                    }

                    echo "Deteniendo y eliminando contenedor anterior (si existe)..."
                    sh '''
                    # Verificar si ya hay un contenedor corriendo con el puerto 3002
                    CONTAINER_ID=$(docker ps -q -f "publish=3002")
                    if [ -n "$CONTAINER_ID" ]; then
                        echo "Deteniendo el contenedor con puerto 3002..."
                        docker stop $CONTAINER_ID
                        docker rm $CONTAINER_ID
                    fi
                    '''

                    echo "Descargando e iniciando contenedor desde Docker Hub..."
                    sh 'docker pull daim00047920/repositoriodocker:v1'
                    //sh 'docker run -d -p 80:80 daim00047920/repositoriodocker:v1'

                    echo "Contenedor desplegado correctamente."
                }
            }
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
