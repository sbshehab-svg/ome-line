// Supabase Configuration
const SUPABASE_URL = 'https://sosajtahjkfafrrhmkzc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_OjVDNRehcFqxPwsRe7flrQ_KcCOKdYv';
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

const App = {
    state: {
        screen: 'SPLASH',
        isSearching: false,
        isActive: false,
        localStream: null,
        remoteStream: null,
        peer: null,
        currentCall: null,
        myPeerId: null,
        chatTimer: 0,
        timerInterval: null,
        cloudSettings: { baseUserCount: 24812, matchSpeed: 2000, maintMode: false },
        filters: { location: 'All Countries', gender: 'Both', locEmoji: '🌐' },
        countries: [
            { name: "Global", emoji: "🌐" },
            { name: "Afghanistan", emoji: "🇦🇫" }, { name: "Albania", emoji: "🇦🇱" }, { name: "Algeria", emoji: "🇩🇿" },
            { name: "American Samoa", emoji: "🇦🇸" }, { name: "Andorra", emoji: "🇦🇩" }, { name: "Angola", emoji: "🇦🇴" },
            { name: "Anguilla", emoji: "🇦🇮" }, { name: "Antarctica", emoji: "🇦🇶" }, { name: "Antigua and Barbuda", emoji: "🇦🇬" },
            { name: "Argentina", emoji: "🇦🇷" }, { name: "Armenia", emoji: "🇦🇲" }, { name: "Aruba", emoji: "🇦🇼" },
            { name: "Australia", emoji: "🇦🇺" }, { name: "Austria", emoji: "🇦🇹" }, { name: "Azerbaijan", emoji: "🇦🇿" },
            { name: "Bahamas", emoji: "🇧🇸" }, { name: "Bahrain", emoji: "🇧🇭" }, { name: "Bangladesh", emoji: "🇧🇩" },
            { name: "Barbados", emoji: "🇧🇧" }, { name: "Belarus", emoji: "🇧🇾" }, { name: "Belgium", emoji: "🇧🇪" },
            { name: "Belize", emoji: "🇧🇿" }, { name: "Benin", emoji: "🇧🇯" }, { name: "Bermuda", emoji: "🇧🇲" },
            { name: "Bhutan", emoji: "🇧🇹" }, { name: "Bolivia", emoji: "🇧🇴" }, { name: "Bosnia", emoji: "🇧🇦" },
            { name: "Botswana", emoji: "🇧🇼" }, { name: "Brazil", emoji: "🇧🇷" }, { name: "Brunei", emoji: "🇧🇳" },
            { name: "Bulgaria", emoji: "🇧🇬" }, { name: "Burkina Faso", emoji: "🇧🇫" }, { name: "Burundi", emoji: "🇧🇮" },
            { name: "Cambodia", emoji: "🇰🇭" }, { name: "Cameroon", emoji: "🇨🇲" }, { name: "Canada", emoji: "🇨🇦" },
            { name: "Cape Verde", emoji: "🇨🇻" }, { name: "Cayman Islands", emoji: "🇰🇾" }, { name: "Chad", emoji: "🇹🇩" },
            { name: "Chile", emoji: "🇨🇱" }, { name: "China", emoji: "🇨🇳" }, { name: "Colombia", emoji: "🇨🇴" },
            { name: "Comoros", emoji: "🇰🇲" }, { name: "Congo", emoji: "🇨🇬" }, { name: "Costa Rica", emoji: "🇨🇷" },
            { name: "Croatia", emoji: "🇭🇷" }, { name: "Cuba", emoji: "🇨🇺" }, { name: "Cyprus", emoji: "🇨🇾" },
            { name: "Czech Republic", emoji: "🇨🇿" }, { name: "Denmark", emoji: "🇩🇰" }, { name: "Djibouti", emoji: "🇩🇯" },
            { name: "Dominica", emoji: "🇩🇲" }, { name: "Dominican Republic", emoji: "🇩🇴" }, { name: "Ecuador", emoji: "🇪🇨" },
            { name: "Egypt", emoji: "🇪🇬" }, { name: "El Salvador", emoji: "🇸🇻" }, { name: "Estonia", emoji: "🇪🇪" },
            { name: "Ethiopia", emoji: "🇪🇹" }, { name: "Fiji", emoji: "🇫🇯" }, { name: "Finland", emoji: "🇫🇮" },
            { name: "France", emoji: "🇫🇷" }, { name: "Gabon", emoji: "🇬🇦" }, { name: "Gambia", emoji: "🇬🇲" },
            { name: "Georgia", emoji: "🇬🇪" }, { name: "Germany", emoji: "🇩🇪" }, { name: "Ghana", emoji: "🇬🇭" },
            { name: "Greece", emoji: "🇬🇷" }, { name: "Greenland", emoji: "🇬🇱" }, { name: "Grenada", emoji: "🇬🇩" },
            { name: "Guatemala", emoji: "🇬🇹" }, { name: "Guinea", emoji: "🇬🇳" }, { name: "Guyana", emoji: "🇬🇾" },
            { name: "Haiti", emoji: "🇭🇹" }, { name: "Honduras", emoji: "🇭🇳" }, { name: "Hong Kong", emoji: "🇭🇰" },
            { name: "Hungary", emoji: "🇭🇺" }, { name: "Iceland", emoji: "🇮🇸" }, { name: "India", emoji: "🇮🇳" },
            { name: "Indonesia", emoji: "🇮🇩" }, { name: "Iran", emoji: "🇮🇷" }, { name: "Iraq", emoji: "🇮🇶" },
            { name: "Ireland", emoji: "🇮🇪" }, { name: "Israel", emoji: "🇮🇱" }, { name: "Italy", emoji: "🇮🇹" },
            { name: "Jamaica", emoji: "🇯🇲" }, { name: "Japan", emoji: "🇯🇵" }, { name: "Jordan", emoji: "🇯🇴" },
            { name: "Kazakhstan", emoji: "🇰🇿" }, { name: "Kenya", emoji: "🇰🇪" }, { name: "Kuwait", emoji: "🇰🇼" },
            { name: "Kyrgyzstan", emoji: "🇰🇬" }, { name: "Laos", emoji: "🇱🇦" }, { name: "Latvia", emoji: "🇱🇻" },
            { name: "Lebanon", emoji: "🇱🇧" }, { name: "Liberia", emoji: "🇱🇷" }, { name: "Libya", emoji: "🇱🇾" },
            { name: "Lithuania", emoji: "🇱🇹" }, { name: "Luxembourg", emoji: "🇱🇺" }, { name: "Macau", emoji: "🇲🇴" },
            { name: "Madagascar", emoji: "🇲🇬" }, { name: "Malaysia", emoji: "🇲🇾" }, { name: "Maldives", emoji: "🇲🇻" },
            { name: "Mali", emoji: "🇲🇱" }, { name: "Malta", emoji: "🇲🇹" }, { name: "Mexico", emoji: "🇲🇽" },
            { name: "Moldova", emoji: "🇲🇩" }, { name: "Monaco", emoji: "🇲🇨" }, { name: "Mongolia", emoji: "🇲🇳" },
            { name: "Morocco", emoji: "🇲🇦" }, { name: "Myanmar", emoji: "🇲🇲" }, { name: "Namibia", emoji: "🇳🇦" },
            { name: "Nepal", emoji: "🇳🇵" }, { name: "Netherlands", emoji: "🇳🇱" }, { name: "New Zealand", emoji: "🇳🇿" },
            { name: "Nicaragua", emoji: "🇳🇮" }, { name: "Nigeria", emoji: "🇳🇬" }, { name: "Norway", emoji: "🇳🇴" },
            { name: "Oman", emoji: "🇴🇲" }, { name: "Pakistan", emoji: "🇵🇰" }, { name: "Palestine", emoji: "🇵🇸" },
            { name: "Panama", emoji: "🇵🇦" }, { name: "Paraguay", emoji: "🇵🇾" }, { name: "Peru", emoji: "🇵🇪" },
            { name: "Philippines", emoji: "🇵🇭" }, { name: "Poland", emoji: "🇵🇱" }, { name: "Portugal", emoji: "🇵🇹" },
            { name: "Qatar", emoji: "🇶🇦" }, { name: "Romania", emoji: "🇷🇴" }, { name: "Russia", emoji: "🇷🇺" },
            { name: "Saudi Arabia", emoji: "🇸🇦" }, { name: "Senegal", emoji: "🇸🇳" }, { name: "Serbia", emoji: "🇷🇸" },
            { name: "Singapore", emoji: "🇸🇬" }, { name: "Slovakia", emoji: "🇸🇰" }, { name: "Slovenia", emoji: "🇸🇮" },
            { name: "South Africa", emoji: "🇿🇦" }, { name: "South Korea", emoji: "🇰🇷" }, { name: "Spain", emoji: "🇪🇸" },
            { name: "Sri Lanka", emoji: "🇱🇰" }, { name: "Sudan", emoji: "🇸🇩" }, { name: "Sweden", emoji: "🇸🇪" },
            { name: "Switzerland", emoji: "🇨🇭" }, { name: "Syria", emoji: "🇸🇾" }, { name: "Taiwan", emoji: "🇹🇼" },
            { name: "Tanzania", emoji: "🇹🇿" }, { name: "Thailand", emoji: "🇹🇭" }, { name: "Tunisia", emoji: "🇹🇳" },
            { name: "Turkey", emoji: "🇹🇷" }, { name: "Uganda", emoji: "🇺🇬" }, { name: "Ukraine", emoji: "🇺🇦" },
            { name: "United Arab Emirates", emoji: "🇦🇪" }, { name: "United Kingdom", emoji: "🇬🇧" },
            { name: "United States", emoji: "🇺🇸" }, { name: "Uruguay", emoji: "🇺🇾" }, { name: "Uzbekistan", emoji: "🇺🇿" },
            { name: "Venezuela", emoji: "🇻🇪" }, { name: "Vietnam", emoji: "🇻🇳" }, { name: "Yemen", emoji: "🇾🇪" },
            { name: "Zambia", emoji: "🇿🇲" }, { name: "Zimbabwe", emoji: "🇿🇼" }
        ]
    },

    el: {},

    async init() {
        // Cache DOM elements
        this.el = {
            splash: document.getElementById('splash-screen'),
            home: document.getElementById('home-screen'),
            chat: document.getElementById('chat-screen'),
            bar: document.getElementById('splash-bar'),
            pct: document.getElementById('splash-percent'),
            status: document.getElementById('splash-status'),
            msgs: document.getElementById('chat-messages'),
            input: document.getElementById('message-input'),
            timer: document.getElementById('chat-timer'),
            locText: document.getElementById('partner-location-text'),
            locBadge: document.getElementById('partner-location-badge'),
            overlay: document.getElementById('matching-overlay'),
            ph: document.getElementById('partner-placeholder'),
            scanner: document.getElementById('age-scanner'),
            ageVal: document.getElementById('detect-age-val'),
            localVid: document.getElementById('local-video'),
            remoteVid: document.getElementById('remote-video'),
            modal: document.getElementById('filter-modal'),
            modalTitle: document.getElementById('modal-title'),
            countrySelector: document.getElementById('country-selector'),
            genderSelector: document.getElementById('gender-selector'),
            countryList: document.getElementById('country-list'),
            countrySearch: document.getElementById('country-search')
        };

        if (!this.el.splash || !this.el.home) {
            console.error("Critical elements missing!");
            return;
        }

        // 1. Cloud Sync
        await this.loadCloudSettings();
        await this.checkSuperBan();

        this.bindEvents();
        this.runSplash();
        this.startUserCounter();
        this.setupHiddenAdmin();
        this.initPeer();
    },

    async loadCloudSettings() {
        if (!supabase) return;
        try {
            const { data } = await supabase.from('settings').select('*').single();
            if (data) {
                this.state.cloudSettings = {
                    baseUserCount: data.base_count,
                    matchSpeed: data.match_speed,
                    maintMode: data.maint_mode
                };
            }
        } catch (e) {
            console.log("Supabase not configured or table missing.");
        }
    },

    async checkSuperBan() {
        if (!supabase || !this.state.myPeerId) return;
        const { data } = await supabase.from('bans').select('*').eq('peer_id', this.state.myPeerId).single();
        if (data) this.handleBannedUser();
    },

    handleBannedUser() {
        document.body.innerHTML = `
            <div class="h-[100dvh] flex flex-col items-center justify-center bg-black text-white p-10 text-center">
                <span class="material-symbols-outlined text-red-600 !text-8xl mb-6">gavel</span>
                <h1 class="text-4xl font-black uppercase tracking-tighter mb-4">You are Super Banned</h1>
                <p class="text-slate-500 max-w-xs">Your access to Ome Line has been permanently revoked by the administrator for violating platform community guidelines.</p>
                <div class="mt-10 p-4 border border-red-900/30 bg-red-900/10 rounded-2xl text-[10px] text-red-500 uppercase tracking-widest">
                    System Level Cloud Block Active
                </div>
            </div>
        `;
    },

    initPeer() {
        const config = {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' }
            ]
        };

        this.state.peer = new Peer(config);

        this.state.peer.on('open', id => {
            this.state.myPeerId = id;
            console.log('My Peer ID:', id);
            this.advertisePresence();
        });

        this.state.peer.on('call', call => {
            if (!this.state.localStream) return;
            call.answer(this.state.localStream);
            this.handleCall(call);
        });

        this.state.peer.on('error', err => {
            console.error('Peer error:', err);
            if (err.type === 'peer-unavailable') this.searchStranger();
        });
    },

    async advertisePresence() {
        if (!supabase || !this.state.myPeerId) return;
        try {
            await supabase.from('presence').upsert({
                peer_id: this.state.myPeerId,
                last_seen: new Date().toISOString(),
                is_available: true
            });
        } catch (e) { }
    },

    handleCall(call) {
        this.state.currentCall = call;
        call.on('stream', remoteStream => {
            this.state.remoteStream = remoteStream;
            if (this.el.remoteVid) {
                this.el.remoteVid.srcObject = remoteStream;
                this.el.remoteVid.play().catch(e => console.log(e));
            }
            this.onStrangerConnected();
        });
        call.on('close', () => this.leaveChat());
    },

    onStrangerConnected() {
        this.state.isSearching = false;
        this.el.overlay.style.opacity = '0';
        this.el.overlay.style.pointerEvents = 'none';
        this.el.ph.style.opacity = '0';
        this.el.locBadge.style.opacity = '1';

        const loc = this.state.filters.location === 'Global' ? 'USA' : this.state.filters.location;
        const gen = this.state.filters.gender === 'Both' ? 'Male' : this.state.filters.gender;
        this.el.locText.innerText = `${loc} • ${gen}, 22`;

        this.startTimer();
        setTimeout(() => this.addMsg('Stranger', 'Hey! 👋', false), 1000);
    },

    setupHiddenAdmin() {
        let clicks = 0;
        let lastClick = 0;
        const brand = document.querySelector('header span.text-primary');
        if (!brand) return;
        brand.addEventListener('click', () => {
            const now = Date.now();
            if (now - lastClick < 500) clicks++;
            else clicks = 1;
            lastClick = now;
            if (clicks >= 5) window.location.href = 'admin.html';
        });
    },

    startUserCounter() {
        const span = document.getElementById('user-count');
        if (!span) return;
        const base = this.state.cloudSettings.baseUserCount;
        span.innerText = base.toLocaleString();
        setInterval(() => {
            const current = parseInt(span.innerText.replace(/,/g, ''));
            const next = current + Math.floor(Math.random() * 20 - 10);
            span.innerText = next.toLocaleString();
        }, 5000);
    },

    show(screenEl, animation = null) {
        // Check for Maintenance Mode
        if (screenEl === this.el.chat && localStorage.getItem('maintMode') === 'true') {
            this.sysMsg('System under maintenance. try again later.');
            this.show(this.el.home, 'slide-back');
            return;
        }

        const current = [this.el.splash, this.el.home, this.el.chat].find(s => s.style.display === 'flex' || s.classList.contains('active'));

        if (animation === 'slide' && current && current !== screenEl) {
            current.classList.add('slide-out');
            screenEl.style.display = 'flex';
            screenEl.classList.add('slide-in');
            setTimeout(() => {
                current.style.display = 'none';
                current.classList.remove('slide-out', 'active');
                screenEl.classList.remove('slide-in');
                screenEl.classList.add('active');
            }, 500);
            return;
        }

        if (animation === 'slide-back' && current && current !== screenEl) {
            current.classList.add('slide-out');
            screenEl.style.display = 'flex';
            screenEl.classList.add('slide-in');
            setTimeout(() => {
                current.style.display = 'none';
                current.classList.remove('slide-out', 'active');
                screenEl.classList.remove('slide-in');
                screenEl.classList.add('active');
            }, 500);
            return;
        }

        // Default hide all
        [this.el.splash, this.el.home, this.el.chat].forEach(s => {
            if (s) {
                s.style.display = 'none';
                s.classList.remove('active', 'slide-in', 'slide-out', 'slide-in-back', 'slide-out-back');
            }
        });
        // Show target
        if (screenEl) {
            screenEl.style.display = 'flex';
            screenEl.classList.add('active');
        }
    },

    runSplash() {
        let p = 0;
        const tick = () => {
            const speed = (document.readyState === 'complete') ? 10 : 4;
            p += Math.random() * speed + 2;
            if (p >= 100) {
                p = 100;
                this.el.bar.style.width = '100%';
                this.el.pct.innerText = '100%';
                this.el.status.innerText = 'Welcome to Ome Line!';
                setTimeout(() => this.show(this.el.home), 400);
                return;
            }
            this.el.bar.style.width = p + '%';
            this.el.pct.innerText = Math.round(p) + '%';
            if (p < 50) this.el.status.innerText = 'Securing connection...';
            else this.el.status.innerText = 'Entering platform...';
            setTimeout(tick, 40);
        };
        tick();
    },

    bindEvents() {
        document.querySelectorAll('.filter-card').forEach(card => {
            card.addEventListener('click', () => this.handleFilterClick(card.dataset.filter));
        });

        document.getElementById('close-modal')?.addEventListener('click', () => this.closeModal());
        this.el.modal?.addEventListener('click', (e) => { if (e.target === this.el.modal) this.closeModal(); });

        this.el.countrySearch?.addEventListener('input', (e) => this.renderCountries(e.target.value));

        document.querySelectorAll('.gender-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                const val = opt.dataset.value;
                this.state.filters.gender = val;
                this.updateFilterUI('gender', val);
                this.closeModal();
            });
        });

        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('selected');
                const t = btn.dataset.topic;
                if (this.state.filters.topics.includes(t)) {
                    this.state.filters.topics = this.state.filters.topics.filter(x => x !== t);
                } else {
                    this.state.filters.topics.push(t);
                }
            });
        });

        document.getElementById('start-btn')?.addEventListener('click', () => this.enterChat());
        document.getElementById('send-msg-btn')?.addEventListener('click', () => this.sendMsg());
        this.el.input?.addEventListener('keypress', e => { if (e.key === 'Enter') this.sendMsg(); });
        document.getElementById('next-btn')?.addEventListener('click', () => this.searchStranger());
        document.getElementById('stop-btn')?.addEventListener('click', () => this.leaveChat());

        document.getElementById('report-btn')?.addEventListener('click', () => {
            this.sysMsg('User reported.');
            this.searchStranger();
        });

        document.getElementById('toggle-mic')?.addEventListener('click', e => this.toggleMedia('audio', e.currentTarget));
        document.getElementById('toggle-video')?.addEventListener('click', e => this.toggleMedia('video', e.currentTarget));
    },

    handleFilterClick(type) {
        this.openModal(type);
    },

    openModal(type) {
        this.el.modal.style.display = 'flex';
        this.el.modal.classList.add('flex');
        this.el.modal.classList.remove('hidden');

        if (type === 'location') {
            this.el.modalTitle.innerText = 'Select Country';
            this.el.countrySelector.classList.remove('hidden');
            this.el.genderSelector.classList.add('hidden');
            this.renderCountries();
            setTimeout(() => this.el.countrySearch.focus(), 300);
        } else if (type === 'gender') {
            this.el.modalTitle.innerText = 'Select Gender';
            this.el.countrySelector.classList.add('hidden');
            this.el.genderSelector.classList.remove('hidden');
        }
    },

    closeModal() {
        this.el.modal.classList.add('hidden');
        this.el.modal.classList.remove('flex');
        this.el.modal.style.display = 'none';
        this.el.countrySearch.value = '';
    },

    renderCountries(search = '') {
        const filtered = this.state.countries.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase())
        );

        this.el.countryList.innerHTML = filtered.map(c => {
            const countryCode = c.emoji === "🌐" ? "" : this.getCountryCode(c.name);
            const flagUrl = countryCode ? `https://flagcdn.com/${countryCode.toLowerCase()}.svg` : '';
            const logoHtml = flagUrl ? `<img src="${flagUrl}" class="size-10 rounded-lg object-cover shadow-sm" alt="${c.name}">` : `<div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl">${c.emoji}</div>`;

            return `
                <div class="country-item flex items-center justify-between p-4 rounded-[1.5rem] cursor-pointer text-white/80 font-semibold group" data-country="${c.name}" data-emoji="${c.emoji}">
                    <div class="flex items-center gap-5">
                        ${logoHtml}
                        <span class="text-lg tracking-tight">${c.name}</span>
                    </div>
                    ${this.state.filters.location === c.name ? `
                        <div class="size-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(74,143,227,0.5)]">
                            <span class="material-symbols-outlined text-white text-sm">check</span>
                        </div>
                    ` : `
                        <span class="material-symbols-outlined text-white/10 group-hover:text-primary transition-colors">chevron_right</span>
                    `}
                </div>
            `;
        }).join('');

        this.el.countryList.querySelectorAll('.country-item').forEach(item => {
            item.addEventListener('click', () => {
                const val = item.dataset.country;
                const emoji = item.dataset.emoji;
                this.state.filters.location = val;
                this.state.filters.locEmoji = emoji;

                const countryCode = this.getCountryCode(val);
                const flagUrl = countryCode ? `https://flagcdn.com/${countryCode.toLowerCase()}.svg` : '';

                this.updateFilterUI('location', val, emoji, flagUrl);
                this.closeModal();
                item.classList.add('bg-primary/20');
            });
        });
    },

    getCountryCode(name) {
        const mapping = {
            "Afghanistan": "AF", "Albania": "AL", "Algeria": "DZ", "American Samoa": "AS", "Andorra": "AD", "Angola": "AO", "Anguilla": "AI", "Antarctica": "AQ", "Antigua and Barbuda": "AG", "Argentina": "AR", "Armenia": "AM", "Aruba": "AW", "Australia": "AU", "Austria": "AT", "AZ": "AZ", "Bahamas": "BS", "Bahrain": "BH", "Bangladesh": "BD", "Barbados": "BB", "Belarus": "BY", "Belgium": "BE", "Belize": "BZ", "Benin": "BJ", "Bermuda": "BM", "Bhutan": "BT", "Bolivia": "BO", "Bosnia": "BA", "Botswana": "BW", "Brazil": "BR", "Brunei": "BN", "Bulgaria": "BG", "Burkina Faso": "BF", "Burundi": "BI", "Cambodia": "KH", "Cameroon": "CM", "Canada": "CA", "Cape Verde": "CV", "Cayman Islands": "KY", "Chad": "TD", "Chile": "CL", "China": "CN", "Colombia": "CO", "Comoros": "KM", "Congo": "CG", "Costa Rica": "CR", "Croatia": "HR", "Cuba": "CU", "Cyprus": "CY", "Czech Republic": "CZ", "Denmark": "DK", "Djibouti": "DJ", "Dominica": "DM", "Dominican Republic": "DO", "Ecuador": "EC", "Egypt": "EG", "El Salvador": "SV", "Estonia": "EE", "Ethiopia": "ET", "Fiji": "FJ", "Finland": "FI", "France": "FR", "Gabon": "GA", "Gambia": "GM", "Georgia": "GE", "Germany": "DE", "Ghana": "GH", "Greece": "GR", "Greenland": "GL", "Grenada": "GD", "Guatemala": "GT", "Guinea": "GN", "Guyana": "GY", "Haiti": "HT", "Honduras": "HN", "Hong Kong": "HK", "Hungary": "HU", "Iceland": "IS", "India": "IN", "Indonesia": "ID", "Iran": "IR", "Iraq": "IQ", "Ireland": "IE", "Israel": "IL", "Italy": "IT", "Jamaica": "JM", "Japan": "JP", "Jordan": "JO", "Kazakhstan": "KZ", "Kenya": "KE", "Kuwait": "KW", "Kyrgyzstan": "KG", "Laos": "LA", "Latvia": "LV", "Lebanon": "LB", "Liberia": "LR", "Libya": "LY", "Lithuania": "LT", "Luxembourg": "LU", "Macau": "MO", "Madagascar": "MG", "Malaysia": "MY", "Maldives": "MV", "Mali": "ML", "Malta": "MT", "Mexico": "MX", "Moldova": "MD", "Monaco": "MC", "Mongolia": "MN", "Morocco": "MA", "Myanmar": "MM", "Namibia": "NA", "Nepal": "NP", "Netherlands": "NL", "New Zealand": "NZ", "Nicaragua": "NI", "Nigeria": "NG", "Norway": "NO", "Oman": "OM", "Pakistan": "PK", "Palestine": "PS", "Panama": "PA", "Paraguay": "PY", "Peru": "PE", "Philippines": "PH", "Poland": "PL", "Portugal": "PT", "Qatar": "QA", "Romania": "RO", "Russia": "RU", "Saudi Arabia": "SA", "Senegal": "SN", "Serbia": "RS", "Singapore": "SG", "Slovakia": "SK", "Slovenia": "SI", "South Africa": "ZA", "South Korea": "KR", "Spain": "ES", "Sri Lanka": "LK", "Sudan": "SD", "Sweden": "SE", "Switzerland": "CH", "Syria": "SY", "Taiwan": "TW", "Tanzania": "TZ", "Thailand": "TH", "Tunisia": "TN", "Turkey": "TR", "Uganda": "UG", "Ukraine": "UA", "United Arab Emirates": "AE", "United Kingdom": "GB", "United States": "US", "Uruguay": "UY", "Uzbekistan": "UZ", "Venezuela": "VE", "Vietnam": "VN", "Yemen": "YE", "Zambia": "ZM", "Zimbabwe": "ZW"
        };
        return mapping[name] || "";
    },

    updateFilterUI(type, value, emoji = null, flagUrl = null) {
        const card = document.querySelector(`.filter-card[data-filter="${type}"]`);
        if (!card) return;

        const label = card.querySelector('span:nth-last-child(2)');
        if (label) {
            label.innerText = value;
            label.classList.add('text-primary');
            setTimeout(() => label.classList.remove('text-primary'), 500);
        }

        if (type === 'location') {
            const container = card.querySelector('div:first-child');
            if (container) {
                if (flagUrl) {
                    container.innerHTML = `<img src="${flagUrl}" class="size-10 rounded-lg object-cover" alt="flag">`;
                } else {
                    container.innerHTML = `<span class="material-symbols-outlined text-primary !text-[28px]">public</span>`;
                }
            }
        }

        // Add a subtle animation to the card
        card.classList.add('scale-105');
        setTimeout(() => card.classList.remove('scale-105'), 200);
    },

    async enterChat() {
        this.show(this.el.chat, 'slide');
        this.state.isActive = true;
        try {
            const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            this.state.localStream = s;
            if (this.el.localVid) this.el.localVid.srcObject = s;
            this.runScanner();
        } catch {
            this.sysMsg('Camera error.');
        }
        this.searchStranger();
    },

    leaveChat() {
        if (this.state.currentCall) this.state.currentCall.close();
        if (this.state.localStream) {
            this.state.localStream.getTracks().forEach(t => t.stop());
            this.state.localStream = null;
        }
        clearInterval(this.state.timerInterval);
        this.show(this.el.home, 'slide-back');
    },

    async searchStranger() {
        if (this.state.currentCall) this.state.currentCall.close();

        this.state.isSearching = true;
        this.el.overlay.style.opacity = '1';
        this.el.overlay.style.pointerEvents = 'all';
        this.el.ph.style.opacity = '1';
        this.el.locBadge.style.opacity = '0';
        if (this.el.remoteVid) this.el.remoteVid.srcObject = null;

        const speed = this.state.cloudSettings.matchSpeed;

        setTimeout(async () => {
            console.log("Searching for real peers globally in Supabase...");

            if (supabase) {
                try {
                    const { data } = await supabase.from('presence')
                        .select('peer_id')
                        .neq('peer_id', this.state.myPeerId)
                        .eq('is_available', true)
                        .limit(1);

                    if (data && data.length > 0) {
                        const strangerId = data[0].peer_id;
                        const call = this.state.peer.call(strangerId, this.state.localStream);
                        this.handleCall(call);

                        // Mark both as busy in cloud
                        await supabase.from('presence').update({ is_available: false }).eq('peer_id', this.state.myPeerId);
                    } else {
                        this.onStrangerConnected();
                    }
                } catch (e) {
                    this.onStrangerConnected();
                }
            } else {
                this.onStrangerConnected();
            }
        }, speed);
    },

    startTimer() {
        clearInterval(this.state.timerInterval);
        this.state.chatTimer = 0;
        this.state.timerInterval = setInterval(() => {
            this.state.chatTimer++;
            const m = String(Math.floor(this.state.chatTimer / 60)).padStart(2, '0');
            const s = String(this.state.chatTimer % 60).padStart(2, '0');
            this.el.timer.innerText = `${m}:${s}`;
        }, 1000);
    },

    runScanner() {
        // AI Face scan removed
    },

    sendMsg() {
        const t = this.el.input.value.trim();
        if (!t) return;
        this.addMsg('You', t, true);
        this.el.input.value = '';
        if (!this.state.isSearching) {
            setTimeout(() => {
                this.showType();
                setTimeout(() => {
                    this.hideType();
                    this.addMsg('Stranger', 'Cool! 😄', false);
                }, 1500);
            }, 500);
        }
    },

    addMsg(s, t, isMe) {
        const div = document.createElement('div');
        div.className = 'flex flex-col mb-2 ' + (isMe ? 'items-end' : 'items-start');
        div.innerHTML = `<p class="text-sm p-2 rounded-xl ${isMe ? 'bg-primary/40' : 'bg-white/10'}">${t}</p>`;
        this.el.msgs.appendChild(div);
        this.el.msgs.scrollTop = this.el.msgs.scrollHeight;
    },

    sysMsg(t) {
        const d = document.createElement('div');
        d.className = 'text-center text-[10px] text-slate-500 my-2 uppercase';
        d.innerText = t;
        this.el.msgs.appendChild(d);
    },

    showType() {
        const d = document.createElement('div');
        d.id = 'typing';
        d.className = 'text-[10px] text-slate-500 italic animate-pulse';
        d.innerText = 'Stranger is typing...';
        this.el.msgs.appendChild(d);
    },

    hideType() { document.getElementById('typing')?.remove(); },

    toggleMedia(type, btn) {
        if (!this.state.localStream) return;
        const track = type === 'audio' ? this.state.localStream.getAudioTracks()[0] : this.state.localStream.getVideoTracks()[0];
        if (track) track.enabled = !track.enabled;
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
