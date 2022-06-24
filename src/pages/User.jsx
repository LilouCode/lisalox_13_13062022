import Account from "../components/Account";

function User() {
  return (
    <main className="main bg-dark">
      <div class="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
      <Account
        title="Argent Bank Checking (x8349)"
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
      <Account
        title="Argent Bank Checking (x8349)"
        amount={"$2,082.79"}
        description={"Available Balance"}
      />
    </main>
  );
}
export default User;
