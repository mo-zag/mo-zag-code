<h1>Code snippets</h1>
<h5>Start mysql in mac ox mavarick</h5>
<pre>sudo /usr/local/mysql/support-files/mysql.server start</pre>


<h5>Github terminal commands</h5>

<p>Git pull</p>
<pre>git pull origin mo</pre>

<p>Git add, all changed and new files</p>
<pre>git add .</pre>

<p>Commit chnages</p>
<pre>git commit -m "Updated shift information to not redirect after update"</pre>


<p>Deploy code to development via capistrano NOTE: commit all your changes to mo and them run the command bellow after the command change Gemfile and uncomment Development and comment put production.</p>

<p>NOTE: Before you deploy or commit any changes you should run rvmsudo bundle update (this will update the changes to compnenets gems we have made)</p>

<pre>cap dev deploy:cold</pre>
