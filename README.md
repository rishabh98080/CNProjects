Updates :<br> 
1.Updated the add feature with localStorage api to make it remember data<br>
2.Updated deletion with same feature(was pending earlier)<br>
3.Updated with a time and date stamp<br>

4. fixed the minor bug,that was creating problem in repopulation,I mistakenly was repopulating with task name input from box instead of localStorage
5. the fix was simple on line  : 82
6.     Original : let taskName = taskInput.value.trim();
7.     Fix : let taskName  = key;
