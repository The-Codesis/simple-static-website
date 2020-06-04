# simple-static-website
This repository will help the beginners who have just completed the Git course &amp; want to apply there theoretical knowledge.

# How to contribute
Geeks who are eager to contibute, must read it.

## Creating Issues

- Make sure you have a GitHub account.
- Search GitHub and Google to see if your issue has already been reported
        - Create an issue in GitHub, assuming one does not already exist.
	- Clearly describe the issue including steps to reproduce when it is a bug.
	- Make sure you fill in the earliest version that you know has the issue.

## Getting Started

1. Goto the [Simple-Static-Website](https://github.com/The-Codesis/simple-static-website/) repo.
2. Click on the Fork button in the upper right corner.

Introduce your self to GIT, make sure you use an email associated with your GitHub account.
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Switch Simple-Static-Website to your fork
```
git remote set-url origin https://github.com/<your username>/pecan.git
```

Setup pecan to be able to fetch from the master
```
git remote add upstream https://github.com/PecanProject/simple-static-website.git
```

## Adding Features

When you add a new feature always create an issue first, this allows others to comment and give you tips. It will also help us keep track of what people are adding and with new releases helps us to write new release notes and give you credit for your work.

Secondly always work in a  branch, never work on the master branch. Keep your master branch in sync with the master of the official Simple-Static-Website repository. This makes the pull requests (you do want your work to be in the main branch right?) easier for us.

Finally try to keep your branches focused on fixing/adding only one feature and try not fall in the trap of doing a lot of things in a  single branch. This will not only make it harder for us to process your pull request but makes it take longer before you can submit your pull request. Small pull requests are more likely to be looked at faster and pulled into the main branch faster.

Here is a simplified workflow on how add a new feature:

### Get latest version

Update your master (both locally and on GitHub)

```
git fetch upstream
git checkout master
git merge upstream/master
git push
```

### Create a branch to do your work.

A good practice is to call the branch in the form of GH-<issue-number> followed by the title of the issue. This makes it easier to find out the issue you are trying to solve and helps us to understand what is done in the branch. Calling a branch my-work is confusing. Names of branch can not have a space, and should be replaced with a hyphen.

```
git checkout -b GH-issuenumber-title-of-issue
```

### Work and commit

Do you work, and commit as you see fit.Make your commit messages helpful. 

### Push your changes up to GitHub.

If this is the first time pushing to GitHub you will need to extended command, other wise you can simply do a `git push`.

```
git push -u origin GH-issuenumber-title-of-issue
```

### Pull Request

 When finished create a pull request from your branch to the main pecan repository.
