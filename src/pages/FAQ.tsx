import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  padding: 2rem 0;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: 1.5rem;
  background: ${props => props.$isOpen ? '#667eea' : 'white'};
  color: ${props => props.$isOpen ? 'white' : '#333'};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: ${props => props.$isOpen ? '#667eea' : '#f8f9fa'};
  }
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  padding: ${props => props.$isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background: #f8f9fa;
  line-height: 1.6;
`;

const Arrow = styled.span<{ $isOpen: boolean }>`
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
  font-size: 1.2rem;
`;

const CategoryTitle = styled.h2`
  color: #667eea;
  margin: 2rem 0 1rem 0;
  font-size: 1.5rem;
`;

const ContactSection = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  text-align: center;
`;

const faqData = [
  {
    category: "General Information",
    questions: [
      {
        question: "What is HIV?",
        answer: "HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome)."
      },
      {
        question: "What is the difference between HIV and AIDS?",
        answer: "HIV is the virus that causes the infection. AIDS is the most advanced stage of HIV infection. Not everyone with HIV develops AIDS. With proper treatment, people with HIV can live long, healthy lives and may never develop AIDS."
      },
      {
        question: "How common is HIV in the Philippines?",
        answer: "According to recent data, there are over 20,000 reported HIV cases in the Philippines, with the number steadily increasing. The National Capital Region has the highest concentration of cases. However, many cases may go unreported due to stigma and lack of testing."
      }
    ]
  },
  {
    category: "Testing",
    questions: [
      {
        question: "How do I know if I should get tested for HIV?",
        answer: "You should get tested if you: have had unprotected sex, shared needles, had multiple sexual partners, or been diagnosed with another STI. The CDC recommends everyone aged 13-64 get tested at least once, and those at higher risk get tested more frequently."
      },
      {
        question: "How accurate are HIV tests?",
        answer: "Modern HIV tests are very accurate. Rapid tests can detect HIV as early as 2-4 weeks after exposure, while laboratory tests can detect it even earlier. A positive result should always be confirmed with additional testing."
      },
      {
        question: "How long does it take to get HIV test results?",
        answer: "Rapid tests provide results in 15-30 minutes. Laboratory tests typically take 1-3 days. Some clinics offer same-day results for certain types of tests."
      },
      {
        question: "Is HIV testing confidential?",
        answer: "Yes, HIV testing is confidential. Your results are protected by privacy laws and cannot be shared without your consent, except in specific circumstances required by law."
      }
    ]
  },
  {
    category: "Prevention",
    questions: [
      {
        question: "How can I prevent HIV infection?",
        answer: "Use condoms consistently and correctly, get tested regularly, limit your number of sexual partners, never share needles, and consider PrEP (pre-exposure prophylaxis) if you're at high risk. Education and awareness are also key prevention tools."
      },
      {
        question: "What is PrEP?",
        answer: "PrEP (Pre-Exposure Prophylaxis) is a daily medication that can prevent HIV infection in people who are at high risk. When taken consistently, PrEP is highly effective at preventing HIV transmission."
      },
      {
        question: "What is PEP?",
        answer: "PEP (Post-Exposure Prophylaxis) is emergency medication taken within 72 hours after potential HIV exposure to prevent infection. It should be started as soon as possible after exposure."
      }
    ]
  },
  {
    category: "Treatment",
    questions: [
      {
        question: "Is there a cure for HIV?",
        answer: "Currently, there is no cure for HIV. However, with proper treatment (antiretroviral therapy or ART), people with HIV can live long, healthy lives and have a near-normal life expectancy."
      },
      {
        question: "How does HIV treatment work?",
        answer: "HIV treatment involves taking a combination of medications (antiretroviral therapy) that prevent the virus from multiplying. This keeps the viral load low and helps maintain a healthy immune system."
      },
      {
        question: "What are the side effects of HIV medication?",
        answer: "Side effects vary by medication and person. Common side effects include nausea, fatigue, and headache. Most side effects are mild and temporary. Your healthcare provider can help manage any side effects."
      },
      {
        question: "How much does HIV treatment cost?",
        answer: "In the Philippines, HIV treatment is available for free through government programs and organizations like Love Yourself and SAIL. Private treatment costs vary but can be expensive without insurance."
      }
    ]
  },
  {
    category: "Support and Resources",
    questions: [
      {
        question: "Where can I get emotional support?",
        answer: "Many organizations offer counseling and support groups for people living with HIV. Love Yourself and SAIL clinics provide counseling services. There are also online support communities and helplines available."
      },
      {
        question: "What legal rights do people with HIV have?",
        answer: "People with HIV have the same rights as everyone else. Discrimination based on HIV status is illegal in many contexts. You have the right to privacy, employment, healthcare, and education."
      },
      {
        question: "How can I support someone with HIV?",
        answer: "Be supportive and non-judgmental, educate yourself about HIV, respect their privacy, offer practical help when needed, and encourage them to seek medical care and support services."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <FAQContainer>
      <div className="container">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          Find answers to common questions about HIV testing, treatment, and prevention
        </p>

        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <CategoryTitle>{category.category}</CategoryTitle>
            {category.questions.map((item, questionIndex) => {
              const key = `${categoryIndex}-${questionIndex}`;
              const isOpen = openItems[key] || false;

              return (
                <FAQItem key={key}>
                  <FAQQuestion
                    $isOpen={isOpen}
                    onClick={() => toggleItem(categoryIndex, questionIndex)}
                  >
                    {item.question}
                    <Arrow $isOpen={isOpen}>▼</Arrow>
                  </FAQQuestion>
                  <FAQAnswer $isOpen={isOpen}>
                    {item.answer}
                  </FAQAnswer>
                </FAQItem>
              );
            })}
          </div>
        ))}

        <ContactSection>
          <h3>Need More Help?</h3>
          <p style={{ marginBottom: '1rem' }}>
            If you couldn't find the answer you're looking for, don't hesitate to reach out to us or visit one of our partner clinics.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <strong>Emergency Hotline:</strong><br />
              +63 2 925 9111
            </div>
            <div>
              <strong>Email Support:</strong><br />
              support@hivwatch.ph
            </div>
            <div>
              <strong>24/7 Crisis Line:</strong><br />
              +63 9XX XXX XXXX
            </div>
          </div>
        </ContactSection>
      </div>
    </FAQContainer>
  );
};

export default FAQ; 