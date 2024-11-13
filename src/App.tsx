import React from 'react';
import { Search, Menu, Lightbulb, Rocket, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 border-b bg-white sticky top-0 z-50">
    <h1 className="text-2xl font-bold">KFoundry</h1>
    <div className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-blue-600">Solutions</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
    <div className="flex items-center space-x-4 md:hidden">
      <Search className="w-5 h-5" />
      <Menu className="w-5 h-5" />
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight text-gray-900">
          Helping Entrepreneurial Leaders use AI to Grow Their Businesses
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your business knowledge into powerful AI solutions that drive growth and create lasting competitive advantages.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <span>Schedule Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[80vh]">
              <DialogHeader>
                <DialogTitle>Schedule Your Executive Workshop</DialogTitle>
              </DialogHeader>
              <iframe 
                src="https://sphenoid-boursin-046.notion.site/13db1b3f109480789f37d4a982dfff71?pvs=105"
                className="w-full h-full"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  </div>
);

const QuestionCard = ({ icon: Icon, question, answer }) => (
  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col space-y-4 border border-gray-100">
    <div className="flex items-center space-x-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed ml-14">{answer}</p>
    {/* Learn more links commented out until content is ready
    <div className="ml-14 pt-4">
      <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center space-x-2 group">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    */}
  </div>
);

const AIQuestions = () => {
  const questions = [
    {
      icon: Lightbulb,
      question: "Where do I start with AI?",
      answer: "We begin with your business challenges. Through our focused workshop, we identify the perfect intersection between your growth objectives and AI's capabilities, creating a clear roadmap for implementation."
    },
    {
      icon: Rocket,
      question: "How quickly can I see results?",
      answer: "We believe in rapid validation through quick prototypes. Every solution we build goes from concept to production in 6 weeks or less, allowing you to verify value and iterate fast in this rapidly evolving technology landscape."
    },
    {
      icon: TrendingUp,
      question: "How can I scale AI cost-effectively?",
      answer: "Our flexible architecture lets you expand use cases while avoiding vendor lock-in. We leverage the latest open-source models and cost-effective alternatives to premium services, cutting operational costs by up to 90%."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Your Path to AI Success</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We've simplified the journey to implementing AI in your business. Start with these key questions and discover how we can help you succeed.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {questions.map((item, index) => (
          <QuestionCard
            key={index}
            icon={item.icon}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const benefits = [
    "20+ years of experience in AI and machine learning",
    "Proven track record with Fortune 500 companies",
    "Rapid prototyping and implementation",
    "Cost-effective, scalable solutions"
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            A Business Founded on a Simple and Powerful Model
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">KFoundry</h3>
          <p className="text-gray-400 text-sm">
            Transforming business knowledge into AI-powered competitive advantages.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">AI Strategy</a></li>
            <li><a href="#" className="hover:text-white">Machine Learning</a></li>
            <li><a href="#" className="hover:text-white">Data Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 text-sm">© 2024 KFoundry. All rights reserved.</div>
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Privacy Notice</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Legal Notice</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      <Hero />
      <AIQuestions />
      <About />
    </main>
    <Footer />
  </div>
);

export default App;