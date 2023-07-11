pipeline {
    agent any
    tools {
        nodejs "node16"
        git "git"
    }
    stages {
        stage('prepare') {
            steps {
                echo 'prepare'
                 git branch: "${BRANCH}", credentialsId: "GIT_ACCOUNT", url: 'https://github.com/frankieTests/permissionTest.git'
                 sh  'ls -al'
            }
        }
        stage('build') {
            steps {
                    dir('myapp'){
                        sh 'ls -al'
                        sh "npm install"
                        sh "CI=false npm run build"
                }
            }
        }
        stage('test') {
            steps {
                    dir('myapp'){
                        sh "npm run test"
                    }
                }
        }
        stage('s3_upload') {
            steps {
                withCredentials(
                    [
                        [
                            $class:'AmazonWebServicesCredentialsBinding',
                            credentialsId: 'AWS_ACCOUNT'
                        ]
                    ]
                )
                {
                    sh "aws s3 rm --recursive ${BUCKET_PATH}/static"
                    sh "aws s3 cp --recursive ./build ${BUCKET_PATH}"
                }
            }
        }
        stage('deploy') {
            steps {
                sh "ls -al"
                echo 'deploy'   
            }
        }
    }
}
