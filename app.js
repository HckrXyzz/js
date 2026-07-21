const app = document.getElementById("app");
app.classList="min-h-screen bg-gray-800 text-gray-200 min-w-md";
const script = document.createElement("script");
const header = document.createElement("header");
const main = document.createElement("main");
main.classList="mt-16 ml-64 bg-gray-800 h-screen p-4 w-full";
const dashboard = document.createElement("div");
dashboard.id="dashboard";
dashboard.classList="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto";
dashboard.innerHTML=`
      <div class="mb-8 animate-fade-in">
        <div class="relative overflow-hidden rounded-2xl gradient-bg-dark p-8 sm:p-12 text-white shadow-2xl shadow-indigo-500/10">
          <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
          </div>
          <div class="relative z-10">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Welcome to Nexus</h1>
            <p class="text-lg text-indigo-100 mb-6 max-w-2xl">Build, manage, and scale your SaaS platform with our powerful dashboard and automation tools.</p>
            <div class="flex flex-wrap gap-3">
              <button class="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 shadow-xl shadow-white/20">Get Started</button>
              <button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95">Watch Demo</button>
            </div>
          </div>
          <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div class="absolute -left-10 -top-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 card-hover shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-950/50 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/50 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <h3 class="text-2xl font-bold mb-1">24,521</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Total Users</p>
        </div>

        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 card-hover shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-950/50 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/50 px-2 py-1 rounded-full">+8.2%</span>
          </div>
          <h3 class="text-2xl font-bold mb-1">$84,320</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Revenue</p>
        </div>

        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 card-hover shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <span class="text-xs font-medium text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-950/50 px-2 py-1 rounded-full">-3.1%</span>
          </div>
          <h3 class="text-2xl font-bold mb-1">1,429</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Active Projects</p>
        </div>

        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 card-hover shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/50 px-2 py-1 rounded-full">+23.4%</span>
          </div>
          <h3 class="text-2xl font-bold mb-1">98.2%</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">Satisfaction</p>
        </div>
      </div>

      <!-- Content Sections -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div id="analytics" class="lg:col-span-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-bold">Analytics Overview</h2>
            <select class="bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/60 transition-all duration-200">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div class="h-64 flex items-center justify-center bg-slate-50/80 dark:bg-slate-800/50 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
            <div class="text-center">
              <svg class="w-16 h-16 mx-auto mb-4 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <p class="text-slate-500 dark:text-slate-400 text-sm">Chart visualization here</p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 shadow-sm">
          <h2 class="text-xl font-bold mb-6">Recent Activity</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">AK</div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate">Alex Kim created a new project</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">2 minutes ago</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">SM</div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate">Sarah Miller updated analytics</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">15 minutes ago</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">JD</div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate">John Doe completed task</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">1 hour ago</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">RB</div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium truncate">Robert Brown joined team</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div id="projects" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 shadow-sm mb-8">
        <h2 class="text-xl font-bold mb-6">Active Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="border border-slate-200/70 dark:border-slate-700/70 rounded-lg p-4 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 cursor-pointer group bg-white/50 dark:bg-slate-800/30 hover:shadow-md">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/50 px-2 py-1 rounded-full">Active</span>
            </div>
            <h3 class="font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Mobile App Redesign</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">UI/UX overhaul for iOS and Android</p>
            <div class="flex items-center justify-between">
              <div class="flex -space-x-2">
                <div class="w-7 h-7 rounded-full bg-indigo-500 border-2 border-white dark:border-slate-900"></div>
                <div class="w-7 h-7 rounded-full bg-purple-500 border-2 border-white dark:border-slate-900"></div>
                <div class="w-7 h-7 rounded-full bg-pink-500 border-2 border-white dark:border-slate-900"></div>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400">75% done</span>
            </div>
          </div>

          <div class="border border-slate-200/70 dark:border-slate-700/70 rounded-lg p-4 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 cursor-pointer group bg-white/50 dark:bg-slate-800/30 hover:shadow-md">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/50 px-2 py-1 rounded-full">Planning</span>
            </div>
            <h3 class="font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">API Integration</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Third-party service integration</p>
            <div class="flex items-center justify-between">
              <div class="flex -space-x-2">
                <div class="w-7 h-7 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900"></div>
                <div class="w-7 h-7 rounded-full bg-cyan-500 border-2 border-white dark:border-slate-900"></div>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400">30% done</span>
            </div>
          </div>

          <div class="border border-slate-200/70 dark:border-slate-700/70 rounded-lg p-4 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 cursor-pointer group bg-white/50 dark:bg-slate-800/30 hover:shadow-md">
            <div class="flex items-start justify-between mb-3">
              <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span class="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/50 px-2 py-1 rounded-full">Review</span>
            </div>
            <h3 class="font-semibold mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Security Audit</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">Platform security assessment</p>
            <div class="flex items-center justify-between">
              <div class="flex -space-x-2">
                <div class="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></div>
                <div class="w-7 h-7 rounded-full bg-teal-500 border-2 border-white dark:border-slate-900"></div>
                <div class="w-7 h-7 rounded-full bg-green-500 border-2 border-white dark:border-slate-900"></div>
                <div class="w-7 h-7 rounded-full bg-lime-500 border-2 border-white dark:border-slate-900"></div>
              </div>
              <span class="text-xs text-slate-500 dark:text-slate-400">90% done</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section (anchor) -->
      <div id="team" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 shadow-sm mb-8">
        <h2 class="text-xl font-bold mb-6">Team Members</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-slate-50/80 dark:bg-slate-800/50 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex-shrink-0"></div>
              <div>
                <p class="font-medium">Alex Kim</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">Product Designer</p>
              </div>
              <span class="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950/50 px-3 py-1 rounded-full">Online</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex-shrink-0"></div>
              <div>
                <p class="font-medium">Sarah Miller</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">Frontend Developer</p>
              </div>
              <span class="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">Away</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Editor / Quick Actions -->
      <div id="editor" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/70 dark:border-slate-800/70 shadow-sm mb-8">
        <h2 class="text-xl font-bold mb-6">Quick Actions</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button class="p-4 border border-slate-200/70 dark:border-slate-700/70 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/30 transition-all duration-200 text-left group">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <p class="text-sm font-medium">Create</p>
          </button>
          <button class="p-4 border border-slate-200/70 dark:border-slate-700/70 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/30 transition-all duration-200 text-left group">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>
            <p class="text-sm font-medium">Import</p>
          </button>
          <button class="p-4 border border-slate-200/70 dark:border-slate-700/70 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/30 transition-all duration-200 text-left group">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
            </svg>
            <p class="text-sm font-medium">Export</p>
          </button>
          <button class="p-4 border border-slate-200/70 dark:border-slate-700/70 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/30 transition-all duration-200 text-left group">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <p class="text-sm font-medium">Settings</p>
          </button>
        </div>
      </div>`;









