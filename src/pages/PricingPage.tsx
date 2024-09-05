
const PricingPage = () => {
    const pricingPlans = [
        {
            title: 'Free Plan',
            price: '$0',
            features: ['5 API calls per month', 'Basic support'],
            limit: 5,
        },
        {
            title: 'Pro Plan',
            price: '$10/month',
            features: ['Unlimited API calls', 'Priority support', 'Advanced analytics'],
            limit: 'Unlimited',
        },
        {
            title: 'Enterprise Plan',
            price: 'Custom Pricing',
            features: ['Unlimited API calls', 'Dedicated support', 'Custom integrations'],
            limit: 'Unlimited',
        },
    ];

    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-10">Choose Your Plan</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="card w-full bg-white shadow-lg hover:shadow-2xl transition duration-300"
                    >
                        <div className="card-body">
                            <h2 className="card-title text-xl">{plan.title}</h2>
                            <p className="text-3xl font-semibold">{plan.price}</p>
                            <ul className="my-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary w-full">Upgrade</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
