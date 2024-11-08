import Image from "next/image";
import styles from "./expense.module.css";
import expense from "../../../public/Images/expense.png";
import Link from "next/link";
function Page() {
  return (
    <div>
      <Image
        src={expense}
        alt="expense"
        className={styles.expenseTrackImage}
      ></Image>
      <div className={styles.expenseTrackTextParent}>
        <h1>Expense Tracker</h1>
        <p className={styles.expenseTrackPara1}>
          Manage your daily expenses effortlessly with our Expense Tracker!
          Easily create, view, and organize your expenses in one place.
        </p>

        <h2 className={styles.expenseTrackFeaturHead}>Key Features</h2>
        <ul>
          <li>
            <strong>Add Expenses:</strong> Enter the title, category, and amount
            of each expense and add it to the table.
          </li>
          <li>
            <strong>Sort by Amount:</strong> Click on the amount column to sort
            your expenses in ascending or descending order.
          </li>
          <li>
            <strong>Edit or Delete:</strong> Modify or remove an existing
            expense with a single click of the edit or delete buttons.
          </li>
        </ul>

        <h2 className={styles.expenseTrackHowwork}>How it Works</h2>
        <p className={styles.expenseTrackPara2}>
          1. Fill out the form by entering the title, category, and amount of
          the expense.
          <br />
          2. Once submitted, the expense is added to a dynamic table below.
          <br />
          3. You can sort the table by amount, and easily edit or delete any
          record as needed.
        </p>

        <h3 className={styles.expenseTrackStart}>Get Started Now</h3>
        <p className={styles.expenseTrackPara3}>
          Keep your spending in check and stay organized with our easy-to-use
          expense tracker! For more details or to start tracking your expenses,
          visit the platform{" "}
          <Link
            href="https://the-expense-tracker-pro.netlify.app/"
            target="_blank"
            className={styles.expenseTrackVisitLink}
          >
            Here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
