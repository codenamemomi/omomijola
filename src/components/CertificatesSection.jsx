function CertificatesSection({ certificates = [] }) {
  return (
    <section id="certificates" className="section card-section">
      <div className="section-header museum-header">
        <span>Archives</span>
        <h2>Credentials &amp; recognition</h2>
        <p className="section-lede">
          Supporting documents from the path into production engineering.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="certificate-card card">
            <div className="certificate-image">
              <img src={certificate.image} alt={`${certificate.title} certificate`} />
            </div>
            <div className="certificate-body">
              <span className="certificate-meta">{certificate.issuer}</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CertificatesSection
