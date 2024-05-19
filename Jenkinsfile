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
     
      post {
        success {
            // Archive the build artifact
                archiveArtifacts artifacts: 'buildArtifact/*.jar'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }

}
