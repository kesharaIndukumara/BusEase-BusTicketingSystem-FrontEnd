import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './ReviewsPage.css';

// Example data for reviews
const reviewsData = [
  {
    id: 1,
    name: "Emma Watson",
    role: "UX/UI Designer",
    rating: 5,
    reviewText: "As a designer, visuals matter most. BusEase saved me hours by generating sleek, iOS-style app icons with just a few inputs. The AI suggestions are pure gold. This tool belongs in every designer's kit.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/emma-watson-avatar?placeholderIfAbsent=true&apiKey=placeholder",
    isLongReview: false
  },
  {
    id: 2,
    name: "Andrew Garfield",
    role: "Full Stack Developer",
    rating: 5,
    reviewText: "I'm not a designer, but I care about clean UI. BusEase lets me generate pixel-perfect icons without diving into Figma. It's like having a design partner on standby 24/7!",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/andrew-garfield-avatar?placeholderIfAbsent=true&apiKey=placeholder",
    isLongReview: false
  },
  {
    id: 3,
    name: "Sydney Sweeney",
    role: "Marketing Manager",
    rating: 5,
    reviewText: "Consistent branding is everything in marketing. BusEase helped me produce beautiful, brand-specific icons that instantly grabbed attention. It's fast, intuitive, and super smart!",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/sydney-sweeney-avatar?placeholderIfAbsent=true&apiKey=placeholder",
    isLongReview: true,
    fullReviewLink: "#"
  },
  {
    id: 4,
    name: "Chris Evans",
    role: "Product Manager",
    rating: 5,
    reviewText: "BusEase has transformed our booking experience. The interface is incredibly user-friendly and our customers love how easy it is to book their trips. Customer satisfaction has increased by 40% since we started using this platform.",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/chris-evans-avatar?placeholderIfAbsent=true&apiKey=placeholder",
    isLongReview: false
  },
  {
    id: 5,
    name: "Scarlett Johansson",
    role: "Business Owner",
    rating: 5,
    reviewText: "Running a bus service became so much easier with BusEase. The dashboard is comprehensive, booking management is seamless, and the customer support is outstanding. Highly recommended!",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/scarlett-avatar?placeholderIfAbsent=true&apiKey=placeholder",
    isLongReview: true,
    fullReviewLink: "#"
  },
  {
    id: 6,
    name: "Tom Holland",
    role: "Frequent Traveler",
    rating: 4,
    reviewText: "As someone who travels frequently for work, BusEase has made my life so much easier. Quick bookings, reliable service, and great customer support. The mobile app is fantastic too!",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/tom-holland-avatar?placeholderIfAbsent=true&apiKey=placeholder",
    isLongReview: false
  }
];

const ReviewCard: React.FC<{
  name: string;
  role: string;
  rating: number;
  reviewText: string;
  avatar: string;
  isLongReview?: boolean;
  fullReviewLink?: string;
}> = ({ name, role, rating, reviewText, avatar, isLongReview, fullReviewLink }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="review-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-start space-x-4">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 avatar-fallback"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;
          }}
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
            <div className="star-rating space-x-1">
              {renderStars(rating)}
            </div>
          </div>
          
          <p className="testimonial-text text-gray-700 leading-relaxed mb-4">{reviewText}</p>
          
          {isLongReview && fullReviewLink && (
            <div className="flex items-center justify-between">
              <a
                href={fullReviewLink}
                className="read-more-link text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center space-x-1 transition-colors duration-200"
              >
                <span>Read full review</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ReviewsPage: React.FC = () => {
  const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;
  const totalReviews = reviewsData.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content with top padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="hero-title text-4xl md:text-5xl font-bold mb-4">
              What Our Happy Users Say!
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Smarter, faster, and way more fun here's what makes BusEase your ultimate travel companion.
            </p>
            
            {/* Stats Cards */}
            <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="stats-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex items-center justify-center mb-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < Math.floor(averageRating) ? 'text-yellow-400' : 'text-white/40'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-blue-100">Average Rating</div>
              </div>
              
              <div className="stats-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold mb-2">{totalReviews}+</div>
                <div className="text-blue-100">Total Reviews</div>
              </div>
              
              <div className="stats-card rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="reviews-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsData.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                role={review.role}
                rating={review.rating}
                reviewText={review.reviewText}
                avatar={review.avatar}
                isLongReview={review.isLongReview}
                fullReviewLink={review.fullReviewLink}
              />
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience BusEase?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust BusEase for their travel needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Book Your Trip Now
              </button>
              <button className="cta-button border border-gray-400 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReviewsPage;