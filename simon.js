// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Dynamic content display
function showContent(type) {
    const contentDisplay = document.getElementById('content-display');
    let content = '';

    // Show the content display area
    contentDisplay.style.display = 'block';

    switch (type) {
        case 'about':
    content = `
        <h2>About Me</h2>
       <p>
    Hello, I'm Simon Kamau, a passionate graduate in Computer Science. I studied at Kisii University and I am excited to continue my journey and contribute to the tech industry. 

    <p>I was born and raised in Nyandarua County, Kenya.</p>
</p>


        <div class="gallery">
            <img src="images/simon2.JPG" alt="Picture 1">
            <img src="images/simon3.JPG" alt="Picture 2">
            <img src="images/swim.jpg" alt="Picture 3">
        </div>
        <p>I am the CEO and Founder of SMARTECH GLOBAL, a software company dedicated to developing innovative technology solutions.
        </p>
    `;
    break;

    case 'skills':
    content = `
        <div><h2>Skills</h2>
        </div>
        <p><strong>Web Development:</strong> Experienced in creating dynamic and responsive websites using HTML, CSS, JavaScript, and React. Focused on building user-friendly interfaces and optimizing web performance.</p>
        <p><strong>Mobile App Development:</strong> Proficient in developing Android applications using Kotlin and Java. I build apps that include features like text-to-speech, object recognition, and GPS integration for improved user accessibility.</p>
        <p><strong>AI & Machine Learning:</strong> Knowledge of integrating AI technologies, particularly for object detection and Optical Character Recognition (OCR) to support accessibility and user interaction in mobile applications.</p>
        <p><strong>Cybersecurity:</strong> Skilled in cybersecurity practices, including network security, ethical hacking, penetration testing, and data protection, ensuring safe and secure applications and systems.</p>
        
        <p><strong>Technical Languages:</strong> I am proficient in various programming languages, including JavaScript, React, HTML, CSS, Kotlin, Python, and have a strong foundation in cybersecurity protocols and practices. These languages and technologies empower me to build secure, efficient, and user-centric applications.</p>
        
        <p><strong>Soft Skills:</strong></p>
        <p><strong>Leadership:</strong> I possess strong leadership skills, having coordinated teams in academic and professional settings, driving projects to completion while motivating and inspiring others.</p>
        <p><strong>Teamwork:</strong> A collaborative team player who thrives in diverse environments, bringing out the best in others and contributing to collective success.</p>
        <p><strong>Resource Mobilization:</strong> Experienced in organizing resources efficiently and ensuring optimal utilization for project success.</p>
        <p><strong>Problem-Solving:</strong> Skilled in identifying challenges and developing practical, creative solutions to overcome obstacles in both technical and non-technical contexts.</p>

        <p><strong>What I’m Best At:</strong> I excel at bridging the gap between technology and real-world applications. My strengths lie in developing innovative solutions through web and mobile technologies, focusing on accessibility, AI, and user-centered design. My leadership, combined with technical expertise, allows me to drive projects that make a positive impact.</p>

        <div class="gallery">
            <img src="path_to_image1.jpg" alt="Image 1">
            <img src="path_to_image2.jpg" alt="Image 2">
        </div>
    `;
    break;

            case 'portfolio':
                content = `
                    <h2>Portfolio Projects</h2>
                    <p>
                        Over the years, I have worked on a variety of exciting projects that showcase my skills 
                        in design, development, and problem-solving. Below are some of my recent works that I am proud to share.
                    </p>
                    <div class="portfolio-gallery">
                        <img src="images/AI.jpg" alt="Project 1">
                        <img src="images/teresa.jpg" alt="Project 2">
                        <img src="images/laptop.jpg" alt="Project 3">
                    </div>
                    <p>
                        These projects include <strong>web applications</strong>, <strong>mobile apps</strong>, and <strong>creative designs</strong>. 
                        Each project has been a journey of learning and growth, helping me refine my technical expertise 
                        and deliver impactful solutions. Feel free to reach out if you'd like to know more about any of these!
                    </p>
                `;
                break;
                case 'work-experience':
                    content = `
                        <h2>Work Experience</h2>
                        <p>
                            My professional and volunteer experiences have allowed me to apply my technical knowledge, grow my skillset, and make meaningful contributions. Below are highlights of my recent engagements.
                        </p>
                        <div class="experience-gallery">
                            <h3>Attachee at Kisii County Government</h3>
                            <p>
                                During my three-month attachment at Kisii County Government, I gained hands-on experience in IT operations and project management. Key areas of contribution include:
                            </p>
                            <ul>
                                <li><strong>Web Development:</strong> Maintained and developed internal web applications, ensuring smooth functionality and improved features.</li>
                                <li><strong>Cybersecurity:</strong> Participated in securing internal systems through encryption and network security best practices.</li>
                                <li><strong>Team Collaboration:</strong> Worked with cross-functional teams to implement solutions, enhancing communication and project management skills.</li>
                                <li><strong>Problem-Solving:</strong> Overcame technical challenges by learning new tools and applying them effectively.</li>
                            </ul>
                            <p>
                                This experience not only sharpened my technical expertise but also improved my time management, adaptability, and ability to meet deadlines in a professional setting.
                            </p>
                
                            <h3>Volunteer Work: Teaching Computer Basics at Kinja Secondary School</h3>
                            <p>
                                Volunteered at Kinja Secondary School, Nyandarua County, to teach students basic computer skills. Key areas covered include:
                            </p>
                            <ul>
                                <li><strong>Basic Computer Operation:</strong> Helped students understand essential computer operations and software usage.</li>
                                <li><strong>Word Processing:</strong> Taught document creation and formatting using Microsoft Word.</li>
                                <li><strong>Internet Usage:</strong> Guided students on effective internet research and safe browsing habits.</li>
                            </ul>
                            <p>
                                This experience was deeply rewarding, allowing me to improve my communication and mentorship skills while making a positive impact on students' futures.
                            </p>
                        </div>
                        <p>
                            These experiences reflect my dedication to continuous learning, sharing knowledge, and solving real-world problems. They’ve shaped my growth as a professional and community contributor.
                        </p>
                    `;
                    break;
                    case 'testimonials':
                        content = `
                            <h2>Testimonials and Recommendations</h2>
                            
                            <p><strong>What People Say About Me:</strong></p>
                            
                            <p><strong>Prof. Nathan Ogechi - VC Kisii University:</strong> "Simon has consistently demonstrated both academic excellence and a strong passion for technology. His technical skills, particularly in mobile app development and cybersecurity, make him a standout student at Kisii University. I confidently recommend him for any future endeavor." </p>
                            
                            <p><strong>Teresa Abuya - Lecturer, Kisii University:</strong> "Simon's ability to grasp complex concepts and apply them to real-world challenges has been impressive. He is always engaged, eager to learn, and ready to take on new projects. I have no hesitation in recommending Simon for any position or project that requires expertise and dedication." </p>
                            
                            <p><strong>DR. Peter - Director economic planning and finance department, Kisii County Government:</strong> "Simon is a hardworking and innovative student. His enthusiasm for technology, especially in the areas of cybersecurity and app development, is inspiring. His academic and leadership skills make him an excellent candidate for any opportunity, and I highly recommend him." </p>
                    
                            <!-- Picture Section - Above Recommendation -->
                            <div class="testimonials-gallery">
                                <img src="images/simonvc.jpg" alt="Testimonial Image 1" class="hover-effect">
                                <img src="images/teresa5.jpg" alt="Testimonial Image 2" class="hover-effect">
                                <img src="images/trophy.jpg" alt="Testimonial Image 3" class="hover-effect">
                            </div>
                    
                            <!-- Recommendation Section - Comes Last -->
                            <h3>Recommendation:</h3>
                            <p>Simon Kamau is a highly dedicated and results-driven individual, known for his remarkable technical expertise, leadership qualities, and commitment to excellence. Whether it’s leading an innovative project, contributing to a team, or tackling challenges head-on. His recent achievements in the autonomous systems hackathon where his team emerged first place further highlight his problem-solving and leadership skills. I highly recommend Simon for any opportunity that requires technical prowess and effective leadership.</p>
                        `;
                        break;
                                    
               
            case 'awards':
                content = `
                    <h2>Awards and Recommendations</h2>
                    <p>
                        I am proud to share some of my major achievements, which highlight my journey of growth, innovation, and leadership:
                    </p>
                    <p>
                        <strong>Inter-University Hackathon Champion (2024):</strong> Secured <strong>1st place</strong> for leading a team that 
                        developed an autonomous system for visualy impaired and the blind . Competing 
                        against multiple universities, this was a testament to teamwork, innovation, and technical excellence.
                    </p>
                    <div class="awards-image">
                        <img src="images/hack1.jpg" alt="Hackathon Project 1">
                    </div>
                    <div class="awards-image">
                        <img src="images/maake.jpg" alt="Hackathon Project 2">
                    </div>
                    <div class="awards-image">
                        <img src="images/hack2.jpg" alt="Hackathon Project 3">
                    </div>
                    <p>
                        These images showcase the innovative solution we developed during the hackathon, and the recognition we received 
                        for our hard work.
                    </p>
                    <p>
                        <strong>Excellence in Leadership:</strong> Recognized for my outstanding contributions as the ICT Chairperson 
                        for Kisii University Christian Union. This award reflects my dedication to nurturing teamwork, integrity, and visionary leadership.
                    </p>
                    <div class="awards-image">
                        <img src="images/simon4.jpg" alt="CU Leadership 2">
                    </div>
                    <p>
                        These milestones are more than just accolades—they serve as inspiration to keep innovating and impacting the world positively.
                    </p>
                `;
                break;
            
        case 'contact':
            content = `<h2>Contact</h2><p>Email: info.seniorceo1@gmail.com<br>Phone: +254 792006514</p>`;
            break;
            case 'hobbies':
                content = `
                    <h2>Hobbies</h2>
                    <p>Exploring my hobbies allows me to stay balanced, inspired, and continually grow as an individual. Here are some of my favorite activities:</p>
                    <ul>
                        <li><strong>Programming and Tech Exploration:</strong> I enjoy coding and solving challenges, as well as staying updated with emerging technologies in AI, mobile app development, and cybersecurity.</li>
                        <li><strong>Reading and Researching:</strong> Reading leadership books and researching the latest in technology helps me expand my knowledge.</li>
                        <li><strong>Mentoring and Teaching:</strong> Sharing knowledge with others, like teaching computer basics at Kinja Secondary School, is a fulfilling way to make an impact.</li>
                        <li><strong>Outdoor Adventures and Hiking:</strong> Participating in hikes, such as those with Kisii University Christian Union, allows me to enjoy nature and stay active.</li>
                        <li><strong>Gaming and Puzzles:</strong> Strategy games and puzzles help me develop critical thinking and problem-solving skills.</li>
                       
                        <li><strong>Socializing and Networking:</strong> Building relationships through community events and professional meetups broadens my perspective and opportunities.</li>
                        <li><strong>Creative Writing and Blogging:</strong> Writing about technology, self-improvement, and faith helps me express myself and connect with others.</li>
                    </ul>
                    <p>
                        My hobbies reflect my passion for continuous learning, creativity, and a deep connection to the world around me. They play a vital role in shaping me both personally and professionally.
                    </p>
                `;
                break;
            
                case 'goals':
                    content = `
                        <h2>Vision and Future Goals</h2>
                        <p>
                            My vision is to create innovative solutions that bridge the gap between technology and human needs, making life easier, more productive, and inclusive for everyone. I aim to inspire and lead advancements in software development, artificial intelligence, and smart systems that drive meaningful impact globally.
                        </p>
                        <p>
                            My future goals include:
                        </p>
                        <ul>
                            <li><strong>Become a Software Solutions Architect:</strong> To design, implement, and manage scalable and efficient software systems that address real-world challenges across industries.</li>
                            <li><strong>AI Expertise:</strong> To specialize in artificial intelligence and machine learning, creating intelligent systems that solve complex problems in fields such as healthcare, education, and transportation.</li>
                            <li><strong>Entrepreneurship:</strong> To establish a technology company focused on developing tools and platforms that empower individuals and businesses, especially in emerging economies like Kenya.</li>
                            <li><strong>Mentorship:</strong> To mentor and inspire young talents in technology, fostering a new generation of innovators and leaders.</li>
                            <li><strong>Community Impact:</strong> To use my skills to contribute to community development by building smart, sustainable solutions that address local needs.</li>
                        </ul>
                        <p>
                            These aspirations drive me to continuously learn, innovate, and grow as a technologist, leader, and global citizen.
                        </p>
                    `;
                    break;
                
                    case 'download':
                        content = `
                            <h2>Download</h2>
                            <p>Click the link below to download my resume:</p>
                            <a href="resume/SIMON KAMAU CV.pdf" download="Simon_Kamau_Resume" class="download-link">Download My Resume</a>
                            <p>
                                Stay tuned for more updates as I continue to enhance my portfolio.
                            </p>
                        `;
                        break;
                    
    }

    contentDisplay.innerHTML = content;
}

// Logout functionality
function logout() {
    alert('Logging out...');
}

// Function to handle profile image upload
function uploadImage() {
    const fileInput = document.getElementById('profile-upload'); 
    const file = fileInput.files[0]; 

    // Check if the user selected a valid image file
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader(); // Create a FileReader object

        reader.onload = function (e) {
            const profileImage = document.getElementById('profile-image'); 
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file); 
    } else {
        alert('Please upload a valid image file.'); 
    }
}

