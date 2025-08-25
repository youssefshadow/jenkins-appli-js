pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Construction du projet...'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Exécution des tests...'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Déploiement...'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline exécuté avec succès!'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
        always {
            echo 'Nettoyage...'
        }
    }
}