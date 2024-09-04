import './App.css'

function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">Tailwind CSS is working!</h1>
      </div>
      <div className="p-4">
        <button className="btn btn-primary">Primary Button</button>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>Card content goes here.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
