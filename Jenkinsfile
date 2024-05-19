pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Install Dependency
                sh 'npm run build' // Build the React app
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --passWithNoTests' // Run automated tests
            }
        } 

    }
}
