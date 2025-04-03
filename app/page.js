import SignInButton from '@/components/auth/SignInButton';

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="text-xl font-medium text-black">GoMinimo</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-gray-900 hover:text-gray-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-900 hover:text-gray-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-900 hover:text-gray-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-900 hover:text-gray-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-900 hover:text-gray-600 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <SignInButton />
          </div> 
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-[42px] md:text-[56px] font-bold leading-[1.1] text-[#2D3442] mb-6">
            Money Made Simple—Because Adulting Is Hard Enough
          </h1>
          
          <p className="text-[#6B7280] text-xl mb-12 max-w-[540px]">
            A finance tracker so simple, your wallet will thank you (and so will future you)
          </p>
          
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#E5F5EC] flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#20B15A]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xl text-[#4B5563]">Bank Sync Made Easy – Securely connect your accounts for real-time tracking</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#E5F5EC] flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#20B15A]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xl text-[#4B5563]">Smart Categorization – Transactions auto-sorted, so you don't have to</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#E5F5EC] flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#20B15A]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xl text-[#4B5563]">Budget Like a Pro – Set spending goals and stay in control</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#E5F5EC] flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-[#20B15A]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xl text-[#4B5563]">Stay on Track – Get notifications before you overspend</span>
            </div>
          </div>

          <button className="px-8 py-4 bg-[#20B15A] text-white rounded-xl text-xl font-medium hover:bg-[#1a9049] transition-colors">
            Try it for free
          </button>
        </div>

        {/* Right Column - Empty for now */}
        <div className="relative">
          {/* Content will be added later */}
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="container mx-auto px-6 mb-24">
        {/* Preview Image */}
        <div className="relative w-full h-[600px] bg-gray-50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-16">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
            [Dashboard Preview]
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 text-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-medium text-black ">10,000+</span>
            <span className="text-gray-600">active users</span>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-medium text-black">$500M+</span>
            <span className="text-gray-600">tracked</span>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-medium text-black">4.9/5</span>
            <span className="text-gray-600">app store rating</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gray-200">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="text-[40px] font-medium mb-4 text-black">
              Everything you need, nothing you don't
            </h2>
            <p className="text-xl text-black">
              Our minimal finance tracker includes just the essential features to help you manage your money effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-10 h-10 mb-6 text-black">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M3 13h18v8H3v-8zm0-10h18v8H3V3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Expense Tracking</h3>
              <p className="text-black">
                Automatically categorize and track your expenses across all your accounts in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-10 h-10 mb-6 text-black">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Budget Planning</h3>
              <p className="text-black">
                Create custom budgets for different categories and monitor your spending against them.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-10 h-10 mb-6 text-black">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Financial Insights</h3>
              <p className="text-black">
                Get personalized insights about your spending habits and areas where you can save.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-10 h-10 mb-6 text-black">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Bill Reminders</h3>
              <p className="text-black">
                Never miss a payment with automated bill tracking and payment reminders.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-10 h-10 mb-6 text-black">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Savings Goals</h3>
              <p className="text-black">
                Set and track progress towards your savings goals for big purchases or events.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-10 h-10 mb-6 text-black">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3 text-black">Income Tracking</h3>
              <p className="text-black">
                Track all sources of income and understand your cash flow patterns over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="w-full bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-medium mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-400">
              Get started in minutes with our simple four-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div>
              <div className="text-4xl font-light text-gray-600 mb-6">01</div>
              <h3 className="text-xl font-medium mb-4">Connect your accounts</h3>
              <p className="text-gray-400">
                Securely link your bank accounts, credit cards, and other financial accounts to automatically import transactions.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-4xl font-light text-gray-600 mb-6">02</div>
              <h3 className="text-xl font-medium mb-4">Categorize transactions</h3>
              <p className="text-gray-400">
                Our system automatically categorizes your spending, but you can customize categories to match your specific needs.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-4xl font-light text-gray-600 mb-6">03</div>
              <h3 className="text-xl font-medium mb-4">Set budgets & goals</h3>
              <p className="text-gray-400">
                Create monthly budgets for different spending categories and set savings goals for future purchases.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <div className="text-4xl font-light text-gray-600 mb-6">04</div>
              <h3 className="text-xl font-medium mb-4">Track & analyze</h3>
              <p className="text-gray-400">
                Monitor your progress with visual reports and get personalized insights to improve your financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-medium mb-4 text-black">
              What our users say
            </h2>
            <p className="text-xl text-black">
              Join thousands of people who have transformed their financial habits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="flex mb-4">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-black italic mb-8">
                "I finally have a clear picture of where my money is going each month. The minimal design helps me focus on what's important."
              </p>
              <div>
                <p className="font-medium text-black">Sarah K.</p>
                <p className="text-black">Freelance Designer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="flex mb-4">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-black italic mb-8">
                "This app helped me save an extra $450 in my first month just by making my spending habits more visible. Couldn't recommend it more."
              </p>
              <div>
                <p className="font-medium text-black">James T.</p>
                <p className="text-black">Software Engineer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <div className="flex mb-4">
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <svg viewBox="0 0 20 20" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <p className="text-black italic mb-8">
                "I've tried many finance apps, but this one strikes the perfect balance between functionality and simplicity. It doesn't overwhelm me with features I don't need."
              </p>
              <div>
                <p className="font-medium text-black">Maya R.</p>
                <p className="text-black">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full bg-gray-200 py-24" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-medium mb-4 text-black">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-black">
              Choose the plan that fits your needs. All plans come with a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-medium mb-4 text-black">Free</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-medium text-black">$0</span>
                <span className="text-gray-600">/forever</span>
              </div>
              <p className="text-gray-600 mb-8">Essential features for personal finance tracking</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Connect up to 2 accounts</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Basic expense categorization</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Monthly budget limits</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">30-day transaction history</span>
                </li>
              </ul>

              <button className="w-full py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-black">
                Get started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-2xl border-2 border-black relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-medium mb-4 text-black">Premium</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-medium text-black">$9</span>
                <span className="text-gray-600">/per month</span>
              </div>
              <p className="text-gray-600 mb-8">Advanced features for serious money management</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Connect unlimited accounts</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Custom categories & tags</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Advanced budget planning</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Unlimited transaction history</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Detailed financial reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Savings goals & tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Email & mobile notifications</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
                Start free trial
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-medium mb-4 text-black">Family</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-medium text-black">$15</span>
                <span className="text-gray-600">/per month</span>
              </div>
              <p className="text-gray-600 mb-8">Manage finances together with your family</p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">All Premium features</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Up to 5 user accounts</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Shared household expenses</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Bill splitting features</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Family savings goals</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Customized permissions</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-black">Priority support</span>
                </li>
              </ul>

              <button className="w-full py-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-black">
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-24" id="faq">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-medium mb-4 text-black">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our finance tracker.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto space-y-4">
            {/* Question 1 */}
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h3 className="text-xl font-medium text-black">Is my financial data secure?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                Yes, we take security seriously. We use bank-level 256-bit encryption to protect your data, and we never store your bank credentials. Our systems are regularly audited by independent security firms.
              </div>
            </details>

            {/* Question 2 */}
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h3 className="text-xl font-medium text-black">Can I import data from other finance apps?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                Yes, we support importing data from most major finance apps and banks. You can import transactions, categories, and budgets to get started quickly.
              </div>
            </details>

            {/* Question 3 */}
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h3 className="text-xl font-medium text-black">How do I connect my bank accounts?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                Simply select your bank from our list of supported institutions and follow the secure authentication process. We use Plaid to ensure secure connections with thousands of banks worldwide.
              </div>
            </details>

            {/* Question 4 */}
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h3 className="text-xl font-medium text-black">Do you support international banks and currencies?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                Yes, we support banks and currencies from over 100 countries. You can track multiple currencies and see automatic conversions based on current exchange rates.
              </div>
            </details>

            {/* Question 5 */}
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h3 className="text-xl font-medium text-black">Can I cancel my subscription anytime?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to premium features until the end of your current billing period.
              </div>
            </details>

            {/* Question 6 */}
            <details className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none py-4">
                <h3 className="text-xl font-medium text-black">Is there a mobile app available?</h3>
                <span className="transform group-open:rotate-180 transition-transform">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                Yes, we have native apps for both iOS and Android devices. You can download them from the App Store or Google Play Store and sync your data across all your devices.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black text-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[40px] font-medium mb-4">
              Start your financial journey today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of users who have taken control of their finances with our minimal finance tracker.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                Get started for free
              </button>
              <button className="px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition-colors">
                View demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg"></div>
                <span className="text-xl font-medium text-black">Minimo</span>
              </div>
              <p className="text-gray-600">
                A minimal finance tracker that helps you understand and improve your financial health.
              </p>
            </div>

            {/* Product Links */}
            <div className="md:col-span-2 md:col-start-6">
              <h3 className="font-medium text-black mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-600 hover:text-black transition-colors">How it works</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-gray-600 hover:text-black transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="md:col-span-2">
              <h3 className="font-medium text-black mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-600 hover:text-black transition-colors">About us</a></li>
                <li><a href="#blog" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#careers" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-2">
              <h3 className="font-medium text-black mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#cookies" className="text-gray-600 hover:text-black transition-colors">Cookie Policy</a></li>
                <li><a href="#security" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-100">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2025 Minimo Finance. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#twitter" className="text-gray-600 hover:text-black transition-colors">Twitter</a>
              <a href="#linkedin" className="text-gray-600 hover:text-black transition-colors">LinkedIn</a>
              <a href="#instagram" className="text-gray-600 hover:text-black transition-colors">Instagram</a>
              <a href="#facebook" className="text-gray-600 hover:text-black transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
