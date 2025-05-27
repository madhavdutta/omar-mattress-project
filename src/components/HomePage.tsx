import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

// SVG Icon Components
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 fill-current">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-xl">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-indigo-600">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default function HomePage() {
  const [countdown, setCountdown] = useState({
    days: 3,
    hours: 12,
    minutes: 34,
    seconds: 56
  });
  
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    // Simulate countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
          if (minutes < 0) {
            minutes = 59;
            hours -= 1;
            if (hours < 0) {
              hours = 23;
              days -= 1;
              if (days < 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
                clearInterval(timer);
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    // Simulate visitor counter
    const randomVisitors = Math.floor(Math.random() * 50) + 120;
    setVisitorCount(randomVisitors);
    
    const visitorTimer = setInterval(() => {
      setVisitorCount(prev => prev + 1);
    }, 8000);
    
    return () => {
      clearInterval(timer);
      clearInterval(visitorTimer);
    };
  }, []);
  
  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };
  
  const testimonials = [
    {
      name: "Sarah J.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "After years of back pain, the Omar Luxury Firm mattress changed my life. I've never slept better!",
      rating: 5
    },
    {
      name: "Michael T.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The quiz recommended the perfect mattress for me and my wife. We both sleep soundly now despite having different preferences.",
      rating: 5
    },
    {
      name: "Jessica L.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "I was skeptical about buying a mattress online, but Omar's 100-night trial made it risk-free. I'm keeping it forever!",
      rating: 5
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Sleep Like Royalty with</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Omar Mattresses</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the perfect night's sleep with our scientifically designed mattresses. 
                  Engineered for optimal comfort and support, backed by our 100-night risk-free trial.
                </p>
                
                {/* Live visitor counter */}
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  <UsersIcon />
                  <span>{visitorCount} people shopping right now</span>
                </div>
                
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/quiz"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Take the Sleep Quiz <ArrowRightIcon />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#featured-mattresses"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Mattresses
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Person sleeping peacefully on an Omar mattress"
          />
        </div>
      </div>
      
      {/* Limited Time Offer */}
      <div className="bg-indigo-700 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <ClockIcon />
              <span className="font-bold text-lg">LIMITED TIME OFFER:</span>
              <span className="ml-2">Save 25% + Get 2 Free Pillows</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="bg-white text-indigo-700 rounded-md px-3 py-1 font-bold text-xl">
                  {formatTime(countdown.days)}
                </div>
                <div className="text-xs mt-1">Days</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-indigo-700 rounded-md px-3 py-1 font-bold text-xl">
                  {formatTime(countdown.hours)}
                </div>
                <div className="text-xs mt-1">Hours</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-indigo-700 rounded-md px-3 py-1 font-bold text-xl">
                  {formatTime(countdown.minutes)}
                </div>
                <div className="text-xs mt-1">Mins</div>
              </div>
              <div className="text-center">
                <div className="bg-white text-indigo-700 rounded-md px-3 py-1 font-bold text-xl">
                  {formatTime(countdown.seconds)}
                </div>
                <div className="text-xs mt-1">Secs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quiz Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Sleep Science</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Find Your Perfect Mattress Match
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our scientifically-backed quiz analyzes your sleep style, body type, and preferences to recommend your ideal mattress.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="bg-indigo-50 rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img 
                    className="h-full w-full object-cover" 
                    src="https://images.pexels.com/photos/4546132/pexels-photo-4546132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Person taking sleep quiz" 
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    2-Minute Quiz
                  </div>
                  <h3 className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900">
                    Answer a Few Simple Questions
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Our quiz considers factors like:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {['Sleep position', 'Body type', 'Pain points', 'Temperature preferences', 'Budget'].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/quiz"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Start the Quiz <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Mattresses */}
      <div id="featured-mattresses" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Featured Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Most Popular Mattresses
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Handcrafted with premium materials for the ultimate sleep experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mattress 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Omar Hybrid Mattress" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-4 rounded-full text-sm font-bold">
                  BEST SELLER
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Omar Hybrid Luxury</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="ml-2 text-gray-600">(1,248 reviews)</span>
                </div>
                <p className="mt-3 text-gray-600">
                  Perfect balance of comfort and support with premium memory foam and pocket coils.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-gray-400 line-through">$1,299</span>
                  <span className="ml-2 text-2xl font-bold text-gray-900">$974</span>
                  <span className="ml-2 text-sm text-green-600 font-medium">Save 25%</span>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mattress 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6186830/pexels-photo-6186830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Omar Memory Foam Mattress" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 m-4 rounded-full text-sm font-bold">
                  COOLING
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Omar Memory Cloud</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="ml-2 text-gray-600">(943 reviews)</span>
                </div>
                <p className="mt-3 text-gray-600">
                  Advanced cooling gel memory foam for hot sleepers with pressure relief technology.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-gray-400 line-through">$999</span>
                  <span className="ml-2 text-2xl font-bold text-gray-900">$749</span>
                  <span className="ml-2 text-sm text-green-600 font-medium">Save 25%</span>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mattress 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/6585754/pexels-photo-6585754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Omar Organic Mattress" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 m-4 rounded-full text-sm font-bold">
                  ORGANIC
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Omar Natural Latex</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                  <span className="ml-2 text-gray-600">(721 reviews)</span>
                </div>
                <p className="mt-3 text-gray-600">
                  100% organic latex and wool for eco-conscious sleepers. Naturally hypoallergenic.
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-gray-400 line-through">$1,499</span>
                  <span className="ml-2 text-2xl font-bold text-gray-900">$1,124</span>
                  <span className="ml-2 text-sm text-green-600 font-medium">Save 25%</span>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="block text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-12 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Choose Omar</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sleep Better, Guaranteed
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <ShieldIcon />,
                title: "100-Night Trial",
                description: "Try your mattress for 100 nights. If you don't love it, we'll pick it up for free."
              },
              {
                icon: <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>,
                title: "Free Shipping",
                description: "Free shipping and returns on all mattresses, no matter where you live."
              },
              {
                icon: <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>,
                title: "10-Year Warranty",
                description: "Every mattress is backed by our 10-year warranty against manufacturing defects."
              },
              {
                icon: <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>,
                title: "Easy Financing",
                description: "Pay as little as $63/month with 0% APR financing options available at checkout."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready for the best sleep of your life?</span>
            <span className="block text-indigo-200">Take our quiz and get 25% off today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Take the Sleep Quiz
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#featured-mattresses"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Mattresses</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Pillows</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Bedding</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Bed Frames</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Shipping</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Reviews</a></li>
                <li><Link to="/embed" className="text-base text-gray-300 hover:text-white">Embed Quiz</Link></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="ml-3 text-gray-300 hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="ml-3 text-gray-300 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li className="mt-4">
                  <form className="mt-4 sm:flex sm:max-w-md">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input type="email" name="email-address" id="email-address" autoComplete="email" required className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400" placeholder="Enter your email" />
                    <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button type="submit" className="w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Omar Mattresses. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
