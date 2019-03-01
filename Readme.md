# Getting started

### 1. [Anaconda Setup](#1.-To-download-Anaconda)
### 2. [Django](#2.-Using-Django)
### 3. [Git](#3.-Using-git)
### 4. [Integrate React](#4.-Integrated-React)
### 5. [To Run Project](#5.-To-Run-the-Project)
### 6. [Firebase/Pyrebase setup](#6.-Firebase/Pyrebase)

<br>

## 1. To download Anaconda

Setting up the virtual environment

https://www.anaconda.com/distribution/#download-section
<br><br>

Type the following command: <br>

> `conda create -n yourEnvName python=x.x.x anaconda`

Our command should look like:<br>

> `conda create -n ReactJs python=3.7.2 anaconda`

To activate the environment: <br>
> `conda activate yourEnvName`

To deactivate the environment: <br>
> `conda deactivate`

## 2. Using Django
To install django:
activate the environment and type the following command: <br>
> `pip install django`

For this project we are going to use a REST framework provided by Django<br>
Type the following commands into the terminal:<br>
>`pip install djangorestframework`<br>
>`pip install markdown`<br>
>`pip install django-filter`

<br>

---

The following part has already been done. [Clone the git](#Using-git) repository if you haven't and goto __to run the server__.<br>

Add 'rest_framework' to your INSTALLED_APPS setting.<br>

```` 
    INSTALLED_APPS = (
    ...
    'rest_framework',
)
````

Add the following in the urls python file:
```` 
urlpatterns = [
    ...
    path('api-auth/', include('rest_framework.urls')),
]
```` 

To get started with django:<br>
>`django-admin startproject project`<br>

change directory to project

--- 
<br>

To run the server:<br>
````
python manage.py runserver
````

Incase you see read markers all over asking you to migrate, stop the server and:<br>
````
python manage.py migrate
````

run the server again and go to the url given to see if your django is working http://127.0.0.1:8000/.

---

## 3. Using git
After you have installed git on your computer. Change your directory where you want to clone your file to.
Type the following command in the terminal:

>`git config --global user.name "Your Full Name" `<br>
`git config --global user.email "Youremail@go.olemiss.edu"`<br>
`git clone https://git.cs.olemiss.edu/cs387group9/mainproject.git`<br>

## Workflow
The following should be done every time you are starting work on a new feature:
1. Update local repository
2. Checkout branch for feature you are working on

To update your local repository from the remote repository (gitlab)
>`git pull origin master`<br>

To checkout a branch
>`git checkout desiredBranchName`<br>
or to create a new branch and check it out<br>
`git checkout -b desiredBranchName`<br>

NOTE: Branch names should be specific and meaningful and if creating a new 
branch with this command the '-u' flag will need to be used when pushing the branch 
to the remote repo

<hr>

Once your local repository is up to date and you are in the correct branch (once the above section is completed):
1. Edit
2. Add
3. Commit

To see all new, modified, and staged files
>`git status`<br>

Control what files will be in your commit by adding them or removing them from the staging area
>`git add fileName`<br>
or to remove<br>
`git reset fileName`<br>

Commit staged changes
>`git commit -m "descriptive message"`<br>

To publish your branch on the remote repository
>`git push -u origin yourBranchName"`<br>

When a branch is complete a pull request can be made. From there it will be reviewed by
the team. After review, if no further changes need to be made, it will be merged with
the master brach. 

Commits should be done as often as necessary and should always have meaningful descriptions.

VSCode has a very nice interface for doing all of these actions but you must have git installed on your machine still.
The current branch can be seen in the bottom left corner. 

This workflow is known as a Feature Branch workflow and you can read more about it 
here [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).


<br>

---


## 4. Integrated React
We use react manually because we are integrating react into Django as an app.

Once you have cloned the git repository, type the following commands:

For the commands to work you need to have node installed on your computer.
You can install node from here: https://nodejs.org/en/download/

>Stay in your root folder. (Reference: The directory containing the Readme.md)

````
npm init -y
npm i -D webpack webpack-cli
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties
````
Now let's install react
````
npm i react react-dom prop-types
````

````
npm i redux react-redux redux-thunk redux-devtools-extension
````

### More Plugings to install:
````
npm i axios
npm i react-alert react-alert-template-basic react-transition-group
npm i react-router-dom

npm i style-loader css-loader less-loader 
````

### More pip install commands for Python:
````
pip install django-rest-knox
````


---
This part has already been done. Cloning the repository should have these files
For the babel plugins to work create a .babelrc in the home directory and write the following code
````
{
    "presets":["@babel/preset-env","@babel/preset-react"],
    "plugins": ["transform-class-properties"]
}
````

---

## 5. To Run the Project

After you have completed step 1, 2, 3 and 4.

In your root directory type the following command to run and build your react code:
````
npm run dev
````
This create a main.js file in the static directory.

Now, in your other terminal window, run the django server from the directory consisting of manage.py.
You can see your webpage on the localhost:8000


---

## 6. Firebase/Pyrebase
Pyrebase is a easier version of firebase and is easier to implement.

To install pyrebase:<br>
````
pip install pyrebase
````

<br>
