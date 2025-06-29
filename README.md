# HIV Watch Philippines

A comprehensive web application for tracking HIV population statistics in the Philippines and providing access to testing and treatment facilities.

## Features

### 📊 Dashboard

- Real-time HIV statistics and trends
- Interactive line charts showing case progression over time
- Regional distribution of HIV cases
- Key insights and data visualization

### 🗺️ Clinic Locator

- Interactive map showing Love Yourself and SAIL clinics
- Detailed clinic information including contact details
- Services offered by each facility
- User location detection for nearest clinic finding

### ❓ FAQ Section

- Comprehensive answers to common HIV-related questions
- Categorized information covering testing, treatment, and prevention
- Contact information for additional support

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Styled Components
- **Charts**: Recharts
- **Maps**: React Leaflet with OpenStreetMap
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jiaoshihlo/HIV-watch.git
cd HIV-watch
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Deployment

This project is configured for deployment on GitHub Pages. To deploy:

1. Ensure your repository is public
2. Run the deployment command:

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Navigation.tsx   # Main navigation component
├── pages/              # Page components
│   ├── Dashboard.tsx    # Statistics dashboard
│   ├── ClinicMap.tsx    # Clinic locator map
│   └── FAQ.tsx         # FAQ page
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Data Sources

The application currently uses sample data for demonstration purposes. In a production environment, this would be connected to:

- Department of Health (DOH) API
- Philippine Statistics Authority (PSA) data
- Real-time clinic information from partner organizations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Real-time data integration with DOH APIs
- [ ] User authentication and personalized dashboards
- [ ] Mobile app version
- [ ] Multi-language support (Filipino/English)
- [ ] Advanced analytics and predictive modeling
- [ ] Integration with telemedicine platforms
- [ ] Community forum and support groups
- [ ] Educational content and resources

## Support

For support and questions:

- Email: support@hivwatch.ph
- Emergency Hotline: +63 2 8XXX XXXX
- 24/7 Crisis Line: +63 9XX XXX XXXX

## Acknowledgments

- Love Yourself Philippines for clinic information
- SAIL (Support and Advocacy Initiatives for Life) for partnership
- Department of Health for statistical data
- OpenStreetMap for mapping services

---

**Note**: This application is for educational and informational purposes. For medical advice and HIV testing, please consult healthcare professionals or visit authorized testing centers.
# HIV-Watch-Philippines
