import React from 'react';
import { Container, Typography } from '@mui/material';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{ marginTop: '2em', fontWeight: 'bold' }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Privacy Policy</strong><br />
        Last Updated: [Date]
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Introduction</strong><br />
        Welcome to Astraegis, a leading AI security and data protection company. Your privacy is of paramount importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using our services, you agree to the terms outlined in this policy.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>1. Information We Collect</strong><br />
        <strong>1.1 Personal Information</strong><br />
        We collect personal information that you voluntarily provide to us, including but not limited to:
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Job title</li>
          <li>Company name</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>1.2 Automatically Collected Information</strong><br />
        We automatically collect certain information when you visit our website or use our services, such as:
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Referring URLs</li>
          <li>Pages viewed</li>
          <li>Access times</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>1.3 Cookies and Tracking Technologies</strong><br />
        We use cookies and similar tracking technologies to enhance your experience. Cookies are small text files stored on your device that help us understand how you use our website and services. You can control the use of cookies through your browser settings.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>2. How We Use Your Information</strong><br />
        We use the information we collect for various purposes, including:
        <ul>
          <li>Providing, operating, and maintaining our services</li>
          <li>Improving, personalizing, and expanding our services</li>
          <li>Communicating with you, including responding to your inquiries and providing customer support</li>
          <li>Sending you updates, marketing, and promotional materials</li>
          <li>Monitoring and analyzing usage and trends to improve your experience</li>
          <li>Detecting, preventing, and addressing technical issues and security breaches</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>3. How We Share Your Information</strong><br />
        We do not sell your personal information to third parties. However, we may share your information in the following circumstances:
        <ul>
          <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>4. Data Security</strong><br />
        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>5. Your Data Protection Rights</strong><br />
        Depending on your location, you may have the following rights regarding your personal information:
        <ul>
          <li><strong>Access:</strong> You have the right to request copies of your personal data.</li>
          <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li><strong>Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
          <li><strong>Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
          <li><strong>Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
          <li><strong>Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
        </ul>
        To exercise any of these rights, please contact us at [contact email]. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>6. International Data Transfers</strong><br />
        Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including personal data, to the United States and process it there.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>7. Third-Party Links</strong><br />
        Our services may contain links to third-party websites. This Privacy Policy does not apply to such third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of these websites before providing any personal information.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>8. Changes to This Privacy Policy</strong><br />
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>9. Contact Us</strong><br />
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </Typography>
      <Typography variant="body1" paragraph>
        Astraegis
      </Typography>
      <Typography variant="body1" paragraph>
        Thank you for trusting Astraegis with your personal information. We are committed to protecting your privacy and ensuring the security of your data.
      </Typography>
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;