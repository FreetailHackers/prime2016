import logging
from flask import Flask, render_template, jsonify, request, redirect, url_for, session, flash

force = 0

logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

application = Flask(__name__)

@application.route('/', defaults={'path': ''})

@application.route('/<path:path>')
def index(path):
    return render_template('index.html')

@application.route('/force', methods = ['POST'])
def post_force():
    global force
    force = request.form['force']
    return jsonify(force=force)


@application.route('/force', methods = ['GET'])
def get_force():
    global force
    return jsonify(force=force)
