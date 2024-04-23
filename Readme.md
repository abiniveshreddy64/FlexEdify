# FlexEdify: Empowering Student Learning

FlexEdify is a comprehensive web-based platform designed primarily for students, providing them with the tools and resources to enhance their learning experience. With a focus on adaptability and personalized learning, FlexEdify offers a range of features aimed at improving student comprehension and performance across various subjects.

## Key Features:

- **Subject Selection:** Students can choose from a variety of subjects, including Math, Science, and more, tailored to their interests and academic needs.

- **Adaptive Learning Tests:** Our platform offers adaptive learning tests that adapt to each student's proficiency level, allowing them to learn at their own pace and receive targeted feedback.

- **Teacher-Guided Assessments:** Teachers can assign tests to students, and the results are used to analyze performance and provide personalized learning recommendations.

- **Specialized Notes:** Based on student performance and test results, FlexEdify generates specialized notes for each student, offering targeted insights and resources to support their learning journey.

## Benefits:

- **Enhanced Learning Experience:** FlexEdify provides students with a dynamic and interactive learning environment, helping them grasp complex concepts more effectively.

- **Personalized Learning:** Through adaptive tests and specialized notes, students receive personalized guidance tailored to their individual learning needs and preferences.

- **Improved Performance:** By leveraging data analytics and performance insights, FlexEdify empowers students to identify areas for improvement and track their progress over time.

## Prerequisites:

Before you can start using the FlexEdify, make sure you have the following prerequisites installed on your system:

* Python 3.6 or higher
* Required Python packages (you can install them using pip):
  - Django
  - Flask
  - langchain
  - sentence-transformers
  - faiss
  - PyPDF2 (for PDF document loading)
  - reportlab

## Installation:

1. Clone this repository to your local machine.

   ```git
   git clone https://github.com/abiniveshreddy64/FlexEdify.git
   cd FlexEdify
   ```
2. Create a Python virtual environment (optional but recommended):

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```
3. Install the required Python packages:

   ```
   pip install -r requirements.txt
   ```
4. Initialize Gemini API Key of yours and replace it in the geminiai.html file.

5. To start executing the website, go to the location where manage.py is present and type:

   ```python
   python manage.py runserver
   ```
6. Copy the localhost url from the terminal and paste it in your browser.
7. You are done!! :metal: Work with the project to check how it executes.
