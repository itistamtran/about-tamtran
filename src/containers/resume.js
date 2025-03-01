import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import { faPhone, faEnvelope, faHome, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Timeline from '../components/Timeline';

const Resume = () => {
    const [hover, setHover] = useState(false);
    // Events data for the timeline
    const events = [
        { date: "Present - 01-2025"},
        {date: "12-2024 to 07-2024"}
    ];
      return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#1a1a1a',
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
                    <a href="/path/to/resume.pdf" download="Resume_TamTran.pdf" style={{ color: 'white', textDecoration: 'none' }}>
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
                        marginTop: '40px',
                        fontSize: '3rem',
                        color: hover ? '#38a169' : 'inherit', // Changes color on hover
                        transition: 'color 0.3s ease'
                    }}
                >
                Tam Tran
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
                width: '100%', // Ensures it stretches across the container
                borderTop: '1px solid #ffffff', // Adds a top border for visual separation
                marginTop: '20px'
            }}>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '0px' }} />
                <a href="tel:+17145150577" style={{ fontSize: '1.1rem', marginLeft: '-100px', color: '#38a169', textDecoration: 'none' }}>
                    (714) 515-0577
                </a>

                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                <a href="mailto:itistamtran@gmail.com" style={{ fontSize: '1.1rem', marginLeft: '-100px', color: '#38a169', textDecoration: 'none' }}>
                    itistamtran@gmail.com
                </a>

                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px' }} />
                <a href="https://www.linkedin.com/in/tamtran-/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.1rem', marginLeft: '-100px', color: '#38a169', textDecoration: 'none' }}>
                    LinkedIn Profile
                </a>
            </div>

            {/* Education Section */}
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
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', textAlign: 'left', padding: '20px', color: '#38a169' }}>EDUCATION</h3>
            
                <h4 style={{ color: '#ffffff', marginBottom: '10px' }}><strong>Cal Poly Pomona</strong></h4>
                <p style={{ color: '#cccccc', marginBottom: '5px' }}>Bachelor of Science in Computer Science</p>
                <p style={{ color: '#cccccc', marginBottom: '5px' }}>Minors in Mathematics and Data Science</p>
                <p style={{ color: '#cccccc', marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Pomona, CA</p>
                <p style={{ color: '#cccccc', marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}>Expected December 2025</p>

                <h4 style={{ color: '#ffffff', marginTop: '30px', marginBottom: '10px' }}><strong>Cypress College</strong></h4>
                <p style={{ color: '#cccccc', marginBottom: '5px' }}>AS-T Degree in Computer Science</p>
                <p style={{ color: '#cccccc', marginBottom: '5px', marginTop: '-3.3rem', marginRight: '35px', textAlign: 'right' }}>Cypress, CA</p>
                <p style={{ color: '#cccccc', marginBottom: '0rem', marginRight: '35px', textAlign: 'right' }}>December 2023</p>
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
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-1.4rem' ,textAlign: 'left', padding: '20px', color: '#38a169' }}>SKILLS</h3>
                <ul style  = {{ color: '#ffffff', marginBottom: '10px', textAlign: 'left'}}>
                <h4><strong>Programming: </strong> </h4>
                <h4><strong>Frameworks: </strong></h4>
                <h4><strong>Design: </strong></h4>
                <h4><strong>Other: </strong></h4>

                </ul>
                <ul style={{ color: '#cccccc', marginLeft: '30rem', marginTop: '-6.4rem', margin: '1rem auto', maxWidth: '800px' }}>
                    <li>Python, C++, Java, Typescript, JavaScript, HTML, CSS, SQL</li>
                    <li>Next.js, React</li>
                    <li>Photoshop, Premiere, Fresco, Sketchbook, Canva</li>
                    <li>Visual Studio Code, Pycharm, MySQL, GitHub, Google Colab</li>
                </ul>
            </div>
            
            {/* Projects Section */}
        
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
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#38a169'}}>PROJECTS</h3>
                <h4 style  = {{ color: '#ffffff', marginBottom: '10px', textAlign: 'left'}}><strong>Library System Developed (Group Project): </strong></h4>
                

                <ul style={{ color: '#cccccc', marginLeft: '0px', marginTop: '-6.6rem', margin: '1rem auto', maxWidth: '800px' }}>
                    <li style={{ marginTop: '-15px', marginBottom: '10px'}}><i>Technologies: NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon</i></li>
                    <li style={{ display: 'block'}}>Collaborated on developing an online library system to enhance service operations for students and library staff. Responsibilities included: </li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Collaboratively designed and implemented user interfaces using NextJS, Material UI, and Tailwind CSS.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Contributed to backend development with PostgreSQL and Prisma for efficient data handling.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Assisted in optmizing system scalability and performance with Neon.</li>

                </ul>
            </div>

            {/* Experience Section */}
        
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
                <h3 style={{ fontSize: '1.8rem', marginLeft: '-1.4rem', marginBottom: '0px', marginTop: '-2.5rem' ,textAlign: 'left', padding: '20px', color: '#38a169'}}>WORK EXPERIENCE</h3>
                <h4 style  = {{ color: '#ffffff', marginBottom: '10px', textAlign: 'left'}}><strong>Library System Developed (Group Project): </strong></h4>
                {/* Inserting the Timeline component */}
                <div style={{ color: 'white', marginLeft: '-59rem' }}>
                    <Timeline events={events} />
                </div>
                <ul style={{ color: '#cccccc', marginLeft: '0px', marginTop: '-6.6rem', margin: '1rem auto', maxWidth: '800px' }}>
                    <li style={{ marginTop: '-15px', marginBottom: '10px'}}><i>Technologies: NextJS, Material UI, Tailwind CSS, PostgreSQL, Prisma, Neon</i></li>
                    <li style={{ display: 'block'}}>Collaborated on developing an online library system to enhance service operations for students and library staff. Responsibilities included: </li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Collaboratively designed and implemented user interfaces using NextJS, Material UI, and Tailwind CSS.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Contributed to backend development with PostgreSQL and Prisma for efficient data handling.</li>
                    <li><span style={{ marginRight: '10px' }}>&#9679;</span>Assisted in optmizing system scalability and performance with Neon.</li>

                </ul>
            </div>
            


            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Experience</h3>
            <p><strong>Company XYZ</strong> - Senior Developer</p>
            <p>January 2019 - Present</p>
            <ul style={{ textAlign: 'left', margin: '1rem auto', maxWidth: '800px' }}>
                <li>Developed and maintained code for in-house and client applications</li>
                <li>Responsible for the integrity of key user data</li>
                <li>Led a team of developers</li>
            </ul>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Education</h3>
            <p><strong>University of Tech</strong> - B.Sc Computer Science</p>
            <p>2014 - 2018</p>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Skills</h3>
            <ul style={{ textAlign: 'left', margin: '1rem auto', maxWidth: '800px' }}>
                <li>JavaScript, React, Node.js</li>
                <li>Python, Django</li>
                <li>SQL, MongoDB</li>
            </ul>
        </div>
    </div>
  );
};

export default Resume;
