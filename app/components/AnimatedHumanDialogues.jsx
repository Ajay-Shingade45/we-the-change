'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedHumanDialogues({ program, className = "", onClick }) {
  const [currentDialogue, setCurrentDialogue] = useState(0);

  // Program-specific dialogues with human faces
  const getProgramData = (program) => {
    const programs = {
      'paint-me-red': {
        background: 'from-red-500 via-pink-500 to-red-700',
        icon: '🎨',
        title: 'Breaking the Silence',
        dialogues: [
          { 
            id: '1', 
            text: "I never thought I could express this through art!", 
            speaker: "Priya", 
            name: "Priya",
            age: 16,
            position: { top: "15%", left: "10%" }, 
            delay: 0, 
            color: "bg-red-500",
            face: "👩‍🎨"
          },
          { 
            id: '2', 
            text: "This workshop changed how I see my body.", 
            speaker: "Meera", 
            name: "Meera",
            age: 19,
            position: { top: "45%", left: "70%" }, 
            delay: 1, 
            color: "bg-pink-500",
            face: "👩‍🦱"
          },
          { 
            id: '3', 
            text: "We're creating change, one brushstroke at a time.", 
            speaker: "Asha", 
            name: "Asha",
            age: 24,
            position: { top: "75%", left: "25%" }, 
            delay: 2, 
            color: "bg-coral-500",
            face: "👩‍🦰"
          },
          { 
            id: '4', 
            text: "Art helped me find my voice.", 
            speaker: "Sunita", 
            name: "Sunita",
            age: 17,
            position: { top: "30%", left: "60%" }, 
            delay: 3, 
            color: "bg-red-400",
            face: "👩‍💼"
          }
        ]
      },
      'red-waste': {
        background: 'from-teal-500 via-green-500 to-teal-700',
        icon: '♻️',
        title: 'Green Revolution',
        dialogues: [
          { 
            id: '1', 
            text: "Finally, a way to dispose safely!", 
            speaker: "Rahul", 
            name: "Rahul",
            age: 22,
            position: { top: "20%", left: "15%" }, 
            delay: 0, 
            color: "bg-teal-500",
            face: "👨‍💼"
          },
          { 
            id: '2', 
            text: "Our village is now waste-free.", 
            speaker: "Kavita", 
            name: "Kavita",
            age: 28,
            position: { top: "50%", left: "65%" }, 
            delay: 1, 
            color: "bg-green-500",
            face: "👩‍🌾"
          },
          { 
            id: '3', 
            text: "Teaching my daughters about sustainability.", 
            speaker: "Neha", 
            name: "Neha",
            age: 32,
            position: { top: "80%", left: "30%" }, 
            delay: 2, 
            color: "bg-teal-400",
            face: "👩‍👧‍👧"
          },
          { 
            id: '4', 
            text: "Every small action counts!", 
            speaker: "Vikram", 
            name: "Vikram",
            age: 25,
            position: { top: "35%", left: "75%" }, 
            delay: 3, 
            color: "bg-green-400",
            face: "👨‍🔬"
          }
        ]
      },
      'train-the-trainer': {
        background: 'from-yellow-500 via-orange-500 to-yellow-700',
        icon: '🌟',
        title: 'Empowering Leaders',
        dialogues: [
          { 
            id: '1', 
            text: "I'm now training others in my community!", 
            speaker: "Dr. Patel", 
            name: "Dr. Patel",
            age: 35,
            position: { top: "25%", left: "20%" }, 
            delay: 0, 
            color: "bg-yellow-500",
            face: "👩‍⚕️"
          },
          { 
            id: '2', 
            text: "The knowledge I gained is priceless.", 
            speaker: "Rajesh", 
            name: "Rajesh",
            age: 28,
            position: { top: "55%", left: "70%" }, 
            delay: 1, 
            color: "bg-orange-500",
            face: "👨‍🏫"
          },
          { 
            id: '3', 
            text: "I can now lead workshops confidently.", 
            speaker: "Sunita", 
            name: "Sunita",
            age: 26,
            position: { top: "80%", left: "15%" }, 
            delay: 2, 
            color: "bg-yellow-400",
            face: "👩‍💻"
          },
          { 
            id: '4', 
            text: "Training others gives me purpose.", 
            speaker: "Meera", 
            name: "Meera",
            age: 30,
            position: { top: "40%", left: "60%" }, 
            delay: 3, 
            color: "bg-orange-400",
            face: "👩‍🎓"
          }
        ]
      },
      'project-sachet': {
        background: 'from-blue-500 via-indigo-500 to-blue-700',
        icon: '💧',
        title: 'Health for All',
        dialogues: [
          { 
            id: '1', 
            text: "Now I can afford proper hygiene!", 
            speaker: "Kavita", 
            name: "Kavita",
            age: 24,
            position: { top: "20%", left: "25%" }, 
            delay: 0, 
            color: "bg-blue-500",
            face: "👩‍🦱"
          },
          { 
            id: '2', 
            text: "My daughters never miss school now.", 
            speaker: "Asha", 
            name: "Asha",
            age: 29,
            position: { top: "50%", left: "65%" }, 
            delay: 1, 
            color: "bg-indigo-500",
            face: "👩‍👧‍👧"
          },
          { 
            id: '3', 
            text: "The sachets are so convenient!", 
            speaker: "Priya", 
            name: "Priya",
            age: 18,
            position: { top: "75%", left: "20%" }, 
            delay: 2, 
            color: "bg-blue-400",
            face: "👩‍🎓"
          },
          { 
            id: '4', 
            text: "Finally, dignity for all women.", 
            speaker: "Sunita", 
            name: "Sunita",
            age: 31,
            position: { top: "35%", left: "70%" }, 
            delay: 3, 
            color: "bg-indigo-400",
            face: "👩‍💼"
          }
        ]
      }
    };
    
    return programs[program] || programs['paint-me-red'];
  };

  const programData = getProgramData(program);

  // Cycle through dialogues
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDialogue((prev) => (prev + 1) % programData.dialogues.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [programData.dialogues.length]);

  return (
    <motion.div 
      className={`relative overflow-hidden group cursor-pointer ${className}`} 
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated gradient background */}
      <div className={`w-full h-full bg-gradient-to-br ${programData.background} relative overflow-hidden`}>
        {/* Animated floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        {/* Central program icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
          <motion.div
            className="text-6xl opacity-20"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {programData.icon}
          </motion.div>
        </div>

        {/* Animated human faces with dialogue bubbles */}
        {programData.dialogues.map((dialogue, index) => (
          <motion.div
            key={dialogue.id}
            className="absolute"
            style={dialogue.position}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: currentDialogue === index ? 1 : 0,
              scale: currentDialogue === index ? 1 : 0.8,
              y: currentDialogue === index ? 0 : 20
            }}
            transition={{ 
              duration: 0.6, 
              delay: dialogue.delay * 0.2,
              ease: "easeOut"
            }}
          >
            <div className="relative">
              {/* Human Face Avatar */}
              <motion.div 
                className="relative mb-2"
                animate={{
                  scale: currentDialogue === index ? [1, 1.1, 1] : 1,
                  rotate: currentDialogue === index ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: currentDialogue === index ? 0.2 : 0
                }}
              >
                {/* Face with animated background */}
                <div className="relative">
                  <motion.div 
                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl backdrop-blur-sm border-2 border-white/30"
                    animate={{
                      boxShadow: currentDialogue === index ? 
                        ['0 0 0 rgba(255,255,255,0)', '0 0 20px rgba(255,255,255,0.5)', '0 0 0 rgba(255,255,255,0)'] : 
                        '0 0 0 rgba(255,255,255,0)'
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {dialogue.face}
                  </motion.div>
                  
                  {/* Animated ring around face */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/40 rounded-full"
                    animate={{
                      scale: currentDialogue === index ? [1, 1.3, 1] : 1,
                      opacity: currentDialogue === index ? [0.5, 0.8, 0.5] : 0.3
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Speech Bubble */}
              <motion.div 
                className={`${dialogue.color} text-white rounded-2xl px-4 py-3 shadow-lg border border-white/20 max-w-[200px] backdrop-blur-sm`}
                animate={{
                  scale: currentDialogue === index ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: currentDialogue === index ? 0.5 : 0
                }}
              >
                <p className="text-sm font-medium leading-relaxed">
                  "{dialogue.text}"
                </p>
                <p className="text-xs text-white/80 mt-1 italic">
                  — {dialogue.name}, {dialogue.age}
                </p>
              </motion.div>
              
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95"></div>
            </div>
          </motion.div>
        ))}

        {/* Title overlay */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{programData.title}</h3>
          <p className="text-white/80 text-sm">Real voices, real change</p>
        </motion.div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-white/30 rounded-lg"
          animate={{ 
            borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.3)'],
            boxShadow: ['0 0 0 rgba(255,255,255,0)', '0 0 20px rgba(255,255,255,0.3)', '0 0 0 rgba(255,255,255,0)']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
    </motion.div>
  );
}
