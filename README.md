# George Gong MYOB Exam Project - 9/Apr/2019

[![Build Status](https://travis-ci.org/GeorgeGongGitHub/ggTest.svg?branch=master)](https://travis-ci.org/GeorgeGongGitHub/ggTest)

Test can be found https://github.com/MYOB-Technology/ops-technical-test

Deployment Package can be found on Github https://github.com/GeorgeGongGitHub/ggTest

# Endpoints:
	1. Helloworld	- https://ggheroku888.herokuapp.com/
	2. Health Check	- https://ggheroku888.herokuapp.com/check
	3. Meta Data	- https://ggheroku888.herokuapp.com/meta

# Pipeline:
	1. Node.js to create Node project
	2. Mocha and Chai to perform unit testing
	3. Git to upload source code to Github. Then it allows us to integrate with other tools e.g. Travis and Heroku
	4. Travis to create test site and show test status(pass or fail) in README.md on Github
	5. Heroku to deploy Github repository to cloud

# Risks:
	1. Source Code is in a public repository. It could be used by other people for MYOB interview.
	2. Heroku will put the web site into sleep if no web traffic in a 30-minute period. This may cause delay of showing health status.
	
# Improvements:
	1. Parameterize stuff like ports and names
	2. Use Docker to keep the environment consistency. We have to look into another deploy approach instead of Heroku though.
	3. Use templates to automate the pipeline. At the moment, I created Github repository, Travis repository and Heroku apps manually. We can create scripts to automate these stuff. Then keep them in source control tool to make it more maintainable and configurable.
	4. Heroku has some scaling feature. But for a real complex product we might consider use Kubernetes handle complex situations.
	5. There is no monitoring and alerting for this simple project. We should consider it in a real project.
	6. Add security testing(static, dynamic, interative). These should be considered in a real website. Other testings should be added like mobile application testing and vulnerability scanning.
	7. The testing in test.js is only for unit testing. It would be ideal to add integration tests for APIs. 
