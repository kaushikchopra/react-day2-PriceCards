import './App.css';
import './PriceCards.css';

const priceCardsData = [
  {
    title: 'Free',
    price: '$0/month',
    features: [
      { text: 'Single User', available: true },
      { text: '50GB Storage', available: true },
      { text: 'Unlimited Public Projects', available: true },
      { text: 'Community Access', available: false },
      { text: 'Unlimited Private Projects', available: false },
      { text: 'Dedicated Phone Support', available: false },
      { text: 'Free Sub Domain', available: false },
      { text: 'Monthly Status Reports', available: false }
    ]
  },
  {
    title: 'Plus',
    price: '$9/month',
    features: [
      { text: 'Single User', available: true },
      { text: '50GB Storage', available: true },
      { text: 'Unlimited Public Projects', available: true },
      { text: 'Community Access', available: true },
      { text: 'Unlimited Private Projects', available: true },
      { text: 'Dedicated Phone Support', available: true },
      { text: 'Free Sub Domain', available: true },
      { text: 'Monthly Status Reports', available: false }
    ]
  },
  {
    title: 'Pro',
    price: '$49/month',
    features: [
      { text: 'Single User', available: true },
      { text: '50GB Storage', available: true },
      { text: 'Unlimited Public Projects', available: true },
      { text: 'Community Access', available: true },
      { text: 'Unlimited Private Projects', available: true },
      { text: 'Dedicated Phone Support', available: true },
      { text: 'Free Sub Domain', available: true },
      { text: 'Monthly Status Reports', available: true }
    ]
  },
];

function PriceCard({ title, price, features }) {
  return (
    // <div className="card-deck">
    <div className="card mx-auto my-4">
      <div className="price-card card-body">
        <div className="card-header">
          <h6 className="card-title text-center mb-2">{title}</h6>
          <h2 className="card-subtitle text-center price">{price}</h2>
        </div>
        <ul className="card-text features">
          {features.map((feature, index) => (<li
            key={index}
            className={feature.available ? 'available' : 'disabled'} >
            {feature.available ? '✔' : '✘'} {feature.text}
          </li>))}
        </ul>
        <div className="text-center">
          <button className="btn btn-primary buy-button" type="button">Buy Now</button>
        </div>
      </div>
    </div>
    // </div>
  );

}

function App() {
  return (
    <div className="container">
      <h1 className="text-center text-white mt-4">Price List</h1>
      <p className="text-center text-white">Choose the right pricing for you and get started working on your project</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {priceCardsData.map((card, index) => (
          <div key={index} className="col">
            <PriceCard
              key={index}
              title={card.title}
              price={card.price}
              features={card.features}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
