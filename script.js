/* ════════════════════════════════════════
   ONE8 — Own Your Style | script.js
   Premium Luxury Sportswear E-Commerce
   ════════════════════════════════════════ */

'use strict';

/* ─── Product Data ─── */
const products = [
  {
    id: 1, name: 'ONE8 Signature Hoodie', category: 'men',
    price: 3499, oldPrice: 4999, emoji: '🧥', badge: 'New',
    desc: 'Premium French terry cotton blend. Heavyweight comfort with ONE8 signature embroidery.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2, name: 'Performance Dry-Fit Tee', category: 'men',
    price: 1299, oldPrice: 1799, emoji: '👕', badge: 'Hot',
    desc: 'Moisture-wicking technology. Lightweight and breathable for training sessions.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3, name: 'ONE8 Air Runner Pro', category: 'shoes',
    price: 7999, oldPrice: 9999, emoji: '👟', badge: 'Limited', badgeType: 'gold',
    desc: 'Ultra-responsive cushioning. Engineered mesh upper for maximum breathability.',
    sizes: ['6', '7', '8', '9', '10', '11']
  },
  {
    id: 4, name: 'Elite Track Jacket', category: 'men',
    price: 4299, oldPrice: 5499, emoji: '🧤', badge: 'New',
    desc: 'Wind-resistant performance jacket. Clean minimalist design with reflective detailing.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 5, name: 'Power Jogger - Women', category: 'women',
    price: 2299, oldPrice: 2999, emoji: '🩳', badge: 'New',
    desc: 'High-waist design with side pockets. Tapered fit for that perfect athleisure look.',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 6, name: 'Virat Edition Cap', category: 'accessories',
    price: 999, oldPrice: 1299, emoji: '🧢', badge: 'Collab',
    desc: 'Six-panel structured cap with ONE8 woven patch. Adjustable snapback closure.',
    sizes: ['One Size']
  },
  {
    id: 7, name: 'Power Sports Bra', category: 'women',
    price: 1599, oldPrice: 2199, emoji: '🎽', badge: 'Best Seller', badgeType: 'gold',
    desc: 'Medium-impact support. Moisture-wicking fabric with a racerback silhouette.',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 8, name: 'ONE8 Street Joggers', category: 'men',
    price: 2599, oldPrice: 3299, emoji: '👖', badge: 'Sale',
    desc: 'Brushed fleece interior. Slim tapered fit ideal for both gym and street.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 9, name: 'Women\'s Flex Leggings', category: 'women',
    price: 1899, oldPrice: 2499, emoji: '🩱', badge: 'New',
    desc: 'Four-way stretch fabric. Squat-proof and sweat-wicking for intense workouts.',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 10, name: 'ONE8 Force Sneaker', category: 'shoes',
    price: 5999, oldPrice: 7499, emoji: '👠', badge: 'New',
    desc: 'Vulcanised rubber sole. Retro silhouette meets modern technology.',
    sizes: ['6', '7', '8', '9', '10', '11']
  },
  {
    id: 11, name: 'Training Windbreaker', category: 'women',
    price: 3799, oldPrice: 4999, emoji: '🥻', badge: 'Limited',
    desc: 'Packable design. Water-repellent shell with mesh lining for layered comfort.',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 12, name: 'ONE8 Sports Watch', category: 'accessories',
    price: 8999, oldPrice: 11999, emoji: '⌚', badge: 'Collab', badgeType: 'gold',
    desc: 'Heart-rate monitoring. GPS tracking with ONE8 custom watch face.',
    sizes: ['One Size']
  }
];

/* Sneaker data */
const sneakers = [
  {
    id: 101, name: 'ONE8 Air Runner Pro', tag: 'Flagship',
    emoji: '👟', price: 7999,
    desc: 'The shoe Virat trained in. Adaptive cushioning, carbon-infused midsole.'
  },
  {
    id: 102, name: 'ONE8 Force V2', tag: 'Street',
    emoji: '👡', price: 5999,
    desc: 'Classic court-inspired silhouette. Premium leather upper meets all-day comfort.'
  },
  {
    id: 103, name: 'ONE8 Speed Elite', tag: 'Performance',
    emoji: '🥿', price: 6499,
    desc: 'Racing-inspired design. Featherlight knit upper for explosive movement.'
  },
  {
    id: 104, name: 'ONE8 Street Low', tag: 'Lifestyle',
    emoji: '🩴', price: 3999,
    desc: 'Low-profile sleek design. Vulcanised rubber sole for effortless street style.'
  }
];

