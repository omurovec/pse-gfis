# PSE Good First Issues Tracker

Note: Due to current issues with Github permissions, a mirror (may not be most up-to-date) is hosted here: https://pse-good-first-issues.vercel.app/

This is a simple frontend/backend to grab all the "good first issues" from a number of Github orgs/repos.

Starting from a list of orgs/repos, we use GraphQL to query the Github endpoint for their issues. And then we filter for issues that have the tag "good-first-issues" (and slight variations). We then simply add them up and give people a simple frontend to view the list.

<br/>
<br/>
<br/>

[![Repo1](https://pse-gfis.vercel.app/api/repo-preview?repoIndex=0#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/repo-redirect?repoIndex=0#gh-dark-mode-only)  
[![Repo1](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=0&issueIndex=0#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=0&issueIndex=0#gh-dark-mode-only)  
[![Repo1](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=0&issueIndex=1#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=0&issueIndex=1#gh-dark-mode-only)  
[![Repo1](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=0&issueIndex=2#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=0&issueIndex=2#gh-dark-mode-only)  
[![Repo2](https://pse-gfis.vercel.app/api/repo-preview?repoIndex=1#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/repo-redirect?repoIndex=1#gh-dark-mode-only)  
[![Repo2](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=1&issueIndex=0#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=0#gh-dark-mode-only)  
[![Repo2](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=1&issueIndex=1#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=1#gh-dark-mode-only)
[![Repo2](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=1&issueIndex=2#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=2#gh-dark-mode-only)
[![Repo3](https://pse-gfis.vercel.app/api/repo-preview?repoIndex=2#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/repo-redirect?repoIndex=1#gh-dark-mode-only)  
[![Repo3](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=2&issueIndex=0#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=0#gh-dark-mode-only)  
[![Repo3](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=2&issueIndex=1#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=1#gh-dark-mode-only)
[![Repo3](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=2&issueIndex=2#gh-dark-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=2#gh-dark-mode-only)

[![Repo1](https://pse-gfis.vercel.app/api/repo-preview?repoIndex=0#gh-light-mode-only)](https://pse-gfis.vercel.app/api/repo-redirect?repoIndex=0#gh-light-mode-only)  
[![Repo1](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=0&issueIndex=0#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=0&issueIndex=0#gh-light-mode-only)  
[![Repo1](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=0&issueIndex=1#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=0&issueIndex=1#gh-light-mode-only)  
[![Repo1](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=0&issueIndex=2#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=0&issueIndex=2#gh-light-mode-only)  
[![Repo2](https://pse-gfis.vercel.app/api/repo-preview?repoIndex=1#gh-light-mode-only)](https://pse-gfis.vercel.app/api/repo-redirect?repoIndex=1#gh-light-mode-only)  
[![Repo2](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=1&issueIndex=0#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=0#gh-light-mode-only)  
[![Repo2](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=1&issueIndex=1#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=1#gh-light-mode-only)
[![Repo2](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=1&issueIndex=2#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=2#gh-light-mode-only)
[![Repo3](https://pse-gfis.vercel.app/api/repo-preview?repoIndex=2#gh-light-mode-only)](https://pse-gfis.vercel.app/api/repo-redirect?repoIndex=1#gh-light-mode-only)  
[![Repo3](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=2&issueIndex=0#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=0#gh-light-mode-only)  
[![Repo3](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=2&issueIndex=1#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=1#gh-light-mode-only)
[![Repo3](https://pse-gfis.vercel.app/api/issue-preview?repoIndex=2&issueIndex=2#gh-light-mode-only)](https://pse-gfis.vercel.app/api/issue-redirect?repoIndex=1&issueIndex=2#gh-light-mode-only)
