pipeline {
  agent any

  stages {
    stage('Checkout Code') {
      steps {
        script {
          // Get latest code from Git repository (assuming credentials are configured)
          git branch: 'main', url: 'https://github.com/iashbinsapkota/floodshield.git'
        }
      }
    }
    stage('Build React App') {
      steps {
        sh 'npm install --force'// Install dependencies
      }
    }
    stage('Start React App (Optional)') { // This stage can be removed if not needed
      steps {
        sh 'npm start' // Build the React app
      }
    }
  }
}
