# SemesterPlanner

## Getting Started
### Installing and Running
1. After cloning the repo, `cd` into the `/static` directory and run `npm install`. This will download and install the dependencies listed in package.json.
   1. Install npm if you do not have it
2. In the `/static` directory, start the npm watcher to build the fron end code with `npm run watch`
3. Go back to the base directory and `cd` into the `/server` directory
4. Create a python virtualenv
   1. *WINDOWS*
      1. Installing virtualenv and initializing it
         1. `py -m pip install --upgrade pip`
         2. `py -m pip install --user virtualenv`
         3. `py -m venv env`
      2. Activating virtualenv
         1. cd into `./server/env/Scripts/`
         2. run `source activate`
         3. return to the `/server` folder
      3. Deactivate it when you are done developing
         1. `deactivate`
   2. *macOS or Linux*
      1. Installing virtualenv and initializing it
         1. `python3 -m pip install --user --upgrade pip`
         2. `python3 -m pip install --user virtualenv`
         3. `python3 -m venv env`
      2. Activating virtualenv
         1. `source env/bin/activate`
      3. Deactivate it when you are done developing
         1. `deactivate`
5. Install flask inside the virtualenv
   1. `pip install flask`
6. If any other dependencies are needed, install using `pip install -r requirements.txt` in the `/server` directory
7. Start the server. Go to the server directory and run `python server.py` in terminal
8. Go to `localhost:5000` and the webapp should render

### Contributing
1. Fork this repo to your profile
2. Clone it to your local machine using `git clone`
3. Update/modify code and then `git push` to your own fork 
4. Open up a `Pull Request` to the `dev` branch on the base repo (soukaryag)


## To-do
- Make login with Google
  - Login/user system
  - Database storage
- Figure out how to control page flow
  - Use the react native system to transfer pages
- Design second temp page that shows all the classes for the major in a nice format
  - Figure out design format, and what is most efficient
  - Make classes draggable and easily switchable
- Create tree of major flow (hard)
  - How to get data on whats a prereq?
- Clean out data from UVA dataset to only show REQUIRED classes for major (hard)
  - Potential for manual remediation here
- Double/Multiple Major functionality
- Go to the cloud on with EC2 and RDS/S3 with single major functional
- Front page search on enter
- Minor functionality (how to get data?)

## Bugs

## Author
- Author: Soukarya Ghosh
- email: sg4fz@virginia.edu