const aside = document.createElement("aside");
aside.classList="fixed top-0 left-0 h-full w-72 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-r border-slate-200/70 dark:border-slate-800/70 z-50 transform -translate-x-full transition-transform duration-300 ease-in-out shadow-xl";
aside.innerHtml=` <div class="flex flex-col h-full">
      <!-- Sidebar Header -->
      <div class="flex items-center justify-between p-6 border-b border-slate-200/70 dark:border-slate-800/70">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span class="text-xl font-bold gradient-text">Nexus</span>
        </div>
        <button id="sidebar-close" class="p-2 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-all duration-200 lg:hidden" aria-label="Close sidebar">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Sidebar Navigation -->
      <nav class="flex-1 overflow-y-auto sidebar-scroll p-4">
        <div class="space-y-1">
          <p class="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Main</p>

          <a href="#dashboard" class="nav-link active flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-medium transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            Dashboard
          </a>

          <a href="#analytics" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Analytics
          </a>

          <a href="#projects" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            Projects
            <span class="ml-auto bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs px-2 py-0.5 rounded-full font-medium">12</span>
          </a>

          <a href="#team" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            Team
          </a>

          <a href="#calendar" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Calendar
          </a>
        </div>

        <div class="mt-8 space-y-1">
          <p class="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Tools</p>

          <a href="#editor" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
            Editor
          </a>

          <a href="#automations" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Automations
          </a>

          <a href="#integrations" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
            Integrations
          </a>
        </div>

        <div class="mt-8 space-y-1">
          <p class="px-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Settings</p>

          <a href="#settings" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Settings
          </a>

          <a href="#help" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-200 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Help & Support
          </a>
        </div>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-slate-200/70 dark:border-slate-800/70">
        <div class="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-4 border border-indigo-500/20">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>
            <span class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Pro Plan</span>
          </div>
          <p class="text-xs text-slate-600 dark:text-slate-400 mb-3">Upgrade to unlock all features</p>
          <button class="w-full gradient-bg hover:opacity-90 text-white text-sm py-2 rounded-lg font-medium transition-all duration-200 shadow-md shadow-indigo-500/20">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>`;


const footer = document.createElement("footer");
footer.id="footer";
footer.classList="fixed bottom-0 left-0 h-16 right-0 z-50";
const footerEl = document.createElement("div");
footerEl.classList="flex justify-between items-center bg-gray-700 w-full p-2 ";
footerEl.innerHTML=`<div class="text-center text-xs text-slate-400 border-t border-slate-200/50 dark:border-slate-800/50 pt-6 mt-6">
      <span class="font-mono">🔐 Base URL: https://api.247cs.live</span> · <span class="font-mono">Bearer token active</span> · organized with ❤️
    </div>`;


header.id="header";
header.classList ="fixed top-0 left-0 h-16 right-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm shadow-black backdrop-blur bg-slate-900";
header.innerHTML= `<div class="px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-4">
          <button id="sidebar-toggle" class="p-2 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-all duration-200 active:scale-95 shadow-sm" aria-label="Toggle sidebar">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-xl font-bold gradient-text hidden sm:block">Nexus</span>
          </div>
        </div>
        <div class="flex-1 max-w-2xl mx-4 hidden md:block">
          <div class="relative search-glow transition-all duration-300 rounded-xl">
            <input type="text" id="search-input" placeholder="Search anything..." class="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/60 dark:focus:ring-indigo-400/60 transition-all duration-300 backdrop-blur-sm">
            <svg class="w-5 h-5 absolute left-3 top-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center gap-2 sm:gap-3">
          <button id="theme-toggle" class="p-2.5 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-all duration-200 active:scale-95" aria-label="Toggle theme">
            <svg id="sun-icon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg id="moon-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>

          <button id="new-item-btn" class="gradient-bg hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 shadow-lg shadow-indigo-500/30 hidden sm:flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            New Item
          </button>

          <button class="relative p-2 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-all duration-200" aria-label="Notifications">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-900"></span>
          </button>

          <div class="w-9 h-9 rounded-full gradient-bg flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25">
            JD
          </div>
        </div>
      </div>
      <div class="md:hidden pb-3 pt-1 w-full">
        <div class="relative search-glow transition-all duration-300 rounded-xl">
          <input type="text" placeholder="Search..." class="w-full pl-10 pr-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/60 transition-all duration-300 backdrop-blur-sm">
          <svg class="w-5 h-5 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>`;
footer.append(footerEl);
main.append(dashboard);
app.append(header,main,footer,aside);
