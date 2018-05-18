# Version Control System (VCS) / Source Code Manager (SCM)


An SCM is another name for a VCS. Git is an SCM and therefore a VCS.

## Commit
Save the state of the project in Git by taking a picture of what your files look like at that moment and store a reference to that snapshot. Similar to a save-point in a video game.

## Repository (or Repo)
A directory which contains your project work and some hidden files. Can be local or remote. A repo is made up of commits.

## Working Directory
Files you see in your computers file system. This is in contrast to the files that have been saved in commits in the repository.

## Note
1. local computer = working directory = save files
2. remote computer = repository = commit files

## Checkout
When content in the repo has been copied to the working directory.

## Staging Area / Staging Index / Index
A file in the Git directory that stores info about what will go into the next commit. So the commit gets it's info from the staging area.

## Secure Hash Algorithm (SHA)
An 40-character ID string for each commit.

## Branch
A new line of development. Now both lines of development can continue.

## First Time Git Configuration (Mac/Linux)
Before you can start using Git, you need to configure it. Run each of the following lines on the command line to make sure everything is set up.

* `git config --global user.name` "<Your-Full-Name>" _sets up Git with your name_
* `git config --global user.email` "<your-email-address>" _sets up Git with your email_
* `git config --global color.ui auto` _makes sure that Git output is colored_
* `git config --global merge.conflictstyle diff3` _displays the original state in a conflict_
* `git config --list`
* `git config --global core.editor "atom --wait"` _Atom Editor Setup_
* `git config --global core.editor "'/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl' -n -w"` _Sublime Text Setup_
* `git config --global core.editor "code --wait"` _VSCode Setup_

## Commands
* `git init` _create brand new repos from scratch on your computer_
* `git clone` _copy existing repo from somewhere else_
* `git status` _check the status_
* `git log` _check commit logs_
* `git log --oneline` _just show the important stuff_
* `git log --stat` _show statistics_
* `git log -p` or `git log --patch` _display patch info (basically everything) about a file_
* `git log -p --stat` _display both_
* `git log -w -p --stat` _display both ignoring white space changes_
* `git log -p fdf5493` or `git show fdf5493` _display info about specific SHA_
* `git log --decorate` _will show some details that are hidden from the default view (although no need since version 2.13 includes it by default_
* `git show` _displays info about the given commit_

## Clone an Existing project
`git clone https://github.com/udacity/course-git-blog-project blog-project` _clone it but rename the working directory_

## More Commands
* `git add` _add files from working directory to staging index_
* `git commit` _take files from staging index and save them to repo_
* `git diff` _displays the difference between two versions of a file_
* `git config --global core.editor "atom --wait"` _make sure Atom is the code editor_
* `git commit` _this will open the commit file so you can add a message_
* `git commit -m "Initial commit"` _or just type it like this_
* `git diff index.html` _shows the changes that were made to index.html_

## Still Even More Commands
* `git tag` _displays all the tags that are in the repo_
* `git tag -a v1.0` _example of creating an annotated tag which is preferred to a lightweight tag that is created without the -a flag_
* `git tag -a beta b552fa5` _another example_
* `git tag -d v1.0` _delete the tag_
* `git tag -d v1.0 a87984` _tag a past commit_
* `git branch` _allows multiple lines of development_
* `git checkout` _switch between branches and tags_
* `git merge` _make changes on different branches and combine them together_


## Branch
1. By default the first branch name is "Master".
2. "HEAD" points to the current active branch.
3. Use the "checkout" command to switch to which branch it points to.

* `git branch` _to see which branch you're currently working in_
* `git branch sidebar` _to create a new branch_
* `git branch alt-sidebar-loc 42a69f` _create new branch from specific commit_
* `git checkout sidebar` _make sidebar the active branch_
* `git branch -d sidebar` _delete a branch_
* `git branch -D sidebar` _force a delete_
* `git checkout -b footer master` _create new branch called footer and create it at the same location as master_
* `git log --oneline --decorate --graph --all` _see all branches_
* `git reset --hard HEAD^` _undo a mistaken merge_
* `git merge footer` _make sure you are in the master branch (or whatever branch you want to merge into) and **fast-forward merge** in the footer branch_
* `git merge sidebar` _a **divergent branch** will require a commit_

## Undoing changes
* `git commit --amend` _alter the most recent commit_
* `git revert ac3f78` _reverses given commit_
* `git reset` _delete commits -- removes items from repository -- dangerous_
* `git reset HEAD~1` _resets to the previous commit and current commit is deleted_
* `git reset HEAD^1` _same as above_
* `git reset --mixed` _default where commit is deleted and file goes back to the working directory_
* `git reset --soft` _same as above but files goes back to staging area instead_
* `git reset --hard` _same again but files go to trash_
* `git reflog` _Git keeps track of things for 30 days before totally erasing so you can use this as a last resort effort_

## GitHub
* `git remote` _manage remote repo_
* `git push` _send changes to the remote_
* `git pull` _retrieve updates from the remote_

## GitHub Remote Repository Initialize
First, create your working directory on your local computer with all your files and initialize it. Then create a new empty project on Github. Then initialize it without a README.md file. You can add a description if you want but you don't have to. Once your done, run these commands to put your files into Github.
* `git remote add origin https://github.com/TechSnazzy/my-travel-plans.git` _add to the remote repo with the shortname 'origin'_
* `git remote v` _check to make sure that what you did is correct_
* `git push origin master` _provide the shortname and branch_
* `git pull origin master` _if there are more commits on the remote them pull them to local_
* `git fetch origin master` _retrive commits from a remote repo branch_

## Working on another Developer's repository
* Forking a Repository is to make an identical copy from another repo to your repo.
* Reviewing another developer's changes
* Knowing what changes to make
* `git shortlog` _see how many commits each contributor has added to the repo_
* `git shortlog -s -n` _shorter version of shortlog_
* `git shortlog --author=Surma` _filter by author_
* `git log --oneline --author="Paul Lewis"` _filter by author one line_

### Try this
1. Fork a repo
2. Clone it to your computer
3. Create a new branch so that you don't change the master branch.
`git checkout -b seans-other-branch`
4. Make your edits.
5. Check the difference to make sure everything looks good.
`git diff`
6. Add and commit changes.
7. Check the git log.
`git log --oneline --graph --all`
8. `git pull upstream master` _Remember from the lesson on remotes that a git pull is the same thing as a git fetch + git merge!_
