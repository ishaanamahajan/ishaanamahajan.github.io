

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
  <div class="container">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#education">Education</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#experience">Work Experience</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#publications">Publications</a>
      </li>
    </ul>

    <div class="tab-content">
      <div id="home" class="tab-pane active">
        <h3>Home</h3>
        <p>Welcome to my personal website! Here you can learn more about my education, work experience, and publications.</p>
      </div>
      <div id="about" class="tab-pane">
        <h3>About</h3>
        <p>I am Ishaan Mahajan, a dedicated and driven individual passionate about robotics, autonomous systems, and software development.</p>
      </div>
      <div id="education" class="tab-pane">
        <h3>Education</h3>
        <p>
          University of Wisconsin-Madison<br>
          Bachelor of Science - Computer Science and Data Science; GPA: 3.847
        </p>
      </div>
      <div id="experience" class="tab-pane">
        <h3>Work Experience</h3>
        <p>
          Simulation Based Engineering Laboratory, Madison, WI<br>
          Undergraduate Researcher, January 2022 - Present<br>
          - Assisted in creating an IMU/GPS sensor in Project Chrono
          - Built a miniature autonomous car to test Lidar, IMU, and GPS sensors, and implement perception and path-planning algorithms.
          - Working with the ROS integration in Chrono to further enhance autonomy and conduct experiments.
        </p>
        <p>
          National University of Singapore, Singapore, Singapore<br>
          Robotics Research Intern, May 2022 - July 2022<br>
          - Worked in the Mechatronics and Simulation Lab and researched and developed path-planning algorithms on a Locobot WX250s.
          - Created a docker container and embedded it with the Locobot packages to create a uniform system for all users.
          - Implemented NLP to make the robot listen to human voice command and perform actions through ROS topics.

        </p>
        <p>
          Wisconsin Autonomous, Madison, WI<br>
          Localization Lead, August 2020 - Present<br>
          - Leading 10 undergraduates to compete against other universities in international competitions like EV Grand Prix and Autodrive Challenge.
          - Created an IMU/GPS ROS node in the autonomous vehicle software stack and successfully localized the car with filtered velocity and position information using a kalman filter.
          - Actively developing the present software framework to be used by all sub-teams for the development and working of our autonomous vehicle, and implementing localization algorithms.
        </p>
        <p>
          University of Wisconsin-Madison, Madison, WI<br>
          Undergraduate Teaching Assistant, September 2022 - December 2022<br>
          - Assisting in the functioning and development of the ’Object Oriented Programming in Java’ course.
          - Conducting office hours for over 500+ students, helping them solve their doubts.
        </p>
      </div>
      <div id="publications" class="tab-pane">
        <h3>Publications</h3>
        <p>
         A software toolkit and hardware platform for investigating and comparing robot autonomy algorithms in
        simulation and reality. Elmquist, A., Young, A., Mahajan, I., Fahey, K., Dashora, A., Ashokkumar, S., ... (2022) arXiv preprint arXiv:2206.06537

        </p>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>
