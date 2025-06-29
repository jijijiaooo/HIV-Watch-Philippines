import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';

const MapPageContainer = styled.div`
  padding: 2rem 0;
`;

const MapContainerStyled = styled.div`
  height: 600px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ClinicList = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ClinicCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ClinicName = styled.h3`
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const ClinicInfo = styled.p`
  color: #666;
  margin: 0.25rem 0;
`;

const ClinicType = styled.span<{ $type: string }>`
  background-color: ${props => props.$type === 'Love Yourself' ? '#e74c3c' : '#27ae60'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`;

// Sample clinic data - in a real app, this would come from an API
const clinics = [
  {
    id: 1,
    name: "Love Yourself - Anglo",
    type: "Love Yourself",
    address: "Anglo Street, Taguig City",
    phone: "+63 2 8XXX XXXX",
    email: "anglo@loveyourself.ph",
    coordinates: [14.5547, 121.0244],
    services: ["HIV Testing", "STI Testing", "Counseling", "Treatment"]
  },
  {
    id: 2,
    name: "Love Yourself - Uni",
    type: "Love Yourself",
    address: "University Belt, Manila",
    phone: "+63 2 8XXX XXXX",
    email: "uni@loveyourself.ph",
    coordinates: [14.5995, 120.9842],
    services: ["HIV Testing", "STI Testing", "Counseling", "Treatment"]
  },
  {
    id: 3,
    name: "SAIL Clinic - Makati",
    type: "SAIL",
    address: "Makati Medical Center, Makati City",
    phone: "+63 2 8XXX XXXX",
    email: "makati@sail.ph",
    coordinates: [14.5547, 121.0244],
    services: ["HIV Testing", "Treatment", "Support Groups"]
  },
  {
    id: 4,
    name: "Love Yourself - Welcome",
    type: "Love Yourself",
    address: "Welcome Rotonda, Quezon City",
    phone: "+63 2 8XXX XXXX",
    email: "welcome@loveyourself.ph",
    coordinates: [14.6349, 121.0000],
    services: ["HIV Testing", "STI Testing", "Counseling"]
  },
  {
    id: 5,
    name: "SAIL Clinic - Quezon City",
    type: "SAIL",
    address: "Quezon City General Hospital",
    phone: "+63 2 8XXX XXXX",
    email: "qc@sail.ph",
    coordinates: [14.6760, 121.0437],
    services: ["HIV Testing", "Treatment", "Counseling"]
  },
  {
    id: 6,
    name: "Love Yourself - Cebu",
    type: "Love Yourself",
    address: "Cebu City",
    phone: "+63 32 XXX XXXX",
    email: "cebu@loveyourself.ph",
    coordinates: [10.3157, 123.8854],
    services: ["HIV Testing", "STI Testing", "Counseling"]
  }
];

const ClinicMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Get user's location if they allow it
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    }
  }, []);

  const defaultCenter: [number, number] = [14.5995, 120.9842]; // Manila

  return (
    <MapPageContainer>
      <div className="container">
        <h1 className="section-title">HIV Clinic Locator</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          Find the nearest Love Yourself and SAIL clinics for HIV testing, treatment, and support
        </p>

        <MapContainerStyled>
          <MapContainer
            center={userLocation || defaultCenter}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {clinics.map((clinic) => (
              <Marker
                key={clinic.id}
                position={clinic.coordinates as [number, number]}
              >
                <Popup>
                  <div>
                    <h3>{clinic.name}</h3>
                    <p><strong>Type:</strong> {clinic.type}</p>
                    <p><strong>Address:</strong> {clinic.address}</p>
                    <p><strong>Phone:</strong> {clinic.phone}</p>
                    <p><strong>Email:</strong> {clinic.email}</p>
                    <p><strong>Services:</strong></p>
                    <ul>
                      {clinic.services.map((service, index) => (
                        <li key={index}>{service}</li>
                      ))}
                    </ul>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapContainerStyled>

        <ClinicList>
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.id}>
              <ClinicName>{clinic.name}</ClinicName>
              <ClinicType $type={clinic.type}>{clinic.type}</ClinicType>
              <ClinicInfo><strong>Address:</strong> {clinic.address}</ClinicInfo>
              <ClinicInfo><strong>Phone:</strong> {clinic.phone}</ClinicInfo>
              <ClinicInfo><strong>Email:</strong> {clinic.email}</ClinicInfo>
              <ClinicInfo><strong>Services:</strong></ClinicInfo>
              <ul style={{ margin: '0.5rem 0 0 1.5rem', color: '#666' }}>
                {clinic.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </ClinicCard>
          ))}
        </ClinicList>

        <div className="card">
          <h3>Important Information</h3>
          <ul style={{ marginTop: '1rem', lineHeight: '1.6' }}>
            <li>All services are confidential and free of charge</li>
            <li>Walk-in consultations are available at most locations</li>
            <li>Pre-registration may be required for some services</li>
            <li>Bring a valid ID for registration</li>
            <li>For emergencies, contact the nearest hospital immediately</li>
          </ul>
        </div>
      </div>
    </MapPageContainer>
  );
};

export default ClinicMap; 