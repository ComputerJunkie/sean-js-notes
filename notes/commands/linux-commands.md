# COMMANDS

[GitHub Guides](https://guides.github.com/features/mastering-markdown/)

# curl (Means C URL as in "See URL")

Use the curl command to download content from the web. Here are some examples.
`curl https://www.google.com` _view the html code_
`curl -L 'https://www.google.com'` _follow redirects_
`curl -L -o dictionary.txt 'https://tinyurl.com/zeyq9vc'` _download to a file_

**Note:** It is important to put the single quotes around a url in case there is a weird character in there or something.

# cat, less

`cat dictionary.txt` _concatenate entire contents of file_
`less dictionary.txt` _view just the beginning of file and space to continue and q to quit_

# rm

`rm` _very permanent delete_
`rm -i` _interactive delete that will prompt for each file_
`rmdir` _remove a directory_

# grep

`grep shell dictionary.txt` _search for the word 'shell' in the file_
`grep shell dictionary.txt | less` _if there are too many results_
`curl -L 'https://tinyurl.com/zeyq9vc' | grep fish` _self explanatory_
`curl -L 'https://tinyurl.com/zeyq9vc' | grep fish | wc -l` _count method 1_
`curl -L 'https://tinyurl.com/zeyq9vc' | grep -c ibo` _count method 2_
`grep ibo dictionary.txt | wc -l` _one more count example_

# shell and environment variables

**shell variable:** Internal to the shell program itself.
`echo $LINES x $COLUMNS` _shell variable_

**environment variable** Shared with programs that you run from within the shell.
`echo $PWD` _present working directory_
`echo $PATH` _tells your system where your program files are_
`PATH=$PATH:/new/directory` _temporarily add a directory to your path so that programs can be found_
`echo $LOGNAME $PWD` _another example_

# ~/.bash_profile (Mac, Windows)

**Linux:** On Linux, .bash_profile is only used for _some_ shell login sessions. So instead it uses .bashrc as the more common startup file.

A popular way to handle this is to put a statement in .bash_profile that says, if there is a .bashrc file then run that. But if you are mainly on Mac or Windows then it's not necessary.
```
if [-f ~/.bashrc ] ; then
  source ~/.bashrc
fi
```

# Aliases
`alias ll='ls -la'`
`alias cl='curl -L'`
`alias ..='cd ..'`
`alias ...='cd ...'`
`alias now='date +"%T"'`
`alias sl='ls'`

# Switching Bewteen user accounts in Ubuntu 18.04 on Windows 10
* First, make sure to install Ubuntu 18.04 from the Windows Store
* Launch Ubuntu
* If you need to create a new user account, do this:
* `sudo adduser newuser`
* Then follow the prompts
* Once you have the user account created, you can switch between accounts (root and your user account)
* Close the Ubuntu window
* Launch a Command Prompt in Windows
* `ubuntu config --default-user username` // replace "username" with your username
* Now launch the Ubuntu window again. It should be logged in as your new user account
