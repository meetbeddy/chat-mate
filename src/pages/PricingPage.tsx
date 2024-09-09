

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
        <div className="min-h-screen bg-lightGray flex flex-col items-center justify-center py-10">
            <h1 className="text-4xl font-bold mb-8 text-darkBlue">Choose Your Plan</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="card bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-6"
                    >
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold text-darkBlue mb-2">{plan.title}</h2>
                            <p className="text-3xl font-bold text-pink mb-4">{plan.price}</p>
                            <ul className="list-disc list-inside mb-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-gray-600">{feature}</li>
                                ))}
                            </ul>
                            <div className="card-actions">
                                <button className="btn btn-primary w-full py-2">Upgrade</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingPage;
