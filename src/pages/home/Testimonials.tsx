import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "We received help after a group of hackers stole our data. Hire Geek Hackers helped restore our files, remove compromised data, and address security vulnerabilities. Their service was effective and professional.",
    location: "United States",
  },
  {
    quote: "After losing 12 Bitcoin to a Telegram scam, I contacted Hire Geek Hackers. I was initially skeptical, but after providing the requested information, I was able to recover a significant portion of my funds. I’m grateful for their assistance.",
    location: "Ukraine",
  },
  {
    quote: "I was locked out of my Facebook, Instagram, and Twitter accounts and couldn't regain access through the usual methods. A friend recommended Hire Geek Hackers, and I was able to recover my accounts. Thank you!",
    location: "Germany",
  },
  {
    quote: "This might sound unusual, but I received help with an academic records issue. It was an experience I had never encountered before.",
    location: "United States",
  },
  {
    quote: "I received assistance with a sensitive legal-records matter. I cannot share the details, but I appreciated the support I received.",
    location: "United States",
  },
];

const Testimonials = () => (
  <section className={styles.section} aria-labelledby="testimonials-heading">
    <div className={styles.inner}>
      <span className={styles.eyebrow}>Submitted feedback · Unverified</span>
      <h2 className={styles.heading} id="testimonials-heading">Experiences shared by individuals</h2>
      <p className={styles.intro}>A selection of feedback supplied for publication.</p>
      <p className={styles.notice}>
        These statements were supplied for publication and have not been independently verified. They are not verified customer reviews or endorsements, and individual claims do not guarantee similar outcomes. The academic and legal-records statements should not be understood as an offer to alter academic records or conceal offences.
      </p>
      <div className={styles.grid}>
        {testimonials.map((item, index) => (
          <article className={styles.card} key={index}>
            <div className={styles.quoteMark} aria-hidden="true">“</div>
            <blockquote className={styles.quote}>{item.quote}</blockquote>
            <div className={styles.author}><strong>Anonymous</strong> · {item.location}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
