import Container from '../UI/Containter';
import '../../css/Main.scss';

export const PrivacyPolicy = () => {
  return (
    <Container className='privacy-policy-page'>
      <h1>Privacy Policy</h1>
      <p>This website uses cookies to improve your user experience while you navigate through the website. We also use third-party cookies that help us analyze and understand how you use this website.
        By continuing to use this website you agree to the use of these technologies.</p>
      <p>
        If you place an order at Idea Consult, we ask for your name, billing address, e-mail address, credit card number, card security code, and expiration date. We collect the information to:
      </p>
      <ul>
        <li>Give you access to secure pages on our site</li>
        <li>Verify your identity for payment authorization</li>
        <li>Notify you of login data to access your purchases</li>
        <li>Contact you regarding your order status or in the case of a problem with your order</li>
        <li>Send you helpful information from Idea Consult, such as announcements of new releases and free reports.</li>
      </ul>
      <p>
        Your personal information will be shared with your credit card company and our merchant bank only to the extent that it is required to process your payment. Otherwise, we will not sell or distribute personal information you may give us. If you choose to input data from your business into your online profile, that information is maintained on a secure page accessible only with your username and password. It is never accessed, reviewed, or otherwise utilized by Idea Consult for any purpose.
      </p>
      <p>
        If the personal information we’ve gathered from you changes (such as your name, e-mail address, or street address) or you no longer desire to be registered with us at the end of your subscription period, we will correct, update, or remove any personal data on request.
      </p>
    </Container>
  );
}

export default PrivacyPolicy;
