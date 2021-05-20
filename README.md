# Assingment-swaroop-lute




A1
Section 0 – answers
1)
$ mkdir .project
$ cd .project


2)
$ git init
Initialized empty Git repository in C:/Users/sanket/.project/.git/



3)

$ touch index.html

4)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)


5)
$ git add .


$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   index.html

6)
$ git config --global user.email "swarooplute5@gmail.com"


$ git config --global user.name "swaroop-git"


$ git commit -m "file added"
[master (root-commit) e34990d] file added
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html

7) & 8)
$ touch info.txt


$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        info.txt

nothing added to commit but untracked files present (use "git add
" to track)

9)& 10)
$ touch ignore .


$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ignore

nothing added to commit but untracked files present (use "git add
" to track)

12)
$ git log

Author: swaroop-git <swarooplute5@gmail.com>
Date:   Mon May 17 14:21:10 2021 +0530

    new file added

commit e34990d70dae73ff82893b56d48774a883092152
Author: swaroop-git <swarooplute5@gmail.com>
Date:   Mon May 17 14:10:27 2021 +0530

    file added

13)

$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
14)
$ git reset HEAD index.html
Unstaged changes after reset:
M       index.html

15) 
Go to notepad and make changes


16)
$ git add -u index.html

17)
$ git reset HEAD~

18)
$ alias my_add=”git add”



19)
$ my_add .


$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitignore
        new file:   ignore
        modified:   index.html
        new file:   info.txt


$ git commit -m "renamed new add command"
[master 69ff1c0] renamed new add command
 4 files changed, 2 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 ignore
 create mode 100644 info.txt


20)

$ git reset HEAD~
Unstaged changes after reset:
M       index.html



A2




Section-1(HTML Assignments)



21,22,23,24)

$ mkdir Assignments


$ cd Assignments


$ git init
Initialized empty Git repository in C:/Users/sanket/.project/Assignments/.git/


$ touch README.txt

$ git stattus
git: 'stattus' is not a git command. See 'git --help'.

The most similar command is
        status


$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.txt

nothing added to commit but untracked files present (use "git add" to track)


$ my_add .


$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.txt


$ git commit -m "new content added"
[master (root-commit) 60cdedd] new content added
 1 file changed, 2 insertions(+)
 create mode 100644 README.txt


25,26)

$ git checkout -b html-assignments
Switched to a new branch 'html-assignments'


27,28)
$ git commit -m "new content added"
[master (root-commit) 60cdedd] new content added
 1 file changed, 2 insertions(+)
 create mode 100644 README.txt


$ git checkout -b html-assignments
Switched to a new branch 'html-assignments'


$ git status
On branch html-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")


$ git add .


$ git status
On branch html-assignments
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.txt



$ git commit -m "new content added to branch"
[html-assignments b2446d6] new content added to branch
 1 file changed, 13 insertions(+), 1 deletion(-)


29)
$ git status
On branch html-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

30)
$ git add .


$ git commit -m "removed the word page"
[html-assignments 50c7097] removed the word page
 1 file changed, 1 insertion(+), 1 deletion(-)


31)
$ git checkout master
Switched to branch 'master'

32)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

$ git add .


$ git commit -m "changed and to &"
[master 01d2cf7] changed and to &
 1 file changed, 1 insertion(+), 1 deletion(-)

33)
$ git checkout html-assignments
Switched to branch 'html-assignments'





34,35)
$ git status
On branch html-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")


$ git add .


$ git status
On branch html-assignments
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.txt

$ git commit -m "deleted some words"
[html-assignments 963a416] deleted some words
 1 file changed, 1 insertion(+), 1 deletion(-)

36)
$ git checkout master
Switched to branch 'master'
37)
$ git merge html-assignments
Auto-merging README.txt
CONFLICT (content): Merge conflict in README.txt
Automatic merge failed; fix conflicts and then commit the result.


$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")


$ git add .


$ git status
On branch master
All conflicts fixed but you are still merging.
  (use "git commit" to conclude merge)

Changes to be committed:
        modified:   README.txt



$ git merge html-assignments
fatal: You have not concluded your merge (MERGE_HEAD exists).
Please, commit your changes before you merge.


$ git commit -m "made some changes"
[master 0f92c7d] made some changes

38)
$ git branch -d html-assignments
Deleted branch html-assignments (was 963a416).

A3

1)
$ git branch css-assignments


2)
$ git checkout css-assignments
Switched to branch 'css-assignments'

3)
$ git status
On branch css-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

4)
$ git add .


$ git commit -m "added some text"
[css-assignments 2e6db4d] added some text
 1 file changed, 6 insertions(+)

5)
$ git status
On branch css-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

6)
$ git add .


$ git commit -m "made changes in 1 line"
[css-assignments e988cbc] made changes in 1 line
 1 file changed, 1 insertion(+), 1 deletion(-)

7)
$ git checkout master
Switched to branch 'master'

8)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")


$ git add .


$ git commit -m "minor change in line 3"
[master 1722750] minor change in line 3
 1 file changed, 1 insertion(+), 1 deletion(-)


9)
$ git checkout css-assignments
Switched to branch 'css-assignments'


10)
$ git status
On branch css-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

11)
$ git add .


$ git commit -m "done some minor changes"
[css-assignments 8c4eae1] done some minor changes
 1 file changed, 1 insertion(+), 1 deletion(-)

12)
$ git checkout master
Switched to branch 'master'


13)
$ git merge css-assignments
Auto-merging README.txt
Merge made by the 'recursive' strategy.
 README.txt | 6 ++++++
 1 file changed, 6 insertions(+)


14)
$ git branch -d css-assignments
Deleted branch css-assignments (was 8c4eae1).


A4
1)
$ git branch js-assignments

2)
$ git checkout js-assignments
Switched to branch 'js-assignments'

3,4)
$ git add .
$ git commit -m "added js"
[js-assignments 80fe03f] added js
 1 file changed, 6 insertions(+), 1 deletion(-)

5)
$ git status
On branch js-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")


6)
$ git add .
$ git commit -m "made minor change in 1 line"
[js-assignments 87df169] made minor change in 1 line
 1 file changed, 1 insertion(+), 1 deletion(-)

7)
$ git checkout master
Switched to branch 'master'

8)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")


$ git add .


$ git commit -m "made minor changes"
[master 0552a13] made minor changes
 1 file changed, 2 insertions(+), 3 deletions(-)



9)
$ git checkout js-assignments
Switched to branch 'js-assignments'

10)
$ git status
On branch js-assignments
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")

11)
$ git add .


$ git commit -m "made change"
[js-assignments ebfe977] made change
 1 file changed, 1 insertion(+), 1 deletion(-)


12)
$ git checkout master
Switched to branch 'master'


13)

$ git merge js-assignments
Auto-merging README.txt
Merge made by the 'recursive' strategy.
 README.txt | 7 ++++++-
 1 file changed, 6 insertions(+), 1 deletion(-)


14)
$ git branch -d js-assignments
Deleted branch js-assignments (was ebfe977).


GIT Remoting

Section-3(Pushing Assignments to remote repository) 

39,40,41,42
freshersbatch-oct16/README.txt at main · swaroop-git/freshersbatch-oct16 (github.com)

 


