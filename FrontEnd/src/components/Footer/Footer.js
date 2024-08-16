// import React from 'react';


// const Footer = () => {
//     return (
//         <footer style={styles.footer}>
//             <div style={styles.container}>

                
//                 <div style={styles.aboutSection}>
//                     <div style={styles.logoContainer}>
//                         <img src="" style={styles.logo} />
//                     </div>
//                     <p style={styles.aboutText}>
//                         styleX is your go-to destination for stylish and affordable clothing.
//                         We offer a wide range of fashion-forward apparel to keep you looking your best.
//                     </p>
//                 </div>

                
//                 <div style={styles.section}>
//                     <h3>Quick Links</h3>
//                     <ul style={styles.list}>
//                         <li><a href="#home" style={styles.link}>Home</a></li>
//                         <li><a href="#shop" style={styles.link}>Shop</a></li>
//                         <li><a href="#about" style={styles.link}>About Us</a></li>
//                         <li><a href="#contact" style={styles.link}>Contact Us</a></li>
//                         <li><a href="#faq" style={styles.link}>FAQ</a></li>
//                     </ul>
//                 </div>

                
//                 <div style={styles.section}>
//                     <h3>Contact Us</h3>
//                     <p>Address: 123 Fashion Street, City, Country</p>
//                     <p>Phone: +123 456 7890</p>
//                     <p>Email: info@yourshopname.com</p>
//                 </div>
//             </div>

            
//             <div style={styles.socialMedia}>
//                 <a href="#" style={styles.socialLink}><i className="fa fa-facebook"></i> Facebook</a>
//                 <a href="#" style={styles.socialLink}><i className="fa fa-twitter"></i> Twitter</a>
//                 <a href="#" style={styles.socialLink}><i className="fa fa-instagram"></i> Instagram</a>
//                 <a href="#" style={styles.socialLink}><i className="fa fa-pinterest"></i> Pinterest</a>
//             </div>

            
//             <div style={styles.copyright}>
//                 <p>&copy; 2024  styleX. All Rights Reserved.</p>
//             </div>
//         </footer>
//     );
// };


// const styles = {
//     footer: {
//         backgroundColor: '#1C1A1A',
//         color: 'white',
//         padding: '20px 0',
//         textAlign: 'center'
//     },
//     container: {
//         maxWidth: '1200px',
//         margin: 'auto',
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start'
//     },
//     aboutSection: {
//         flex: 1,
//         minWidth: '250px',
//         textAlign: 'center',
//         margin: '10px'
//     },
//     logoContainer: {
//         marginBottom: '10px'
//     },
//     logo: {
//         width: '150px',
//         height: 'auto'
//     },
//     aboutText: {
//         marginTop: '10px',
//         lineHeight: '1.6'
//     },
//     section: {
//         flex: 1,
//         minWidth: '250px',
//         margin: '10px'
//     },
//     list: {
//         listStyle: 'none',
//         padding: 0
//     },
//     link: {
//         color: 'white',
//         textDecoration: 'none'
//     },
//     socialMedia: {
//         marginTop: '20px'
//     },
//     socialLink: {
//         color: 'white',
//         margin: '0 10px',
//         textDecoration: 'none'
//     },
//     copyright: {
//         marginTop: '20px'
//     }
// };

// export default Footer;

import { Button, Grid, Link } from '@mui/material';
import React from 'react';
import { Instagram, Twitter, Facebook } from '@mui/icons-material';

const Footer = () => {
    const columnStyle = {
        display: 'flex',
        flexDirection: 'row',
    };

    const paperStyle = {
        flex: 1,
        borderRight: '1px solid #ccc',
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const lastPaperStyle = {
        ...paperStyle,
        borderRight: 'none',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left',
        marginTop: '10px',
    };

    const listItemStyle = {
        marginBottom: '8px',
    };

    return (
        <div style={{ backgroundColor: '#000' }}>
            <hr></hr>
            <div style={columnStyle}>
                <div style={paperStyle}>
                    <h2 style={{ color: 'white' }}>ABOUT US</h2>
                    <ul style={listStyle}>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>
                            Who We Are
                        </Link>
                        </li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Blog</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Work With Us</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Investor Relations</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Report Fraud</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Press Kit</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></li>
                    </ul>
                </div>
                <div style={paperStyle}>
                    <h2 style={{ color: 'white' }}>Stylex</h2>
                    <ul style={listStyle}>
                        <li style={listItemStyle}><Link to="/" style={{ color: 'white',textDecoration:'none' }}>Shirts</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Tshirts</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>SweatShirts</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Sarres</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Chudithars</Link></li>
                    </ul>
                </div>
                <div style={lastPaperStyle}>
                    <h2 style={{ color: 'white' }}>FOR FRANCHISE</h2>
                    <ul style={listStyle}>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Partner With Us</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Apps For You</Link></li>

                    </ul>
                    <h2 style={{ color: 'white' }}>FOR ENTERPRISES</h2>
                    <ul style={listStyle}>

                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Stylex For Enterprise</Link></li>
                    </ul>
                </div>
                <hr></hr>
                <div style={paperStyle}>
                    <h2 style={{ color: 'white' }}>LEARN MORE</h2>
                    <ul style={listStyle}>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Privacy</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Security</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Terms</Link></li>
                        <li style={listItemStyle}><Link style={{ color: 'white', textDecoration: 'none' }}>Sitemap</Link></li>
                    </ul>
                </div>
                <div style={{ textAlign: 'justify' }}>
                    <Grid display={'flex'} style={{ flexDirection: 'column', margin: '50px' }}>
                        <h1 style={{ color: 'white' }}>SocialMedia</h1>
                        <Button>
                            <Facebook />Facebook
                        </Button>
                        <Button>
                            <Twitter />Twitter
                        </Button>
                        <Button>
                            <Instagram />Instagram
                        </Button>

                    </Grid>
                </div>
            </div>
        </div>

    );
};

export default Footer;