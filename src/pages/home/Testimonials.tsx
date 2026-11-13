import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "We were able to get all data stolen by the group of hackers with the help of Cyberman Solutions. They were effective and efficient. Our files were restored, the data were permanently deleted, and the loopholes were blocked accordingly.",
    location: "United States",
  },
  {
    quote: "I was able to get back 90% of 12 Bitcoin lost to a Telegram scammer after I contacted Cyberman Solutions. I was told to relax and provide some necessary information. I was skeptical at first, but I am grateful that I did.",
    location: "Ukraine",
  },
  {
    quote: "I was accidentally logged out of three of my social media accounts: Facebook, Instagram and Twitter. I tried all possible ways without success. A friend told me about Cyberman Solutions, and I got all the accounts back.",
    location: "Germany",
  },
  {
    quote: "This might sound illegal but I got my grades fixed with the help of these guys. It was my first time seeing it happen. I got excited and introduced a lot of my friends.",
    location: "United States",
  },
  {
    quote: "The guys here are the real deal. I can't go into details, but I got all offences deleted before it got anywhere dangerous.",
    location: "United States",
  },
];

const Testimonials = () => (
  <section className={styles.section} aria-labelledby="testimonials-heading">
    <div className={styles.inner}>
      <span className={styles.eyebrow}>Submitted feedback</span>
      <h2 className={styles.heading} id="testimonials-heading">Experiences shared by individuals</h2>
      <p className={styles.intro}>A selection of feedback supplied for review.</p>
      <p className={styles.notice}>
        These statements were supplied by the site owner and have not been independently verified. The original wording names Cyberman Solutions; these are not verified customer reviews of Hire Geek Hackers and are not endorsements of our services. Outcomes described are individual claims and are not guarantees.
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
