import logging
from flask import Flask, render_template, jsonify, request, redirect, url_for, session, flash

logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s: %(message)s')
logger = logging.getLogger(__name__)

application = Flask(__name__)

@application.route('/', defaults={'path': ''})

@application.route('/<path:path>')
def index(path):
    return render_template('index.html')