/* Testimonials data */
const testimonials = [
  {
    name: 'Aryan Mehta', location: 'Mumbai, MH', avatar: '🧔',
    text: 'The ONE8 hoodie is incredible quality. You can feel the premium stitching the moment you put it on. I get compliments every time I wear it!',
    stars: 5
  },
  {
    name: 'Priya Sharma', location: 'Delhi, DL', avatar: '👩',
    text: 'Finally a sportswear brand that gets women\'s fashion! The flex leggings are super comfortable and the design is on point. Love the ONE8 philosophy.',
    stars: 5
  },
  {
    name: 'Karan Patel', location: 'Bangalore, KA', avatar: '👦',
    text: 'Bought the Air Runner Pro for my morning runs. The cushioning is unreal — feels like running on clouds. Absolutely worth every rupee.',
    stars: 5
  },
  {
    name: 'Sneha Iyer', location: 'Chennai, TN', avatar: '🙍‍♀️',
    text: 'ONE8 is the real deal. The Elite Track Jacket fits perfectly and the quality is on par with international brands. Proud to support Virat\'s brand!',
    stars: 5
  },
  {
    name: 'Rohan Singh', location: 'Pune, MH', avatar: '🧑',
    text: 'The cap and the joggers together are a killer combo. The attention to detail in every product shows the passion behind the ONE8 brand.',
    stars: 5
  }
];

/* ─── App State ─── */
let cart = JSON.parse(localStorage.getItem('one8_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('one8_wishlist') || '[]');
let currentFilter = 'all';
let sliderIndex = 0;
let selectedSize = '';

/* ─── DOM Ready ─── */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initCart();
  renderProducts();
  renderSneakers();
  renderTestimonials();
  initScrollReveal();
  initBackToTop();
  initFilters();
  initSlider();
  initForms();
  initSearch();
  updateCartUI();
});

/* ═══════════════════════════════════
   LOADING SCREEN
═══════════════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1800);
  });
  // Safety fallback
  setTimeout(() => loader.classList.add('hidden'), 3000);
}

/* ═══════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower || window.innerWidth <= 768) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const hoverEls = document.querySelectorAll('a, button, .product-card, .collection-card, .sneaker-card, .filter-btn');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovered');
      follower.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovered');
      follower.classList.remove('hovered');
    });
  });
}

/* ═══════════════════════════════════
   NAVBAR
═══════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchClose = document.getElementById('searchClose');

  // Sticky effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    // Active section highlighting
    updateActiveNavLink();
  });

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on nav link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Search
  searchToggle.addEventListener('click', () => {
    searchBar.classList.add('open');
    document.getElementById('searchInput').focus();
  });
  searchClose.addEventListener('click', () => searchBar.classList.remove('open'));

  // Close search on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') searchBar.classList.remove('open');
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  links.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
}

/* ═══════════════════════════════════
   SEARCH
═══════════════════════════════════ */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
      const cat = card.dataset.category || '';
      if (!q || name.includes(q) || cat.includes(q)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
}

