import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import { faPhone, faEnvelope, faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCamera, faHiking, faMusic, faBookReader, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
    const [hover, setHover] = useState(false);
   
      return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                background: 'linear-gradient(to bottom, #808080, #2C2C2C, #000000)',
                padding: '10px',
                margin: '0',
                }}
            >
            
            {/* Icon container at the top left */}
            <div style={{
                position: 'absolute', // Positions the icons absolutely relative to their parent
                top: 50, // At the top of the page
                left: 100, // At the left of the page
                padding: '20px', // Padding to not stick to the edge
                display: 'flex',
                alignItems: 'center',
                }}
            >
                {/* Home icon linked to the About page */}
                <Link to="/" style={{ color: 'white', marginRight: '10px', textDecoration: 'none' }}>
                    <FontAwesomeIcon icon={faHome} style={{ color: 'white', marginRight: '20px' }} />
                 </Link>
                
                {/* Download icon that triggers a download */}
                    <a href="/assets/images/resume.pdf" download="Resume_TamTran.pdf" style={{ color: 'white', textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faDownload} style={{ color: 'white' }} />
                    </a>
        
            </div>
            <div style={{
                backgroundColor: '#2a2a2a',
                padding: '50px',
                borderRadius: '16px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.7)',
                color: '#ffffff',
                width: '90%',
                height: '90vh',
                textAlign: 'center',
                overflow: 'auto'
                }}
            >
        
            <a href="/about-tamtran">
                <h1
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        fontFamily: 'Futura, sans-serif',
                        fontWeight: '500',
                        textShadow: '3px 0 green, -0px 0 green, 0 3px green, 0 -0px green',                        
                        marginTop: '40px',
                        fontSize: '4rem',
                        color: hover ? '#4ADE80' : 'inherit', // Changes color on hover
                        transition: 'color 0.3s ease'
                    }}
                >
                TAM TRAN
                </h1>
            </a>

            {/* Contact Information Section */}
            <div style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%', // Stretches across the container
                borderTop: '1px solid #ffffff', // Adds a top border for visual separation
                marginTop: '20px',
                fontsize: '15px'
            }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0px' }} />
                <a href="tel:+17145150577" style={{ fontSize: '1.1rem', marginLeft: '-100px', color: '#4ADE80', textDecoration: 'none' }}>
                    (714) 515-0577
                </a>

                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                <a href="mailto:itistamtran@gmail.com" style={{ fontSize: '1.1rem', marginLeft: '-100px', color: '#4ADE80', textDecoration: 'none' }}>
                    itistamtran@gmail.com
                </a>

                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
                <a href="https://www.linkedin.com/in/tamtran-/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', marginLeft: '-100px', color: '#4ADE80', textDecoration: 'none' }}>
                    LinkedIn Profile
                </a>
            </div>

            {/* Education Section */}
            <div style={{
                backgroundColor: 'transparent', 
                color: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem'
            }}>
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', textAlign: 'left', padding: '20px', color: '#4ADE80' }}>EDUCATION</h3>
            
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '10px' }}><strong>Cal Poly Pomona</strong></h4>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '5px' }}>Bachelor of Science in Computer Science</p>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '5px' }}>Minors in Mathematics and Data Science</p>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Pomona, CA</p>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}>Expected December 2025</p>

                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginTop: '30px', marginBottom: '10px' }}><strong>Cypress College</strong></h4>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '5px' }}>AS-T Degree in Computer Science</p>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '5px', marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Cypress, CA</p>
                <p style={{ fontSize: '1.1rem', color: '#cccccc', marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}>December 2023</p>
            </div>
            
            {/* Skill Section */}
        
            <div style={{
                backgroundColor: 'transparent', // Slightly lighter than the main background
                color: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem'

            }}>
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-1.4rem' ,textAlign: 'left', padding: '20px', color: '#4ADE80' }}>SKILLS</h3>
                <ul style  = {{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '10px', textAlign: 'left'}}>
                    <li><strong>Programming:</strong> <span>Python, C++, Java, TypeScript, JavaScript, HTML, CSS, SQL</span></li>
                    <li><strong>Frameworks: </strong> <span>Next.js, React</span></li>
                    <li><strong>Design: </strong> <span>Photoshop, Premiere, Fresco, Sketchbook, Canva</span></li>
                    <li><strong>Other: </strong> <span>Visual Studio Code, Pycharm, MySQL, GitHub, Google Colab</span></li>

                </ul>
            </div>
            
            {/* Projects Section */}
        
            <div style={{
                backgroundColor: 'transparent', 
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem',
                fontSize: '1.1rem',
                color: '#cccccc'

            }}>
                <h3 style = {{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#4ADE80'}}>PROJECTS</h3>
                <h4 style = {{ color: 'white',fontWeight: 'bold'}}>Library System Developed (Group Project) - Fall 2024</h4>
                <p><i>Technologies: NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon</i></p>
                <ul className="mt-2 space-y-1">
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Collaboratively designed and implemented UI using NextJS, Material UI, and Tailwind CSS.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Backend development with PostgreSQL and Prisma.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Optimized system scalability and performance with Neon.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Deployed: <a href="https://library-system-omega.vercel.app/" style={{ color: '#4ADE80', fontWeight: '600', textDecoration: 'none', marginLeft: '5px' }}
                        >CPP Library System</a></li>
                </ul>
            </div>

            {/* Experience Section */}

            <div style={{
                backgroundColor: 'transparent', 
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem',
                fontSize: '1.1rem',
                color: '#cccccc'

            }}>
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#4ADE80'}}>WORK EXPERIENCE</h3>
                <h4 style = {{ color: 'white',fontWeight: 'bold'}}>Cal Poly Pomona | Philosophy Department</h4>
                <h4 style = {{ color:'white',fontStyle: 'italic' }} >Website Editor</h4>
                <p style={{ marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Pomona, CA</p>
                <p style={{ marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}>January 2025 - Present</p>               
                <ul className="mt-2 space-y-2">
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Manage and update website content, styles, and layouts using Cascade CMS for multiple departmental sites, including the Digital Humanities Consortium, Ethics and Policy Center, and the Philosophy and Science Technology Society.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Utilize CSS to enhance design elements beyond Cascade CMS’s built-in capabilities, ensuring responsive and visually cohesive layouts.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Collaborate with faculty and staff to maintain an accurate and engaging online presence for academic and research initiatives.</li>
                </ul>

                <h4 style = {{ color: 'white',fontWeight: 'bold', marginTop: '10px' }}>Cal Poly Pomona | Technology and Operations Management Department</h4>
                <h4 style = {{ color:'white',fontStyle: 'italic' }} >Student Assistant</h4>
                <p style={{ marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Pomona, CA</p>
                <p style={{ marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}>July 2024 - December 2024</p>               
                <ul className="mt-2 space-y-1">
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Website Maintenance: Managed and updated website content, styles, and layouts using Cascade CMS; monitored site performance; resolved bugs; and ensured optimal user experience.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Departmental Support: Assisted with day-to-day operations, including clerical tasks such as filing and data entry.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Faculty and Student Support: Provided assistance to faculty, staff, and students with department-related inquiries.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Social Media and Marketing: Developed content and marketing materials for the department’s social media platforms.</li>
                </ul>

                <h4 style = {{ color: 'white',fontWeight: 'bold', marginTop: '10px' }}>VietmediaTV</h4>
                <h4 style = {{ color:'white',fontStyle: 'italic' }} >Video, News Editor and Graphic Designer</h4>
                <p style={{ marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Garden Grove, CA</p>
                <p style={{ marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}> May 2019 - Present</p>               
                <ul className="mt-2 space-y-1">
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Edit News for Anchors: Translate news from English to Vietnamese and edit the content to ensure accuracy and clarity, providing news anchors with well-prepared scripts for smooth and professional delivery.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Edit Videos and Write Captions for Social Media: Edit videos and craft engaging captions for social media platforms like Facebook and YouTube, enhancing the content's reach and impact.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Develop creative advertising content for media including flyers, logos, and posters.</li>
                </ul>               
            </div>       

            {/* Related Coursework */}
        
            <div style={{
                backgroundColor: 'transparent', 
                color: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem'

            }}>
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#4ADE80'}}>RELATED COURSEWORK</h3>
                
                <ul style={{ fontSize: '1.1rem', color: '#cccccc', marginTop: '0px', maxWidth: '800px' }}>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Computer Architecture, Discrete Structures, Data Structures, Design and Analysis of Algorithms, System Programming, Object Oriented Design and Programming, Data Mining, and Big Data. </li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>College Algebra, Trigonometry, Multivariable Calculus, Linear Algebra and Differential Equations, Probability and Statistics for CS Engineers, and Math of Operations Research I, II.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>General Physics I, II</li>                
                </ul>           
            </div>

            {/* Additional sections */}
        
            <div style={{
                backgroundColor: 'transparent', 
                color: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem'

            }}>
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#4ADE80'}}>ADDITIONAL SECTIONS</h3>
                
                <ul style={{ fontSize: '1.1rem', color: '#cccccc', marginTop: '0px', maxWidth: '800px' }}>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Honors: President's List student, Dean's List Student </li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Hobbies/Interests:</li>

                </ul>  
                <div style={{ display: 'flex', gap: '25px', marginTop: '10px', marginLeft: '5rem' }}>
                    <FontAwesomeIcon icon={faPen} size="2x" />
                    <FontAwesomeIcon icon={faCamera} size="2x" />
                    <FontAwesomeIcon icon={faHiking} size="2x" />
                    <FontAwesomeIcon icon={faMusic} size="2x" />
                    <FontAwesomeIcon icon={faBookReader} size="2x" />
                    <FontAwesomeIcon icon={faGlobe} size="2x" />
                </div>  
                       
            </div>
            
            {/* REFERENCES */}
            <div style={{
                backgroundColor: 'transparent', 
                color: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                margin: '10px 0',
                width: '80%',
                textAlign: 'left',
                marginLeft: '9rem'
                }}>
            <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#4ADE80' }}>
            REFERENCES
            </h3>

            <div style={{ fontSize: '1.1rem', display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '10px' }}>
                {/* Left Reference */}
                <div style={{ flex: 1 }}>
                    <p>Dr. Scott Roby</p>
                    <p>Professor of Mathematics</p>
                    <p>Science, Engineering, Mathematics Division</p>
                    <p>Cypress College</p>
                    <p><FontAwesomeIcon icon={faPhone} /> (714) 484-7000, ext. 48637</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> sroby@cypresscollege.edu</p>
                </div>

                {/* Right Reference */}
                <div style={{ flex: 1 }}>
                    <p>Vinh Nguyen</p>
                    <p>Founder</p>
                    <p>Vietmedia TV</p>
                    <p>Broadcasting & Media Production Company</p>
                    <p><FontAwesomeIcon icon={faPhone} /> (661) 623-9999</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> Vietmediatv57.14@gmail.com</p></div>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Resume;
