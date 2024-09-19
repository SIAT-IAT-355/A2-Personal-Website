# Assignment 2: Create a Personal Website
**Due Date:** September 26th, 11:59 PM

## Objective
In this assignment, you will create a personal website using HTML, CSS, and JavaScript. The goal is to build a professional online presence that includes content similar to what you would include in your resume. This website will serve as a portfolio to showcase your skills, education, experience, and interests, while helping you get comfortable with front-end web development and version control using GitHub.

## Instructions

### Getting Started with Git and GitHub

1. **Install Git:**
   - Download and install Git on your computer. Follow the installation instructions for your operating system [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. **Set Up Git Configuration:**
   - Once Git is installed, open the terminal or command prompt and set your username and email address. This ensures your commits are linked to your GitHub account:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "youremail@example.com"
     ```

3. **Create a GitHub Account:**
   - If you don’t already have a GitHub account, create one [here](https://github.com/). It’s free and required for submitting your project.

4. **Create a repository for your personal website:**
   - You should use the name `yourusername.github.io` this way when you type yourusername.github.io in your browser, it will show up as a website. Pretty cool.

5. **Authenticate GitHub with Git:**
   Now you need to access your repository on your personal computer.
   - For security, GitHub now uses personal access tokens instead of passwords. To authenticate:
     - Go to your [GitHub account settings](https://github.com/settings/tokens) and generate a new Personal Access Token.
     - When prompted by Git to enter your credentials while pushing code, use this token instead of your GitHub password.
     - You can also set up [SSH authentication](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) if you prefer.

5. **Clone Your Repository Locally:**
   - Once your repository is set up on GitHub, and you have authenticated, use Git to clone it to your local machine:
     ```bash
     git clone https://github.com/YourUsername/YourUsername.github.io
     ```
     My personal website is at `https://github.com/alireza116/alireza116.github.io`
   - This will create a local copy of your repository where you can build and edit your website files.

### Creating Your Website

1. **Website Structure:**
   - Your website should have the following structure:
     ```
     A2-Personal-Website/
     ├── index.html
     ├── style.css
     ├── main.js
     └── README.md
     ```

3. **Content for the Website:**
   - **`index.html`:** This file should be the homepage of your website. Include content similar to what you would include in your resume:
     - **Personal introduction**: Your name, major, and a brief description of your interests.
     - **Education**: List your current and previous educational institutions and any relevant courses.
     - **Skills**: Highlight technical skills such as programming languages, software tools, etc.
     - **Experience**: Include work experience, internships, or relevant projects.
     - **A few images**: Include examples of images that would represent you.
     - **Contact information**: Provide a way for people to contact you, such as an email or LinkedIn profile.
     - A link to your GitHub profile or any other relevant portfolios.
  - **`visualizations.html`** this will be a new page where you can start putting your visualization portfolio in. You will create a visualization using SVG and put it in the site. 
   - **`style.css`:** This file should handle the styling of your webpage. Use CSS to make your website look clean and professional.
   - **`main.js`:** This file is mandatory and should be used for adding basic JavaScript interactivity (e.g., form validation, interactive elements).
   - **`README.md`:** This file should explain the purpose of the website, including what technologies are used and how the site can be navigated.

4. **assignment requirements**:
  - You should use many different elements, and apply your design skills to make it look interesting!
  - You should organize the information in the website coherently and cleraly.
  - 

### Additional Recommendations

- You can use [Project IDX](https://idx.dev/) for web development without needing to install anything locally. It provides an online integrated development environment (IDE) with Git and other tools pre-installed, making it easy to develop, preview, and push changes to GitHub directly from your browser.
- If you need help getting started, very simple website templates are available in the [linked repository](https://github.com/SIAT-IAT-355/A2-Personal-Website) to help you with the basic structure of the website.

### Steps to Complete the Assignment:

1. **Create and Edit Your Files Locally:**
   - Create the `index.html`, `style.css`, and `main.js` files in your cloned repository.
   - Make edits locally on your machine using any text editor (such as Visual Studio Code, Sublime Text, etc.).

2. **Commit and Push Your Changes to GitHub:**
   - After making changes, commit them with Git and push them to GitHub:
     ```bash
     git add .
     git commit -m "Add initial website files"
     git push origin main
     ```

### Submission Instructions

1. **Submit the GitHub Repository Link:**
   - Upload the link to your GitHub repository and your personal website to the **Assignment 2** submission page on Canvas.

2. **Ensure Proper Formatting:**
   - Check that your files are named and structured as follows:
     - **`index.html`**
     - **`style.css`**
     - **`main.js`**
     - **`README.md`**

---

## Tips:
- Start simple with your design! Use minimal HTML and CSS at first, and build up your page as you become more comfortable.
- Experiment with different styling options to enhance the look and feel of your website.
- If you’re new to GitHub and Git, use this [GitHub guide](https://docs.github.com/en/get-started/quickstart/set-up-git) for step-by-step instructions on how to set everything up.
- Keep your code clean and organized, and make frequent commits to track your progress!
- We will work on this together in class.

---

## Learning resources:
-  For git, I highly recommend watching [Git and Github for Poets](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)
-  For Javascript, I highly recommend this online course [Code! Programming with p5.js for beginners)[https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA]. This course is designed for artists, and will introduce you to a library that you can do a lot of cool stuff with!
-  No one really fully knows HTML and CSS. You are going to have to search and look up stuff. However, you can refer to (CSS)[https://www.w3schools.com/css/] and , and (HTML)[https://www.w3schools.com/html/default.asp] tutorials. Definitely look up stackoverflow, and ask questions from your AI assistant to learn how to do things. But **LEARN** from it. Do not just copy and paste.
