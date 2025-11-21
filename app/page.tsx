export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <svg 
                className="w-12 h-12" 
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Chest base */}
                <path 
                  d="M4 12h16v6H4v-6z" 
                  fill="#8B4513" 
                  stroke="#654321" 
                  strokeWidth="1.2"
                />
                {/* Chest front edge */}
                <path 
                  d="M4 12h16l-0.5 0.5H4.5L4 12z" 
                  fill="#A0522D" 
                  opacity="0.7"
                />
                {/* Open lid - angled back */}
                <path 
                  d="M4 12L12 6L20 12L12 9L4 12Z" 
                  fill="#A0522D" 
                  stroke="#654321" 
                  strokeWidth="1.2"
                />
                {/* Lid inner side */}
                <path 
                  d="M12 6L20 12L20 10L12 6Z" 
                  fill="#8B4513" 
                  opacity="0.8"
                />
                {/* Lid highlight */}
                <path 
                  d="M4 12L12 6L20 12L12 8L4 12Z" 
                  fill="#CD853F" 
                  opacity="0.5"
                />
                
                {/* Gold coins overflowing from chest */}
                <circle cx="7" cy="10" r="1.5" fill="#FFD700" stroke="#FFA500" strokeWidth="0.4"/>
                <circle cx="7" cy="10" r="0.9" fill="#FFED4E" opacity="0.9"/>
                <circle cx="7" cy="10" r="0.4" fill="#FFF" opacity="0.7"/>
                
                <circle cx="12" cy="9" r="1.8" fill="#FFD700" stroke="#FFA500" strokeWidth="0.4"/>
                <circle cx="12" cy="9" r="1.1" fill="#FFED4E" opacity="0.9"/>
                <circle cx="12" cy="9" r="0.5" fill="#FFF" opacity="0.7"/>
                
                <circle cx="17" cy="10" r="1.5" fill="#FFD700" stroke="#FFA500" strokeWidth="0.4"/>
                <circle cx="17" cy="10" r="0.9" fill="#FFED4E" opacity="0.9"/>
                <circle cx="17" cy="10" r="0.4" fill="#FFF" opacity="0.7"/>
                
                {/* Coins inside chest */}
                <circle cx="7.5" cy="14" r="1.4" fill="#FFD700" stroke="#FFA500" strokeWidth="0.3"/>
                <circle cx="7.5" cy="14" r="0.8" fill="#FFED4E" opacity="0.8"/>
                
                <circle cx="12" cy="15" r="1.6" fill="#FFD700" stroke="#FFA500" strokeWidth="0.3"/>
                <circle cx="12" cy="15" r="1" fill="#FFED4E" opacity="0.8"/>
                
                <circle cx="16.5" cy="14" r="1.4" fill="#FFD700" stroke="#FFA500" strokeWidth="0.3"/>
                <circle cx="16.5" cy="14" r="0.8" fill="#FFED4E" opacity="0.8"/>
                
                {/* Gems/jewels sticking out */}
                <path d="M9.5 8L10.5 7L11.5 8L11 9.5L9.5 9.5Z" fill="#FF1493" stroke="#C71585" strokeWidth="0.3"/>
                <path d="M9.5 8L10.5 7L11.5 8L10.5 8.5Z" fill="#FF69B4" opacity="0.7"/>
                
                <path d="M14.5 7.5L15.5 6.5L16.5 7.5L16 9L14.5 9Z" fill="#00CED1" stroke="#008B8B" strokeWidth="0.3"/>
                <path d="M14.5 7.5L15.5 6.5L16.5 7.5L15.5 8Z" fill="#40E0D0" opacity="0.7"/>
                
                {/* Chest lock */}
                <rect x="10.5" y="11.5" width="3" height="2.5" rx="0.4" fill="#654321" stroke="#4A2C2A" strokeWidth="0.5"/>
                <circle cx="12" cy="12.75" r="0.5" fill="#FFD700"/>
                
                {/* Chest straps */}
                <rect x="5.5" y="12.5" width="13" height="1.5" rx="0.3" fill="#654321" opacity="0.8"/>
                <rect x="5.5" y="15.5" width="13" height="1.5" rx="0.3" fill="#654321" opacity="0.8"/>
                
                {/* Corner reinforcements */}
                <path d="M4 12L5 13L4 13Z" fill="#654321" opacity="0.9"/>
                <path d="M20 12L19 13L20 13Z" fill="#654321" opacity="0.9"/>
              </svg>
              <h1 className="text-4xl font-dancing text-amber-600 font-bold">
                Rep Rewards
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">How It Works</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Benefits</a>
              <a href="#get-started" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🎉 Turn Sales into Rewards!
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Reps Deserve More Than Just a Pat on the Back
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transform your top performers into <span className="font-bold text-blue-600">treasure hunters</span>! 
              Every sale unlocks rewards they can actually use. Because let's be honest—who doesn't love a good reward? 
              <span className="block mt-3 text-lg text-gray-600">✨ Seamlessly integrated with VIP Beverage Software ✨</span>
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform">
                Unlock the Treasure 🗝️
              </button>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works (It's Actually Pretty Simple!)
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three steps to turn your sales team into a motivated, reward-hunting powerhouse 🚀
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-blue-600 font-bold text-sm mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Sales Like a Pro</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch those numbers climb in real-time! Our seamless VIP Beverage Software integration means every sale is automatically tracked. 
                No manual entry, no headaches—just pure, beautiful data. 📊
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-amber-300">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-amber-600 font-bold text-sm mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Points Rain Down Like Confetti</h3>
              <p className="text-gray-600 leading-relaxed">
                Every sale = points in the bank! Your reps watch their reward balance grow with each successful deal. 
                It's like a video game, but with real rewards (and better graphics). 
                {/* 🎮💰 */}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="text-purple-600 fontbold text-sm mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shop 'Til They Drop</h3>
              <p className="text-gray-600 leading-relaxed">
                Time to cash in! Your reps browse your curated reward catalog and pick whatever floats their boat. 
                Gift cards, gadgets, experiences—you name it. They earned it, they deserve it! 
                {/* 🛍️✨ */}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Your Business Will Love This
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Spoiler alert: It's not just about the rewards. It's about building a winning team! 🏆
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔥</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Motivation That Actually Works</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Let's be real—everyone works harder when there's something shiny at the end. Your reps will push harder, 
                    sell smarter, and celebrate bigger wins. It's psychology, but make it fun! Plus, happy reps = happy customers = happy you. 😊
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Hassle Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built specifically for VIP Beverage Software, so it just... works. No IT headaches, no complicated setups, 
                    no "wait, what?" moments. Plug it in, turn it on, watch the magic happen. It's that simple! 🪄
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📈</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data That Tells a Story</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get the full picture of who's crushing it and who needs a boost. Our analytics don't just show numbers—they show 
                    opportunities. Spot trends, celebrate wins, and make data-driven decisions like the boss you are! 💼
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎨</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Rewards That Match Your Vibe</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You know your team best. Customize the reward catalog to match your company culture, budget, and what actually gets 
                    your people excited. From tech gadgets to weekend getaways—make it yours! 🎯
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">💰</div>
          <div className="absolute top-20 right-20 text-5xl">🎁</div>
          <div className="absolute bottom-10 left-20 text-4xl">🏆</div>
          <div className="absolute bottom-20 right-10 text-6xl">⭐</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Turn Your Sales Team Into Champions?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Stop settling for "good enough." Let's make your reps feel like the rockstars they are! 
            <span className="block mt-3 font-semibold">Every sale deserves a celebration. 🎉</span>
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all transform">
              Start Rewarding Today 🚀
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all shadow-lg">
              Let's Chat About It 💬
            </button>
          </div>
          {/* <p className="mt-8 text-blue-200 text-sm">
            No credit card required • Set up in minutes • Your reps will thank you
          </p> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg 
                className="w-8 h-8" 
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Chest base */}
                <path 
                  d="M4 12h16v6H4v-6z" 
                  fill="#8B4513" 
                  stroke="#654321" 
                  strokeWidth="1.2"
                />
                {/* Chest front edge */}
                <path 
                  d="M4 12h16l-0.5 0.5H4.5L4 12z" 
                  fill="#A0522D" 
                  opacity="0.7"
                />
                {/* Open lid - angled back */}
                <path 
                  d="M4 12L12 6L20 12L12 9L4 12Z" 
                  fill="#A0522D" 
                  stroke="#654321" 
                  strokeWidth="1.2"
                />
                {/* Lid inner side */}
                <path 
                  d="M12 6L20 12L20 10L12 6Z" 
                  fill="#8B4513" 
                  opacity="0.8"
                />
                {/* Lid highlight */}
                <path 
                  d="M4 12L12 6L20 12L12 8L4 12Z" 
                  fill="#CD853F" 
                  opacity="0.5"
                />
                
                {/* Gold coins overflowing from chest */}
                <circle cx="7" cy="10" r="1.5" fill="#FFD700" stroke="#FFA500" strokeWidth="0.4"/>
                <circle cx="7" cy="10" r="0.9" fill="#FFED4E" opacity="0.9"/>
                <circle cx="7" cy="10" r="0.4" fill="#FFF" opacity="0.7"/>
                
                <circle cx="12" cy="9" r="1.8" fill="#FFD700" stroke="#FFA500" strokeWidth="0.4"/>
                <circle cx="12" cy="9" r="1.1" fill="#FFED4E" opacity="0.9"/>
                <circle cx="12" cy="9" r="0.5" fill="#FFF" opacity="0.7"/>
                
                <circle cx="17" cy="10" r="1.5" fill="#FFD700" stroke="#FFA500" strokeWidth="0.4"/>
                <circle cx="17" cy="10" r="0.9" fill="#FFED4E" opacity="0.9"/>
                <circle cx="17" cy="10" r="0.4" fill="#FFF" opacity="0.7"/>
                
                {/* Coins inside chest */}
                <circle cx="7.5" cy="14" r="1.4" fill="#FFD700" stroke="#FFA500" strokeWidth="0.3"/>
                <circle cx="7.5" cy="14" r="0.8" fill="#FFED4E" opacity="0.8"/>
                
                <circle cx="12" cy="15" r="1.6" fill="#FFD700" stroke="#FFA500" strokeWidth="0.3"/>
                <circle cx="12" cy="15" r="1" fill="#FFED4E" opacity="0.8"/>
                
                <circle cx="16.5" cy="14" r="1.4" fill="#FFD700" stroke="#FFA500" strokeWidth="0.3"/>
                <circle cx="16.5" cy="14" r="0.8" fill="#FFED4E" opacity="0.8"/>
                
                {/* Gems/jewels sticking out */}
                <path d="M9.5 8L10.5 7L11.5 8L11 9.5L9.5 9.5Z" fill="#FF1493" stroke="#C71585" strokeWidth="0.3"/>
                <path d="M9.5 8L10.5 7L11.5 8L10.5 8.5Z" fill="#FF69B4" opacity="0.7"/>
                
                <path d="M14.5 7.5L15.5 6.5L16.5 7.5L16 9L14.5 9Z" fill="#00CED1" stroke="#008B8B" strokeWidth="0.3"/>
                <path d="M14.5 7.5L15.5 6.5L16.5 7.5L15.5 8Z" fill="#40E0D0" opacity="0.7"/>
                
                {/* Chest lock */}
                <rect x="10.5" y="11.5" width="3" height="2.5" rx="0.4" fill="#654321" stroke="#4A2C2A" strokeWidth="0.5"/>
                <circle cx="12" cy="12.75" r="0.5" fill="#FFD700"/>
                
                {/* Chest straps */}
                <rect x="5.5" y="12.5" width="13" height="1.5" rx="0.3" fill="#654321" opacity="0.8"/>
                <rect x="5.5" y="15.5" width="13" height="1.5" rx="0.3" fill="#654321" opacity="0.8"/>
                
                {/* Corner reinforcements */}
                <path d="M4 12L5 13L4 13Z" fill="#654321" opacity="0.9"/>
                <path d="M20 12L19 13L20 13Z" fill="#654321" opacity="0.9"/>
              </svg>
              <h3 className="text-2xl font-bold text-white">Rep Rewards</h3>
            </div>
            <p className="mb-6 text-lg">Empowering beverage companies to reward excellence—one sale at a time! 🥤✨</p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Rep Rewards. All rights reserved. 
              {/* Made with 💙 for beverage companies. */}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

