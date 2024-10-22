import React from 'react';
import { useNavigate } from 'react-router-dom';

const PolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-4 font-Roboto mt-10">
      <button 
        onClick={() => navigate(-1)} 
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600"
      >
        Back
      </button>

      <h1 className="text-3xl font-bold mb-6 font-RobotoSlab">Website Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Privacy Policy</h2>
        <p className="mb-4">L-Earn Academy is committed to protecting your privacy. This policy outlines how we collect, use, and protect your personal information.</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Information Collection:</strong> We may collect personal information such as your name, email address, phone number, and payment details when you register for courses, subscribe to newsletters, or make inquiries.</li>
          <li><strong>Use of Information:</strong> Your information is used to provide and improve our services, process payments, communicate with you, and personalize your experience on our website.</li>
          <li><strong>Data Security:</strong> We implement robust security measures to protect your personal information from unauthorized access, disclosure, or alteration.</li>
          <li><strong>Third-Party Sharing:</strong> We do not sell or share your personal information with third parties, except as necessary to provide our services (e.g., payment processors) or as required by law.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Terms of Use</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Content Ownership:</strong> All content on this website, including text, images, logos, and course materials, is the intellectual property of L-Earn Academy unless otherwise stated. Unauthorized use of any content is prohibited.</li>
          <li><strong>User Conduct:</strong> You agree to use the website for lawful purposes only. You must not post or transmit any harmful, offensive, or illegal content.</li>
          <li><strong>Course Enrollment:</strong> By enrolling in our courses, you agree to abide by the specific terms and conditions related to course fees, cancellations, and refunds as outlined during the registration process.</li>
          <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Cookies Policy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>What Are Cookies?</strong> Cookies are small text files stored on your device that help us analyze web traffic, customize content, and provide personalized services.</li>
          <li><strong>Types of Cookies:</strong> We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period or until you delete them).</li>
          <li><strong>Your Choices:</strong> You can control or delete cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Disclaimers</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>No Warranties:</strong> While we strive to keep the information on our website accurate and up-to-date, we make no warranties or representations about the completeness, accuracy, or reliability of the content.</li>
          <li><strong>Limitation of Liability:</strong> L-Earn Academy shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our website or the inability to access it.</li>
          <li><strong>Third-Party Links:</strong> Our website may contain links to third-party websites for your convenience. We do not endorse or assume responsibility for the content or practices of these external sites.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Changes to This Policy</h2>
        <p>L-Earn Academy reserves the right to modify this Website Policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this policy regularly to stay informed of any updates.</p>
      </section>
    </div>
  );
};

export default PolicyPage;
