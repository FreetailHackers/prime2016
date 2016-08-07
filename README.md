#Git-Garden
-----------

Keep up your personal project commits by keeping your Git-Garden alive! This project renders your commit streaks on each of your individual projects
as small flowers that grow taller as your commit more.

It includes a web-interface to render your garden in a pretty way as well as a CLI to check the status of a single local repository.

Water your garden with those commits!

Getting Started
---------------

To run the app locally after cloning:

(Ensure all rails dependencies are present)

```bash
cd rails
bundle install
rails s
```

The code is currently hardcoded to query our python server which is hosted on an AWS elastic beanstalk instance.

To run the flask server locally:

```bash
cd flask
sudo pip install -r requirements.txt
python application.py
```

To install the command line utility

```bash
npm install -g git-garden
cd <your local repository>
git-grow
```

Obtaining API Keys
------------------

To have the python server query the github API, you will need to set your API keys as environment variables:
```bash
export GITHUB_CLIENT_ID=<ID>
export GITHUB_CLIENT_SECRET=<SECRET>
```

Made with <3 for MLH Prime from the HackTX team.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Yuriy Minin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
