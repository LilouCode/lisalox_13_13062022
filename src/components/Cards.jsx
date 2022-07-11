import Card from "./Card";
import iconChat from "../assets/icons/iconChat.png";
import iconMoney from "../assets/icons/iconMoney.png";
import iconSecurity from "../assets/icons/iconSecurity.png";
function Cards() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Card
        icon={iconChat}
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
      />
      <Card
        icon={iconMoney}
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <Card
        icon={iconSecurity}
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money
            is always safe."
      />
    </section>
  );
}
export default Cards;