/* ═══════════════════════════════════
   RENDER PRODUCTS
═══════════════════════════════════ */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const inWishlist = wishlist.includes(p.id);
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = p.category;
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="product-img">
        <div class="product-img-inner">${p.emoji}</div>
        ${p.badge ? `<span class="product-badge ${p.badgeType === 'gold' ? 'gold' : ''}">${p.badge}</span>` : ''}
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">
          ${inWishlist ? '❤️' : '🤍'}
        </button>
        <button class="quick-view-btn" onclick="openModal(${p.id})">Quick View</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price-row">
          <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
          ${p.oldPrice ? `<span class="product-price-old">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : ''}
        </div>
        <button class="add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════
   RENDER SNEAKERS
═══════════════════════════════════ */
function renderSneakers() {
  const container = document.getElementById('sneakersShowcase');
  if (!container) return;

  sneakers.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'sneaker-card reveal-up';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="sneaker-img">
        ${s.emoji}
        <span class="sneaker-tag">${s.tag}</span>
      </div>
      <div class="sneaker-info">
        <div class="sneaker-name">${s.name}</div>
        <div class="sneaker-desc">${s.desc}</div>
        <div class="sneaker-footer">
          <span class="sneaker-price">₹${s.price.toLocaleString('en-IN')}</span>
          <button class="sneaker-add" onclick="addToCartById(${s.id}, '${s.name}', ${s.price}, '${s.emoji}')">Add to Cart</button>
        </div>
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('sneaker-add')) openSneakerModal(s);
    });
    container.appendChild(card);
  });
}

/* ═══════════════════════════════════
   RENDER TESTIMONIALS
═══════════════════════════════════ */
function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track) return;

  testimonials.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="t-stars">${'★'.repeat(t.stars)}</div>
      <p class="t-text">"${t.text}"</p>
      <div class="t-author">
        <div class="t-avatar">${t.avatar}</div>
        <div>
          <div class="t-name">${t.name}</div>
          <div class="t-location">${t.location}</div>
        </div>
      </div>
    `;
    track.appendChild(card);

    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

/* ═══════════════════════════════════
   SLIDER
═══════════════════════════════════ */
function initSlider() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (!prevBtn || !nextBtn) return;
  prevBtn.addEventListener('click', () => goToSlide(sliderIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(sliderIndex + 1));

  // Auto-play
  setInterval(() => goToSlide(sliderIndex + 1), 5000);
}

function goToSlide(index) {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.dot');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const perView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  const max = Math.ceil(cards.length / perView) - 1;

  sliderIndex = ((index % (max + 1)) + (max + 1)) % (max + 1);

  const cardWidth = cards[0]?.offsetWidth + 24 || 0; // gap = 1.5rem = 24px
  track.style.transform = `translateX(-${sliderIndex * cardWidth * perView}px)`;

  dots.forEach((d, i) => d.classList.toggle('active', i === sliderIndex));
}

/* ═══════════════════════════════════
   PRODUCT FILTERS
═══════════════════════════════════ */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProducts(currentFilter);
    });
  });
}

function filterByCategory(cat) {
  const section = document.getElementById('new-arrivals');
  section?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    btn?.click();
  }, 600);
}
window.filterByCategory = filterByCategory;

/* ═══════════════════════════════════
   CART SYSTEM
═══════════════════════════════════ */
function initCart() {
  const cartToggle = document.getElementById('cartToggle');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');

  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeCart = closeCart;

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  addToCartById(product.id, product.name, product.price, product.emoji);
}
window.addToCart = addToCart;

function addToCartById(id, name, price, emoji) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, emoji, qty: 1 });
  }
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast(`✓ ${name} added to cart`, 'success');

  // Animate cart button
  const cartBtn = document.getElementById('cartToggle');
  cartBtn.style.transform = 'scale(1.3)';
  setTimeout(() => cartBtn.style.transform = '', 300);
}
window.addToCartById = addToCartById;

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}
window.removeFromCart = removeFromCart;

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}
window.changeQty = changeQty;

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  renderCartItems();
  showToast('Cart cleared', 'gold');
}
window.clearCart = clearCart;

