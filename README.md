# before running this project ensure you have docker installed.

# for windows and mac:

1. Download Docker Desktop from docker.com

2. install Docker Desktop and follow it's setup instructions

3. open Docker Desktop and ensure it is running.

4. verify the installation by opening a terminal and typing "docker --version"

# if you haven't already, clone the repository where you found this README.md

# open a terminal in the directory you wish to clone the files to and type

5. git clone https://github.com/cokaluk/okaluk_cody_final_site.git

# then navigate into the project directory

6. cd okaluk_cody_final_site

# build the image

docker build -t okaluk_cody_final_site .

# create the container

docker run --name okaluk_cody_coding_assignment14 -dp 5575:80 okaluk_cody_final_site

# storybook should now be up and running on http://localhost:5575/
