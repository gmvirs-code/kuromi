import React, { useState, useEffect } from 'react';
import { Heart, Star, Trophy, RotateCcw } from 'lucide-react';

const CatchTheHearts = () => {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; caught: boolean }>>([]);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [gameActive, timeLeft]);

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        setHearts(prev => [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 90,
            y: -10,
            caught: false
          }
        ]);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameActive]);

  const startGame = () => {
    setScore(0);
    setHearts([]);
    setTimeLeft(30);
    setGameActive(true);
  };

  const catchHeart = (heartId: number) => {
    setHearts(prev => 
      prev.map(heart => 
        heart.id === heartId ? { ...heart, caught: true } : heart
      )
    );
    setScore(prev => prev + 1);
  };

  return (
    <div className="anime-card p-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-romantic font-bold text-passionate-red mb-2">
          Catch the Hearts
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Tap the falling hearts before they disappear!
        </p>
        
        {!gameActive ? (
          <button onClick={startGame} className="love-button">
            <Heart className="w-4 h-4 mr-2" />
            Start Game
          </button>
        ) : (
          <div className="flex justify-center space-x-4 text-sm">
            <span>Score: {score}</span>
            <span>Time: {timeLeft}s</span>
          </div>
        )}
      </div>
      
      {gameActive && (
        <div className="relative h-64 bg-gradient-soft rounded-lg overflow-hidden">
          {hearts.map(heart => (
            <Heart
              key={heart.id}
              className={`absolute w-6 h-6 text-passionate-red cursor-pointer transition-all ${
                heart.caught ? 'scale-150 opacity-0' : 'animate-bounce'
              }`}
              style={{
                left: `${heart.x}%`,
                top: `${heart.y + (30 - timeLeft) * 8}px`
              }}
              onClick={() => catchHeart(heart.id)}
            />
          ))}
        </div>
      )}
      
      {!gameActive && score > 0 && (
        <div className="text-center mt-4">
          <Trophy className="w-6 h-6 text-passionate-red mx-auto mb-2" />
          <p className="text-sm">Final Score: <strong>{score} hearts!</strong></p>
        </div>
      )}
    </div>
  );
};

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's your favorite thing about our relationship?",
      options: [
        "Our deep conversations",
        "The way we laugh together", 
        "How comfortable we are with each other",
        "Everything about us ✨"
      ]
    },
    {
      question: "Which moment made you realize how special we are?",
      options: [
        "Our first long conversation",
        "When we started gaming together",
        "Those late-night calls",
        "Every single day with you"
      ]
    },
    {
      question: "What's our biggest strength as a couple?",
      options: [
        "We communicate openly",
        "We support each other's dreams",
        "We have fun together",
        "We just understand each other"
      ]
    },
    {
      question: "What do you love most about me?",
      options: [
        "Your caring heart",
        "Your beautiful smile",
        "Your amazing personality",
        "Everything about you 💕"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="anime-card p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-romantic font-bold text-passionate-red mb-2">
          Love Quiz
        </h3>
        <p className="text-sm text-muted-foreground">
          Answer these questions about us 💕
        </p>
      </div>
      
      {!showResult ? (
        <div>
          <div className="mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-passionate-red h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-4 text-center">
              {questions[currentQuestion].question}
            </h4>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-3 text-left rounded-lg border border-border hover:border-passionate-red hover:bg-blush-pink transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Star className="w-12 h-12 text-passionate-red mx-auto mb-4" />
          <h4 className="text-lg font-bold mb-4">Quiz Complete! 💕</h4>
          <p className="text-sm text-muted-foreground mb-6">
            Thank you for sharing your thoughts about us. Every answer shows how much we mean to each other!
          </p>
          <button onClick={resetQuiz} className="love-button">
            <RotateCcw className="w-4 h-4 mr-2" />
            Take Again
          </button>
        </div>
      )}
    </div>
  );
};

const MiniGames = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-romantic font-bold text-foreground mb-4">
          Mini Games
        </h2>
        <p className="text-lg text-muted-foreground">
          Let's have some fun together!
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <CatchTheHearts />
        <LoveQuiz />
      </div>
    </section>
  );
};

export default MiniGames;