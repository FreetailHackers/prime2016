import logging, json, requests
from datetime import date, datetime, timedelta
from flask import Flask, render_template, jsonify, request, redirect, url_for, session, flash

logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

application = Flask(__name__)

application.config.from_object('config')

images = ['rip','0','1','2','3','4','5']

@application.route('/')

@application.route('/index')
def index():
    return render_template('index.html')

@application.route('/api/<username>')
def get_data(username):
    user_repos = requests.get('https://api.github.com/users/{0}/repos?client_id={1}&client_secret={2}'.format(username, application.config['GITHUB_CLIENT_ID'], application.config['GITHUB_CLIENT_SECRET'])).json()
    repo_names = []
    user_data = []
    today = date.today()
    if u'message' in user_repos:
        logger.debug('No user found.')
        return jsonify({'no-results': []})
    else:
        for repo in user_repos:
            if 'svn_url' in repo:
                repo_name_parts = repo['svn_url'].split('/')
                repo_names.append(repo_name_parts[-1])
        for repo_name in repo_names:
            cur_repo = {}
            cur_repo['name'] = repo_name
            streak = 0
            repo_commits = requests.get('https://api.github.com/repos/{0}/{1}/commits?client_id={2}&client_secret={3}'.format(username, repo_name, application.config['GITHUB_CLIENT_ID'], application.config['GITHUB_CLIENT_SECRET'])).json()
            cur_date = today
            today_commit = False
            for commit in repo_commits:
                #TODO Need to check if commit matches user
                try:
                    last_commit = commit['commit']['committer']['date'][0:10]
                    last_commit_date = datetime.strptime(last_commit, '%Y-%m-%d').date()
                    days = (cur_date - last_commit_date).days
                    if days < 0:
                        break
                    elif days == 0 or days == 1:
                        if days == 0:
                            today_commit = True
                            streak = 1
                        else:
                            cur_date = cur_date + timedelta(days=-1)
                            streak += 1
                    else:
                        streak -= days
                        break
                except:
                    continue
            cur_repo['days'] = streak
            if streak < 0:
                cur_repo['image'] = images[0]
            elif streak > 6:
                cur_repo['image'] = images[6]
            else:
                cur_repo['image'] = images[streak]
            user_data.append(cur_repo)
    return jsonify({'results': user_data})
