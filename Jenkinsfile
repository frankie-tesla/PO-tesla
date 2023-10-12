pipeline {
    agent any
    tools {
        nodejs "node18"
        git "git"
    }
    stages {
        stage('prepare') {
            steps {
                echo '<prepare>----------------------------------------'
                 git branch: "${BRANCH}", credentialsId: "GIT_ACCOUNT", url: 'https://github.com/frankieTests/permissionTest.git'
                 sh  'ls -al'
            }
        }
        stage('build') {
            steps {
                echo '<build>----------------------------------------'
                    dir('myapp'){
                        echo "${REACT_APP_TEST}"
                        sh 'ls -al'
                        sh "npm install"
                        sh "CI=false npm run build"
                }
            }
        }
        stage('typecheck') {
            steps {
                echo '<typecheck>----------------------------------------'
                    dir('myapp'){
                        sh "npm run tc"
                    }
                }
        }
        stage('s3_upload') {
            steps {
                echo '<s3_upload>----------------------------------------'
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
                echo '<deploy>----------------------------------------'
                sh "ls -al"
                echo 'deploy'   
            }
        }
    }
}
