import React, { useState } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardContainer = styled.div`
  padding: 2rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 1.1rem;
`;

const ChartContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const ChartTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const NewsCard = styled.a`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const NewsThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const NewsSource = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
`;

const NewsTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.4;
`;

const NewsExcerpt = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
`;

// Sample data - demonstration purposes
const sampleHivData = [
  { year: '2018', cases: 12500, deaths: 1200 },
  { year: '2019', cases: 13800, deaths: 1350 },
  { year: '2020', cases: 15200, deaths: 1480 },
  { year: '2021', cases: 16800, deaths: 1620 },
  { year: '2022', cases: 18500, deaths: 1780 },
  { year: '2023', cases: 20300, deaths: 1950 },
];

const sampleRegionalData = [
  { region: 'NCR', cases: 8500, percentage: 42, color: '#667eea' },
  { region: 'CALABARZON', cases: 3200, percentage: 16, color: '#764ba2' },
  { region: 'Central Luzon', cases: 2800, percentage: 14, color: '#f093fb' },
  { region: 'Western Visayas', cases: 2200, percentage: 11, color: '#f5576c' },
  { region: 'Central Visayas', cases: 2000, percentage: 10, color: '#4facfe' },
  { region: 'Others', cases: 1600, percentage: 8, color: '#00f2fe' },
];

const newsData = [
  {
    id: 1,
    source: 'ABS-CBN News',
    title: 'DOH reports increasing HIV cases among young Filipinos',
    excerpt: 'Department of Health reports concerning rise in HIV cases among young Filipinos aged 15-24, with Metro Manila showing the highest prevalence rates.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop',
    link: 'https://news.abs-cbn.com/news/health/hiv-cases-young-filipinos-rise'
  },
  {
    id: 2,
    source: 'GMA News',
    title: 'Free HIV testing available at government health centers',
    excerpt: 'Health officials emphasize the importance of regular testing, with free HIV testing available at government health centers nationwide.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
    link: 'https://www.gmanetwork.com/news/topstories/nation/free-hiv-testing-government-centers'
  },
  {
    id: 3,
    source: 'Rappler',
    title: 'Stigma remains major barrier to HIV testing and treatment',
    excerpt: 'Stigma continues to be a major barrier to HIV testing and treatment, particularly in rural areas where awareness is lower.',
    thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=200&fit=crop',
    link: 'https://www.rappler.com/nation/hiv-stigma-barrier-testing-treatment'
  },
  {
    id: 4,
    source: 'Philippine Daily Inquirer',
    title: 'Government expands access to antiretroviral therapy',
    excerpt: 'The government has expanded access to antiretroviral therapy (ART) with over 200 treatment hubs now operational across the country.',
    thumbnail: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=200&fit=crop',
    link: 'https://newsinfo.inquirer.net/art-treatment-hubs-expansion'
  },
  {
    id: 5,
    source: 'Manila Bulletin',
    title: 'Community organizations crucial in HIV prevention',
    excerpt: 'Community-based organizations are playing a crucial role in HIV prevention and support, especially in high-risk areas.',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop',
    link: 'https://mb.com.ph/community-organizations-hiv-prevention'
  },
  {
    id: 6,
    source: 'CNN Philippines',
    title: 'Concerning trend of late HIV diagnosis',
    excerpt: 'Recent data shows a concerning trend of late diagnosis, with many cases detected only at advanced stages.',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop',
    link: 'https://www.cnnphilippines.com/news/late-hiv-diagnosis-trend'
  }
];

const Dashboard: React.FC = () => {
  const [hivData] = useState(sampleHivData);
  const [regionalData] = useState(sampleRegionalData);
  const [totalCases] = useState(20300);
  const [totalDeaths] = useState(1950);
  const [newCases] = useState(1800);

  return (
    <DashboardContainer>
      <div className="container">
        <h1 className="section-title">HIV Statistics Dashboard</h1>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>{totalCases.toLocaleString()}</StatNumber>
            <StatLabel>Total HIV Cases (2023)</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{newCases.toLocaleString()}</StatNumber>
            <StatLabel>New Cases This Year</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{totalDeaths.toLocaleString()}</StatNumber>
            <StatLabel>Total Deaths (2023)</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>{(totalCases / 110000000 * 100).toFixed(2)}%</StatNumber>
            <StatLabel>Prevalence Rate</StatLabel>
          </StatCard>
        </StatsGrid>

        <ChartContainer>
          <ChartTitle>HIV Cases Trend (2018-2023)</ChartTitle>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={hivData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cases" 
                stroke="#667eea" 
                strokeWidth={3}
                name="Total Cases"
              />
              <Line 
                type="monotone" 
                dataKey="deaths" 
                stroke="#e74c3c" 
                strokeWidth={3}
                name="Deaths"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer>
          <ChartTitle>Regional Distribution of HIV Cases</ChartTitle>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={regionalData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="cases"
                nameKey="region"
                label={({ region, percentage }) => `${region}: ${percentage}%`}
                labelLine={false}
              >
                {regionalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [value.toLocaleString(), name]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="card">
          <h3>Key Insights from Local News Sources</h3>
          <NewsGrid>
            {newsData.map((news) => (
              <NewsCard key={news.id} href={news.link} target="_blank" rel="noopener noreferrer">
                <NewsThumbnail style={{ backgroundImage: `url(${news.thumbnail})` }}>
                  <NewsSource>{news.source}</NewsSource>
                </NewsThumbnail>
                <NewsContent>
                  <NewsTitle>{news.title}</NewsTitle>
                  <NewsExcerpt>{news.excerpt}</NewsExcerpt>
                </NewsContent>
              </NewsCard>
            ))}
          </NewsGrid>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard; 