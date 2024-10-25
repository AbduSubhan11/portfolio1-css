import Email from "../components/Email";
function Page() {
  return (

    <section className="contactParent ">
    
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div className="NameEmailinputParent ">
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
            required
          ></textarea>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div>
          <button>
            <span className="submitBtnText ">
              Submit
            </span>
            <span className="contactBtnSpanWhite"></span>
          </button>
        </div>
      </form>
      <Email />
    </section>
  );
}

export default Page;
