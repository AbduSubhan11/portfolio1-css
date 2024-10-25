import Email from "../components/Email/Email";
import styles from "../contact/contact.module.css"
function Page() {
  return (

    <section className={styles.contactParent}>
    
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div className={styles.NameEmailinputParent}>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input
            type="text"
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <textarea
            name="subject"
            placeholder="Subject"
            className={styles.textarea}
            required
          ></textarea>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            className={styles.textarea}
            required
          ></textarea>
        </div>

        <div>
          <button>
            <span className={styles.submitBtnText}>
              Submit
            </span>
            <span className={styles.contactBtnSpanWhite}></span>
          </button>
        </div>
      </form>
      <Email />
    </section>
  );
}

export default Page;
