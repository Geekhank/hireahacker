import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Resources.module.css";

const articles = [
  {
    id: "digital-forensics",
    category: "DIGITAL FORENSICS",
    title: "Digital Forensics: What to Preserve When Something Happens Online",
    intro: "When a device, account, or online interaction becomes part of a dispute or security incident, the information you preserve early can make a real difference. Digital forensics is the careful process of identifying, preserving, and examining digital information while documenting how it was handled.",
    sections: [
      ["What can count as digital evidence?", "Depending on the situation, relevant material may include emails, message exports, photographs, documents, device logs, browser history, account alerts, and records supplied by a service provider. The useful evidence depends on the question being investigated."],
      ["Five sensible first steps", "1. Keep the original device and files in their current condition where practical.\n2. Do not delete, edit, rename, or reset potentially relevant material.\n3. Record dates, times, time zones, device details, and what happened.\n4. Save original messages and files where possible; avoid relying only on cropped screenshots.\n5. Keep a note of who collected or transferred each item and when."],
      ["Why documentation matters", "A screenshot can be useful, but it may not show the full context or establish where information came from. Keep original files, note how copies were made, and preserve relevant surrounding conversations. If a matter may become legal, ask a qualified lawyer about evidence-handling requirements in your jurisdiction."],
      ["What not to do", "Do not access another person's account or device without permission, bypass security controls, or install monitoring software. Avoid factory-resetting a device or running cleanup tools before relevant information has been safely preserved."]
    ],
    takeaway: "Good digital evidence work starts with preservation, context, and a clear record—not dramatic technical claims."
  },
  {
    id: "online-fraud",
    category: "ONLINE FRAUD",
    title: "Suspect an Online Scam? Steps to Take Before You Lose More",
    intro: "If you think you have been targeted by an online scam, act quickly but carefully. The priority is to limit further loss, secure affected accounts, and preserve a clear record that can help your bank, platform, or law-enforcement agency assess what happened.",
    sections: [
      ["1. Stop sending money", "Do not pay additional fees to release a supposed refund, unlock an account, recover funds, or verify a transaction. Be especially cautious of people who contact you unexpectedly and promise guaranteed recovery."],
      ["2. Contact the relevant financial provider", "Use the phone number or secure contact method on your bank's official website or card. Explain that you suspect fraud and ask whether a transfer, card payment, or account can be protected, disputed, or recalled. Time limits and available options vary."],
      ["3. Secure your accounts", "From a trusted device, change passwords for affected accounts and any account that reused the same password. Enable multi-factor authentication, review active sessions and recovery details, and contact the provider if you have lost access. Never share one-time verification codes."],
      ["4. Preserve the evidence", "Keep transaction receipts, wallet addresses, emails, message histories, website addresses, usernames, phone numbers, and dates. Export conversations where the platform allows it. Do not alter original files; keep a separate working copy for notes."],
      ["5. Report through official channels", "Report the incident to the platform involved and the appropriate consumer-protection, financial, or law-enforcement authority in your country. In the United States, reports can be made to the Federal Trade Commission at reportfraud.ftc.gov and suspected internet crime to the FBI's IC3 at ic3.gov."],
      ["Watch for recovery scams", "Fraud victims are often targeted again by people claiming they can retrieve stolen money for an upfront fee. No investigator can guarantee that funds will be recovered. Verify any service independently and be wary of pressure, secrecy, or requests for remote access."]
    ],
    takeaway: "A prompt report, secure accounts, and well-preserved records give legitimate providers the best chance to assess the incident."
  },
  {
    id: "crypto-tracing",
    category: "CRYPTOCURRENCY",
    title: "Crypto Tracing Explained: What a Blockchain Investigation Can—and Cannot—Show",
    intro: "Public blockchains record transactions in a way that can often be independently inspected. Cryptocurrency tracing uses this public transaction data to map the movement of assets between addresses. It can help organize leads after a suspected scam or unauthorized transfer, but it does not automatically identify a person or return funds.",
    sections: [
      ["What tracing can reveal", "A transaction analysis may show when assets moved, which addresses sent or received them, transaction amounts, and subsequent on-chain movements. Investigators may identify patterns or services that could be relevant to a report."],
      ["What an address does not prove", "A wallet address is not the same as a verified real-world identity. One person may control many addresses, and a service may control addresses on behalf of many customers. Attribution requires additional reliable information and should be stated cautiously."],
      ["Information to gather", "Keep the transaction ID (txid or hash), sending and receiving addresses, blockchain network, asset and amount, date and time, exchange or wallet provider, and any related messages or receipts. Check that the network is correct; similar-looking assets can exist on different chains."],
      ["Why speed and records matter", "Contact the exchange or service involved through its official support channel as soon as possible. Provide the transaction details and any case or report number. A provider may have procedures for flagging suspicious activity, but it may be unable to freeze or return assets."],
      ["Tracing is not recovery", "Blockchain analysis can document movement and develop investigative leads. It cannot reverse a confirmed blockchain transaction by itself, compel a platform to act, or guarantee that funds are recoverable. Be skeptical of anyone promising certain recovery, especially in exchange for an advance payment."]
    ],
    takeaway: "A useful tracing review is evidence-led: it explains the transactions observed, the limits of attribution, and the next lawful reporting steps."
  }
];

const Resources = () => {
  useEffect(() => {
    document.title = "Digital Forensics, Online Fraud & Crypto Tracing Guides | Hiregeekhacker";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", "Practical guides to preserving digital evidence, responding to online fraud, and understanding cryptocurrency tracing and its limitations.");
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>KNOWLEDGE &amp; GUIDANCE</p>
        <h1>Digital Investigation Resources</h1>
        <p className={styles.lead}>Clear, practical information about preserving digital evidence, responding to online fraud, and understanding blockchain investigations.</p>
        <nav className={styles.contents} aria-label="Articles">
          <strong>Explore the guides</strong>
          {articles.map((article) => <a key={article.id} href={`#${article.id}`}>{article.title}</a>)}
        </nav>
        {articles.map((article) => (
          <article className={styles.article} id={article.id} key={article.id}>
            <p className={styles.category}>{article.category}</p>
            <h2>{article.title}</h2>
            <p className={styles.intro}>{article.intro}</p>
            {article.sections.map(([heading, body]) => (
              <section key={heading}>
                <h3>{heading}</h3>
                {body.split("\\n").map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </section>
            ))}
            <p className={styles.takeaway}>{article.takeaway}</p>
          </article>
        ))}
        <aside className={styles.contact}>
          <h2>Need help understanding a digital incident?</h2>
          <p>Contact our team for an initial discussion. Share only information you are authorized to provide, and do not send passwords or verification codes.</p>
          <Link to="/contact-us">Discuss your case</Link>
        </aside>
        <p className={styles.disclaimer}>These guides are general educational information, not legal, financial, or professional advice. Procedures and reporting options vary by location and situation.</p>
      </div>
    </main>
  );
};

export default Resources;
