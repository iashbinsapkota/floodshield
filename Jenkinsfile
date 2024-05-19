pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Get latest code from Git repository
                    git branch: 'main', url: 'https://github.com/iashbinsapkota/floodshield.git'
                }
                sh 'npm install' // Install Dependency
                sh 'npm start' // Build the React app
            }
        }
    }
}
