import '../styles/TermsPrivacy.css'

function TermsPrivacy({ type = 'terms' }) {
  const content = {
    terms: {
      title: 'Terms of Service',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.'
        },
        {
          heading: '2. Use License',
          content: 'Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'
        },
        {
          heading: '3. Disclaimer',
          content: 'The materials on DRL Techs website are provided on an "as is" basis. DRL Techs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
        },
        {
          heading: '4. Limitations',
          content: 'In no event shall DRL Techs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DRL Techs website.'
        },
        {
          heading: '5. Accuracy of Materials',
          content: 'The materials appearing on DRL Techs website could include technical, typographical, or photographic errors. DRL Techs does not warrant that any of the materials are accurate, complete or current.'
        }
      ]
    },
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: '1. Information We Collect',
          content: 'We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This may include your name, email address, postal address, phone number, and payment information.'
        },
        {
          heading: '2. How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, and send promotional communications (with your consent).'
        },
        {
          heading: '3. Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          heading: '4. Cookie Policy',
          content: 'We use cookies and similar technologies to enhance your experience on our website, remember your preferences, and understand how you use our services.'
        },
        {
          heading: '5. Third-Party Links',
          content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.'
        }
      ]
    },
    ndf: {
      title: 'Non-Disclosure Agreement',
      sections: [
        {
          heading: '1. Confidential Information',
          content: 'The disclosing party agrees to disclose certain confidential and proprietary information to the receiving party. This information is considered confidential and shall be protected accordingly.'
        },
        {
          heading: '2. Obligations of Receiving Party',
          content: 'The receiving party agrees to maintain the confidentiality of the disclosed information and not to disclose it to any third parties without prior written consent.'
        },
        {
          heading: '3. Exceptions',
          content: 'This agreement does not apply to information that is publicly available, already known to the receiving party, or received from a third party without confidentiality obligations.'
        },
        {
          heading: '4. Term',
          content: 'This agreement shall remain in effect for a period of three (3) years from the date of disclosure, or as otherwise specified in writing.'
        },
        {
          heading: '5. Return of Information',
          content: 'Upon request, the receiving party agrees to return or destroy all confidential information and certify such return or destruction in writing.'
        }
      ]
    }
  }

  const doc = content[type] || content.terms

  return (
    <>
      <section className="legal-hero">
        <h1>{doc.title}</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </section>

      <section className="legal-content">
        <div className="legal-text">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="legal-section">
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="legal-footer">
          <p>If you have any questions about these terms, please contact us at info@drltechs.com</p>
        </div>
      </section>
    </>
  )
}

export default TermsPrivacy
