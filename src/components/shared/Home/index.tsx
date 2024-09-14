import Image from 'next/image';
import Head from 'next/head';
import { Container } from './styled';

const Home = () => {
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Sugar Defender 24</title>
        <style>{`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }

          header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 20px 0;
          }

          header h1 {
            margin: 0;
            font-size: 2.5em;
          }

          header p {
            margin-top: 5px;
            font-size: 1.2em;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .hero {
            background-color: #fff;
            border-radius: 8px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .hero img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 20px;
          }

          .hero h2 {
            font-size: 2.5em;
            color: #333;
          }

          .hero p {
            font-size: 1.2em;
            margin: 20px 0;
          }

          .hero .cta {
            background-color: #e63946;
            color: #fff;
            padding: 15px 25px;
            text-decoration: none;
            font-size: 1.5em;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .hero .cta:hover {
            background-color: #d62828;
          }

          .features {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
            flex-wrap: wrap;
          }

          .features .feature {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            width: 30%;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }

          .features .feature h3 {
            color: #333;
          }

          footer {
            text-align: center;
            padding: 20px 0;
            background-color: #333;
            color: #fff;
            margin-top: 40px;
          }

          footer p {
            margin: 0;
          }

          footer a {
            color: #e63946;
            text-decoration: none;
          }

          footer a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .hero h2 {
              font-size: 2em;
            }

            .hero p {
              font-size: 1em;
            }

            .hero .cta {
              font-size: 1.2em;
              padding: 10px 20px;
            }

            .features .feature {
              width: 45%;
            }

            p {
              color: #333;
            }
          }

          @media (max-width: 480px) {
            .hero h2 {
              font-size: 1.5em;
            }

            .hero p {
              font-size: 0.9em;
            }

            .hero .cta {
              font-size: 1em;
              padding: 8px 15px;
            }

            .features .feature {
              width: 100%;
            }
          }
        `}</style>
      </Head>

      <header>
        <h1>Sugar Defender 24</h1>
        <p>Protect your health by controlling your blood sugar levels</p>
      </header>

      <div className="container">
        <div className="hero">
          <Image
            src="https://sugardefender24.com/assets/img/1bottle-fruits.webp"
            alt="Sugar Defender Product Image"
            width={400}
            height={400}
            layout="responsive"
            style={{
              maxWidth: '400px',
              width: '100%',
            }}
          />
          <h2>Control your blood sugar levels naturally!</h2>
          <p>
            Discover how to maintain your well-being with a safe and effective
            solution to control blood sugar levels.
          </p>
          <a
            href="https://f0adb814r-t9w8ml61noe9lk77.hop.clickbank.net"
            className="cta"
          >
            Order Now
          </a>
        </div>

        <div className="features">
          <div className="feature">
            <h3>Natural Ingredient</h3>
            <p>
              Our product is made with 100% natural ingredients, free of
              chemical additives.
            </p>
          </div>
          <div className="feature">
            <h3>Scientifically Proven</h3>
            <p>
              Studies prove the effectiveness of our product in controlling
              blood sugar levels.
            </p>
          </div>
          <div className="feature">
            <h3>Fast Delivery</h3>
            <p>
              Receive the product directly at your doorstep in just a few days.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <p>
          &copy; 2024 Sugar Defender 24 |
          <a href="https://sugardefender24.com/info/return-policy.html">
            Privacy Policy
          </a>
        </p>
      </footer>
    </Container>
  );
};

export default Home;
