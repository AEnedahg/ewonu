from flask import Blueprint, render_template, url_for

main = Blueprint('main', __name__)

@main.route("/")
@main.route("/home")
def home():
  return render_template('home.html')

@main.route("/faq")
def faq():
  return render_template('faq.html')

@main.route("/contact")
def contact():
  return render_template('contact.html')