function saveCart() {
  localStorage.setItem('one8_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const countEl = document.getElementById('cartCount');
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;

  const footer = document.getElementById('cartFooter');
  const emptyEl = document.getElementById('cartEmpty');
  if (cart.length > 0) {
    if (footer) footer.style.display = 'flex';
    if (emptyEl) emptyEl.style.display = 'none';
  } else {
    if (footer) footer.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  // Remove existing cart items (not empty placeholder)
  const existingItems = container.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    `;
    container.appendChild(div);
  });
}

/* ═══════════════════════════════════
   WISHLIST
═══════════════════════════════════ */
function toggleWishlist(id, btn) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    btn.innerHTML = '🤍';
    btn.classList.remove('active');
    showToast('Removed from wishlist', 'gold');
  } else {
    wishlist.push(id);
    btn.innerHTML = '❤️';
    btn.classList.add('active');
    showToast(`♥ ${product.name} wishlisted!`, 'success');
  }
  localStorage.setItem('one8_wishlist', JSON.stringify(wishlist));
}
window.toggleWishlist = toggleWishlist;

/* ═══════════════════════════════════
   PRODUCT MODAL (QUICK VIEW)
═══════════════════════════════════ */
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  selectedSize = product.sizes[0] || '';

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-product-img">${product.emoji}</div>
    <div class="modal-product-body">
      <div class="product-category">${product.category}</div>
      <div class="modal-product-name">${product.name}</div>
      <div class="modal-product-price">₹${product.price.toLocaleString('en-IN')}</div>
      <p class="modal-product-desc">${product.desc}</p>
      <div class="modal-size-section">
        <label>Select Size</label>
        <div class="size-options">
          ${product.sizes.map(s => `<button class="size-opt ${s === selectedSize ? 'selected' : ''}" onclick="selectSize(this, '${s}')">${s}</button>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-primary" style="flex:1" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
        <button class="btn-ghost" onclick="toggleWishlist(${product.id}, this)">🤍</button>
      </div>
    </div>
  `;

  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
window.openModal = openModal;

function openSneakerModal(s) {
  const content = document.getElementById('modalContent');
  const sizes = ['6', '7', '8', '9', '10', '11'];
  content.innerHTML = `
    <div class="modal-product-img">${s.emoji}</div>
    <div class="modal-product-body">
      <div class="product-category">Footwear</div>
      <div class="modal-product-name">${s.name}</div>
      <div class="modal-product-price">₹${s.price.toLocaleString('en-IN')}</div>
      <p class="modal-product-desc">${s.desc}</p>
      <div class="modal-size-section">
        <label>Select Size (UK)</label>
        <div class="size-options">
          ${sizes.map((sz, i) => `<button class="size-opt ${i===0?'selected':''}" onclick="selectSize(this,'${sz}')">${sz}</button>`).join('')}
        </div>
      </div>
      <div class="modal-actions">
        <button class="btn-primary" style="flex:1" onclick="addToCartById(${s.id}, '${s.name}', ${s.price}, '${s.emoji}'); closeModal();">Add to Cart</button>
        <button class="btn-ghost">🤍</button>
      </div>
    </div>
  `;
  document.getElementById('productModal').classList.add('open');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedSize = size;
}
window.selectSize = selectSize;

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
window.closeModal = closeModal;

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

/* ═══════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });

  // Re-observe dynamically added elements
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal-up:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)').forEach(el => {
      observer.observe(el);
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

/* ═══════════════════════════════════
   BACK TO TOP
═══════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════
   FORMS
═══════════════════════════════════ */
function initForms() {
  // Newsletter
  const newsletter = document.getElementById('newsletterForm');
  if (newsletter) {
    newsletter.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmail').value;
      showToast(`🎉 Welcome to ONE8! Check your inbox.`, 'gold');
      newsletter.reset();
    });
  }

  // Contact
  const contact = document.getElementById('contactForm');
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('✓ Message sent! We\'ll be in touch.', 'success');
      contact.reset();
    });
  }
}

/* ═══════════════════════════════════
   TOAST NOTIFICATION
═══════════════════════════════════ */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ═══════════════════════════════════
   SMOOTH SCROLL for anchor links
═══════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════
   PARALLAX on hero
═══════════════════════════════════ */
window.addEventListener('scroll', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent && window.scrollY < window.innerHeight) {
    heroContent.style.transform = `translateY(${window.scrollY * 0.25}px)`;
  }
});

/* ═══════════════════════════════════
   INIT RENDER ON LOAD
═══════════════════════════════════ */
window.addEventListener('load', () => {
  renderCartItems();
  updateCartUI();
});
