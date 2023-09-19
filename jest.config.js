module.exports = {
    testEnvironment: 'node',
    reporters:[
        'default',
        [
            'jest-html-reporter', {
                pageTitle: "JEST Unit Testing Report",
                outputPath: './test-report/index.html',
                includeFailureMsg: true
            }
        ]
    ],
    
}