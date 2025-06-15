// src/app/page.js
"use client";

import dynamic from "next/dynamic";
import React from 'react'; 

// Dynamically import the MapComponent from the 'components' folder.
const MapComponent = dynamic(() => import("./components/Map"), { ssr: false });

export default function HomePage() {
  const darkTheme = {
    backgroundColor: '#1a1a2e', // Dark background for the body
    color: '#e0e0e0',          // Light text color for main content
    sectionBg: '#2a2a4a',      // Slightly lighter dark for main sections
    cardBg: '#3a3a5e',         // Even lighter dark for cards/steps
    borderColor: '#4a4a70',    // Darker border for contrast
    primaryColor: '#8a8af0',   // A vibrant blue/purple for headings/highlights
    secondaryColor: '#f0e08a',  // A contrasting yellowish for accents
    boxShadow: '0 4px 15px rgba(0,0,0,0.4)', // Darker shadow for depth
  };

  // Calculate header height dynamically or estimate it.
  // For fixed headers, it's good practice to add top padding to main content.
  const headerHeight = '150px'; // Estimate or measure this from your current header's height

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: darkTheme.backgroundColor, color: darkTheme.color }}>
      
      {/* 1. Header Section with Navigation Bar (Fixed Top) */}
      <header style={{ 
          backgroundColor: darkTheme.sectionBg, 
          color: darkTheme.color, 
          padding: '20px 0', 
          textAlign: 'center',
          boxShadow: darkTheme.boxShadow,
          position: 'fixed', // CHANGED: 'sticky' to 'fixed'
          top: 0,
          left: 0, // Ensure it spans full width
          width: '100%', // Ensure it spans full width
          zIndex: 1000 // Ensures it's above other content
      }}>
        <h1 style={{ margin: '0', fontSize: '2.5em', color: darkTheme.primaryColor }}>Interactive Satellite Image Viewer</h1>
        <p style={{ fontSize: '1.1em', marginTop: '10px', marginBottom: '20px' }}>
          Your Window to Earth's Dynamics and Actionable Insights.
        </p>

        {/* Navigation Bar */}
        <nav style={{ backgroundColor: darkTheme.borderColor, padding: '10px 0' }}>
          <ul style={{ 
              listStyleType: 'none', 
              padding: '0', 
              margin: '0', 
              display: 'flex', 
              justifyContent: 'center',
              flexWrap: 'wrap' 
          }}>
            <li style={{ margin: '0 15px' }}>
              <a href="#about" style={{ color: darkTheme.color, textDecoration: 'none', fontWeight: 'bold', fontSize: '1em', transition: 'color 0.3s' }}
                 onMouseOver={e => { e.currentTarget.style.color = darkTheme.secondaryColor; }} 
                 onMouseOut={e => { e.currentTarget.style.color = darkTheme.color; }}
              >About the Viewer</a>
            </li>
            <li style={{ margin: '0 15px' }}>
              <a href="#applications" style={{ color: darkTheme.color, textDecoration: 'none', fontWeight: 'bold', fontSize: '1em', transition: 'color 0.3s' }}
                 onMouseOver={e => { e.currentTarget.style.color = darkTheme.secondaryColor; }}
                 onMouseOut={e => { e.currentTarget.style.color = darkTheme.color; }}
              >Applications</a>
            </li>
            <li style={{ margin: '0 15px' }}>
              <a href="#live-map" style={{ color: darkTheme.color, textDecoration: 'none', fontWeight: 'bold', fontSize: '1em', transition: 'color 0.3s' }}
                 onMouseOver={e => { e.currentTarget.style.color = darkTheme.secondaryColor; }}
                 onMouseOut={e => { e.currentTarget.style.color = darkTheme.color; }}
              >Live Map</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main content area - Add padding-top to account for fixed header */}
      <main style={{ 
        maxWidth: '1200px', 
        margin: '20px auto', 
        padding: `20px 20px 0px 20px`, // Added padding-top
        paddingTop: headerHeight // Ensure content starts below the fixed header
      }}>
        
        {/* 2. Consolidated About the Viewer & Guide Section */}
        <section id="about" style={{ 
            backgroundColor: darkTheme.sectionBg, 
            padding: '30px', 
            borderRadius: '8px', 
            boxShadow: darkTheme.boxShadow,
            marginBottom: '30px',
            textAlign: 'center' 
        }}>
            <h2 style={{ color: darkTheme.primaryColor, marginTop: '0', marginBottom: '15px' }}>About the Interactive Viewer</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05em', marginBottom: '30px' }}>
                Fuel your decision-making with our powerful, user-friendly tools to explore 
                high-resolution satellite imagery, both **current and historical**, offering a unique perspective on our world. 
                Dynamically select and visualize different layers to gain valuable insights into geographical patterns, monitor land use, 
                track environmental changes, and understand various phenomena on Earth. 
                Our intuitive interface makes complex satellite data accessible and actionable for everyone.
            </p>

            {/* How-to-Use Section - now part of "About" */}
            <div style={{ 
                padding: '15px', 
                borderRadius: '8px', 
                background: darkTheme.cardBg, 
                border: `1px solid ${darkTheme.borderColor}`, 
                boxShadow: darkTheme.boxShadow
            }}>
                <h3 style={{ 
                    marginTop: '0', 
                    marginBottom: '15px', 
                    color: darkTheme.primaryColor, 
                    fontSize: '1.3em', 
                    textAlign: 'center' 
                }}>How to Use the Viewer:</h3>
                <ul style={{ 
                    listStyleType: 'none', 
                    paddingLeft: '0', 
                    margin: '0' 
                }}>
                    <li style={{ 
                        marginBottom: '15px', 
                        padding: '12px 15px', 
                        background: darkTheme.backgroundColor, 
                        borderRadius: '5px', 
                        border: `1px solid ${darkTheme.borderColor}`, 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '1em',
                        color: darkTheme.color,
                        boxShadow: darkTheme.boxShadow
                    }}>
                        <span style={{ 
                            fontWeight: 'bold', 
                            color: darkTheme.secondaryColor, 
                            marginRight: '15px', 
                            minWidth: '25px', 
                            textAlign: 'center',
                            fontSize: '1.2em'
                        }}>1.</span>
                        <span>**Select a Layer:** Use the dropdown menu to choose from available satellite image layers.</span>
                    </li>
                    <li style={{ 
                        marginBottom: '15px', 
                        padding: '12px 15px', 
                        background: darkTheme.backgroundColor, 
                        borderRadius: '5px', 
                        border: `1px solid ${darkTheme.borderColor}`, 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '1em',
                        color: darkTheme.color,
                        boxShadow: darkTheme.boxShadow
                    }}>
                        <span style={{ 
                            fontWeight: 'bold', 
                            color: darkTheme.secondaryColor, 
                            marginRight: '15px', 
                            minWidth: '25px', 
                            textAlign: 'center',
                            fontSize: '1.2em'
                        }}>2.</span>
                        <span>**Adjust Visibility:** Control the transparency of the selected layer using the opacity slider.</span>
                    </li>
                    <li style={{ 
                        marginBottom: '15px', 
                        padding: '12px 15px', 
                        background: darkTheme.backgroundColor, 
                        borderRadius: '5px', 
                        border: `1px solid ${darkTheme.borderColor}`, 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '1em',
                        color: darkTheme.color,
                        boxShadow: darkTheme.boxShadow
                    }}>
                        <span style={{ 
                            fontWeight: 'bold', 
                            color: darkTheme.secondaryColor, 
                            marginRight: '15px', 
                            minWidth: '25px', 
                            textAlign: 'center',
                            fontSize: '1.2em'
                        }}>3.</span>
                        <span>**Explore the Map:** Pan and zoom to navigate the map for detailed observation of areas of interest.</span>
                    </li>
                    <li style={{ 
                        padding: '12px 15px', 
                        background: darkTheme.backgroundColor, 
                        borderRadius: '5px', 
                        border: `1px solid ${darkTheme.borderColor}`, 
                        display: 'flex', 
                        alignItems: 'center',
                        fontSize: '1em',
                        color: darkTheme.color,
                        boxShadow: darkTheme.boxShadow
                    }}>
                        <span style={{ 
                            fontWeight: 'bold', 
                            color: darkTheme.secondaryColor, 
                            marginRight: '15px', 
                            minWidth: '25px', 
                            textAlign: 'center',
                            fontSize: '1.2em'
                        }}>4.</span>
                        <span>**Get Details:** View specific layer information below the map controls, or simply click on the map overlay for an instant popup with details.</span>
                    </li>
                </ul>
            </div>
        </section>

        {/* 3. Applications & Impact Section */}
        <section id="applications" style={{ 
            backgroundColor: darkTheme.sectionBg, 
            padding: '30px', 
            borderRadius: '8px', 
            boxShadow: darkTheme.boxShadow,
            marginBottom: '30px'
        }}>
            <h2 style={{ color: darkTheme.primaryColor, marginTop: '0', marginBottom: '25px', textAlign: 'center' }}>Key Applications & Impact</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' }}>
                {/* Application Card 1: Agriculture */}
                <div style={{ flex: '1 1 45%', minWidth: '300px', background: darkTheme.cardBg, padding: '20px', borderRadius: '8px', boxShadow: darkTheme.boxShadow, border: `1px solid ${darkTheme.borderColor}` }}>
                    <h3 style={{ color: darkTheme.secondaryColor, marginTop: '0', marginBottom: '10px', fontSize: '1.2em' }}>Agriculture & Land Management</h3>
                    <p style={{ fontSize: '0.95em', lineHeight: '1.6', color: darkTheme.color }}>
                        Farmers can monitor **crop health**, manage pastures, and track land changes. Our viewer helps visualize
                        field conditions, identify areas needing attention, and assess impacts from natural events like floods or fires,
                        leading to more efficient resource application and better farm management.
                    </p>
                </div>
                {/* Application Card 2: Environmental Monitoring */}
                <div style={{ flex: '1 1 45%', minWidth: '300px', background: darkTheme.cardBg, padding: '20px', borderRadius: '8px', boxShadow: darkTheme.boxShadow, border: `1px solid ${darkTheme.borderColor}` }}>
                    <h3 style={{ color: darkTheme.secondaryColor, marginTop: '0', marginBottom: '10px', fontSize: '1.2em' }}>Environmental & Climate Monitoring</h3>
                    <p style={{ fontSize: '0.95em', lineHeight: '1.6', color: darkTheme.color }}>
                        Gain vital insights for tracking **forests, water bodies, and coastlines**. Observe long-term climate trends
                        like desertification or sea-level changes. Our tools help monitor urban expansion, protect natural areas,
                        and support understanding of ecosystem dynamics.
                    </p>
                </div>
                {/* Application Card 3: Urban Planning & Disaster Response */}
                <div style={{ flex: '1 1 45%', minWidth: '300px', background: darkTheme.cardBg, padding: '20px', borderRadius: '8px', boxShadow: darkTheme.boxShadow, border: `1px solid ${darkTheme.borderColor}` }}>
                    <h3 style={{ color: darkTheme.secondaryColor, marginTop: '0', marginBottom: '10px', fontSize: '1.2em' }}>Urban Planning & Rapid Assessment</h3>
                    <p style={{ fontSize: '0.95em', lineHeight: '1.6', color: darkTheme.color }}>
                        City planners and development professionals can assess terrain and infrastructure. In times of disaster like
                        storms or floods, quickly visualize affected areas to aid **response efforts** and guide recovery,
                        simplifying complex assessment tasks.
                    </p>
                </div>
            </div>
        </section>

        {/* 4. The Map Viewer Section */}
        <section id="live-map" style={{ 
            backgroundColor: darkTheme.sectionBg, 
            padding: '30px', 
            borderRadius: '8px', 
            boxShadow: darkTheme.boxShadow,
            marginBottom: '30px'
        }}>
          <h2 style={{ color: darkTheme.primaryColor, marginTop: '0', marginBottom: '25px', textAlign: 'center' }}>Live Satellite Map</h2>
          <MapComponent />
        </section>

      </main>

      {/* 5. Footer Section */}
      <footer style={{ 
          backgroundColor: darkTheme.sectionBg, 
          color: darkTheme.color, 
          padding: '20px 0', 
          textAlign: 'center',
          fontSize: '0.9em',
          boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: '0' }}>&copy; {new Date().getFullYear()} Interactive Satellite Image Viewer. All rights reserved.</p>
        <p style={{ margin: '5px 0 0' }}>Powered by Next.js, Leaflet.js, and Firebase.</p>
      </footer>

    </div>
  );
}